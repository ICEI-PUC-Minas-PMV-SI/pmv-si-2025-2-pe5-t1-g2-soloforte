using SoloForte.Application.DTOs;

namespace SoloForte.Application.Interfaces;

public interface IProductService
{
    Task<IEnumerable<ProductDto>> GetAllAsync(CancellationToken ct = default);
    Task<ProductDto?> GetByIdAsync(int id, CancellationToken ct = default);
    Task<ProductDto> CreateAsync(ProductDto dto, CancellationToken ct = default);
    Task<bool> UpdateAsync(int id, ProductDto dto, CancellationToken ct = default);
    Task<bool> DeleteAsync(int id, CancellationToken ct = default);
}
