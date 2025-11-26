using System.Net;
using System.Text.Json;

namespace SoloForte.Middleware;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    public ExceptionHandlingMiddleware(RequestDelegate next) => _next = next;

    public async Task Invoke(HttpContext ctx)
    {
        try
        {
            await _next(ctx);
        }
        catch (ArgumentException ex)
        {
            await WriteError(ctx, HttpStatusCode.BadRequest, ex.Message);
        }
        catch (KeyNotFoundException ex)
        {
            await WriteError(ctx, HttpStatusCode.NotFound, ex.Message);
        }
        catch (Exception ex)
        {
            await WriteError(ctx, HttpStatusCode.InternalServerError, "Erro inesperado: " + ex.Message);
        }
    }

    private static Task WriteError(HttpContext ctx, HttpStatusCode code, string message)
    {
        ctx.Response.ContentType = "application/json";
        ctx.Response.StatusCode = (int)code;

        var payload = JsonSerializer.Serialize(new
        {
            error = message,
            status = (int)code,
            path = ctx.Request.Path,
            traceId = ctx.TraceIdentifier
        });

        return ctx.Response.WriteAsync(payload);
    }
}

public static class ExceptionHandlingExtensions
{
    public static IApplicationBuilder UseGlobalExceptionHandler(this IApplicationBuilder app) =>
        app.UseMiddleware<ExceptionHandlingMiddleware>();
}
