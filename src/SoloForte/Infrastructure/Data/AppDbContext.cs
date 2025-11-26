using Microsoft.EntityFrameworkCore;
using SoloForte.Domain.Entities;

namespace SoloForte.Infrastructure.Data;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products => Set<Product>();

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var p = modelBuilder.Entity<Product>();
        p.HasKey(x => x.Id);
        p.Property(x => x.Name).HasMaxLength(180).IsRequired();
        p.Property(x => x.Price).HasColumnType("decimal(18,2)");
        p.Property(x => x.CreatedAt).HasDefaultValueSql("CURRENT_TIMESTAMP");

        // seed opcional (apenas exemplo)
        p.HasData(new Product { Id = 1, Name = "Sample", Price = 10, Stock = 5, CreatedAt = DateTime.UtcNow });
    }
}
