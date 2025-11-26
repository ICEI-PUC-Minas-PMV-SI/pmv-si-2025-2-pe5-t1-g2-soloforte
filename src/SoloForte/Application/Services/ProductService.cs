using AutoMapper;
using SoloForte.Application.DTOs;
using SoloForte.Application.Interfaces;
using SoloForte.Domain.Entities;

namespace SoloForte.Application.Services;

public class ProductService : IProductService
{
    private readonly IProductRepository _repo;
    private readonly IMapper _mapper;

    public ProductService(IProductRepository repo, IMapper mapper)
    {
        _repo = repo;
        _mapper = mapper;
    }

    public async Task<IEnumerable<ProductDto>> GetAllAsync(CancellationToken ct = default)
    {
        var list = await _repo.GetAllAsync(ct);
        return _mapper.Map<IEnumerable<ProductDto>>(list);
    }

    public async Task<ProductDto?> GetByIdAsync(int id, CancellationToken ct = default)
    {
        var entity = await _repo.GetByIdAsync(id, ct);
        return entity is null ? null : _mapper.Map<ProductDto>(entity);
    }

    public async Task<ProductDto> CreateAsync(ProductDto dto, CancellationToken ct = default)
    {
        Validate(dto);
        var entity = _mapper.Map<Product>(dto);
        var created = await _repo.AddAsync(entity, ct);
        return _mapper.Map<ProductDto>(created);
    }

    public async Task<bool> UpdateAsync(int id, ProductDto dto, CancellationToken ct = default)
    {
        Validate(dto, isUpdate: true);

        var existing = await _repo.GetByIdAsync(id, ct);
        if (existing is null) return false;

        // atualiza campos
        existing.Name = dto.Name;
        existing.Description = dto.Description;
        existing.Price = dto.Price;
        existing.Stock = dto.Stock;

        await _repo.UpdateAsync(existing, ct);
        return true;
    }

    public async Task<bool> DeleteAsync(int id, CancellationToken ct = default)
    {
        var existing = await _repo.GetByIdAsync(id, ct);
        if (existing is null) return false;

        await _repo.DeleteAsync(existing, ct);
        return true;
    }

    private static void Validate(ProductDto dto, bool isUpdate = false)
    {
        if (string.IsNullOrWhiteSpace(dto.Name))
            throw new ArgumentException("Name é obrigatório.");

        if (dto.Price < 0)
            throw new ArgumentException("Price não pode ser negativo.");

        if (dto.Stock < 0)
            throw new ArgumentException("Stock não pode ser negativo.");

        if (!isUpdate && dto.Id.HasValue)
            throw new ArgumentException("Não envie Id no create.");
    }
}
