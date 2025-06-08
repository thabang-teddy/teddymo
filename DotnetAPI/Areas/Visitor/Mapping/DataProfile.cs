using AutoMapper;
using DotnetAPI.Areas.Visitor.ViewModels.Data;
using DotnetAPI.Models;

namespace DotnetAPI.Mapping
{
    public class DataProfile : Profile
    {
        public DataProfile()
        {
            CreateMap<Contact, ContactViewModel>().ReverseMap();

            // ExperienceResponsibility
            CreateMap<ExperienceResponsibility, ExperienceResponsibilityViewModel>()
                .ForMember(dest => dest.Technologies,
                    opt => opt.MapFrom(src =>
                        string.IsNullOrWhiteSpace(src.Technologies)
                            ? new List<string>()
                            : src.Technologies.Split(',', StringSplitOptions.TrimEntries | StringSplitOptions.RemoveEmptyEntries).ToList()));

            CreateMap<ExperienceResponsibilityViewModel, ExperienceResponsibility>()
                .ForMember(dest => dest.Technologies,
                    opt => opt.MapFrom(src => string.Join(",", src.Technologies)))
                .ForMember(dest => dest.Experience, opt => opt.Ignore()) // prevent circular map
                .ForMember(dest => dest.ExperienceId, opt => opt.Ignore()); // handled elsewhere

            // Experience
            CreateMap<Experience, ExperienceViewModel>()
                .ReverseMap();

            // 🔧 Custom mapping between Portfolio and PortfolioViewModel
            CreateMap<Portfolio, PortfolioViewModel>()
                .ForMember(dest => dest.Technologies,
                    opt => opt.MapFrom(src =>
                        string.IsNullOrWhiteSpace(src.Technologies)
                            ? new List<string>()
                            : src.Technologies.Split(',', StringSplitOptions.TrimEntries | StringSplitOptions.RemoveEmptyEntries).ToList()
                    ));

            CreateMap<PortfolioViewModel, Portfolio>()
                .ForMember(dest => dest.Technologies,
                    opt => opt.MapFrom(src => string.Join(",", src.Technologies)));
        }
    }
}
