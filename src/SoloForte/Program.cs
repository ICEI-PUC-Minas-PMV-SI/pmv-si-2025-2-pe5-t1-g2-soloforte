using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SoloForte.Application.Interfaces;
using SoloForte.Application.Mappings;
using SoloForte.Application.Services;
using SoloForte.Infrastructure.Data;
using SoloForte.Infrastructure.Repositories;
using SoloForte.Middleware;

var builder = WebApplication.CreateBuilder(args);

// DbContext(Npgsql/PostgreSQL)
var connString = builder.Configuration.GetConnectionString("SOLOFORTE-DB");
builder.Services.AddDbContext<AppDbContext>(opt => opt.UseNpgsql(connString));

// AutoMapper
builder.Services.AddAutoMapper(cfg => cfg.AddProfile<MappingProfile>());

// DI
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();

//CORS Configuration
var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? [];
var allowCredentials = builder.Configuration.GetValue<bool>("Cors:AllowCredentials");
builder.Services.AddCors(options =>
{
    options.AddPolicy("ConfigurePolicy", policy =>
    {
        if (allowedOrigins.Length > 0)
        {
            policy.WithOrigins(allowedOrigins);
        }
        else {
            policy.AllowAnyOrigin();
        }
        policy.AllowAnyMethod().AllowAnyHeader();
        if(allowCredentials && allowedOrigins.Length > 0)
        {
            policy.AllowCredentials();
        }
        options.AddPolicy("Development", policy =>
        {
            policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
        });
    });
});

// Swagger (dev)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add Controllers
builder.Services.AddControllers();

var app = builder.Build();

// cria banco / aplica seed simples
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    await db.Database.EnsureCreatedAsync();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Forwarded Headers Middleware
app.UseForwardedHeaders();

app.UseGlobalExceptionHandler();

// Arquivos estáticos (CSS, JS, etc.)
app.UseStaticFiles();

//CORS
app.UseCors(app.Environment.IsDevelopment() ? "Development" : "ConfigurePolicy");

// Roteamento
app.UseRouting();

// APIs
app.MapControllers();

await app.RunAsync();
