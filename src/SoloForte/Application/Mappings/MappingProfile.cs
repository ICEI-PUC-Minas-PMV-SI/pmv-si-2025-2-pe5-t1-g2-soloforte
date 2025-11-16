using AutoMapper;
using SoloForte.Application.DTOs;
using SoloForte.Domain.Entities;

namespace SoloForte.Application.Mappings;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Product, ProductDto>()
            .ForCtorParam(nameof(ProductDto.Id), opt => opt.MapFrom(src => src.Id));

        CreateMap<ProductDto, Product>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id ?? 0))
            .ForMember(d => d.CreatedAt, opt => opt.Ignore());
    }
}
