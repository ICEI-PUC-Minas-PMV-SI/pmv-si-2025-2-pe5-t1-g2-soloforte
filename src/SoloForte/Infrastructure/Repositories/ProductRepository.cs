using Microsoft.EntityFrameworkCore;
using SoloForte.Application.Interfaces;
using SoloForte.Domain.Entities;
using SoloForte.Infrastructure.Data;

namespace SoloForte.Infrastructure.Repositories;

public class ProductRepository : IProductRepository
{
    private readonly AppDbContext _db;
    public ProductRepository(AppDbContext db) => _db = db;

    public async Task<IEnumerable<Product>> GetAllAsync(CancellationToken ct = default) =>
        await _db.Products.AsNoTracking().OrderBy(p => p.Id).ToListAsync(ct);

    public async Task<Product?> GetByIdAsync(int id, CancellationToken ct = default) =>
        await _db.Products.FindAsync(new object?[] { id }, ct);

    public async Task<Product> AddAsync(Product entity, CancellationToken ct = default)
    {
        _db.Products.Add(entity);
        await _db.SaveChangesAsync(ct);
        return entity;
    }

    public async Task UpdateAsync(Product entity, CancellationToken ct = default)
    {
        _db.Entry(entity).State = EntityState.Modified;
        await _db.SaveChangesAsync(ct);
    }

    public async Task DeleteAsync(Product entity, CancellationToken ct = default)
    {
        _db.Products.Remove(entity);
        await _db.SaveChangesAsync(ct);
    }

    public Task<bool> ExistsAsync(int id, CancellationToken ct = default) =>
        _db.Products.AnyAsync(p => p.Id == id, ct);
}
