using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SoloForte.Application.Interfaces;
using SoloForte.Application.Mappings;
using SoloForte.Application.Services;
using SoloForte.Infrastructure.Data;
using SoloForte.Infrastructure.Repositories;
using SoloForte.Middleware;

var builder = WebApplication.CreateBuilder(args);

// DbContext (SQLite)
var connString = builder.Configuration.GetConnectionString("Default") ?? "Data Source=app.db";
builder.Services.AddDbContext<AppDbContext>(opt => opt.UseSqlite(connString));

// AutoMapper
builder.Services.AddAutoMapper(cfg => cfg.AddProfile<MappingProfile>());

// DI
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();

// MVC / Controllers
builder.Services.AddControllers();

// Swagger (dev)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

app.UseGlobalExceptionHandler();

app.MapControllers();

await app.RunAsync();
