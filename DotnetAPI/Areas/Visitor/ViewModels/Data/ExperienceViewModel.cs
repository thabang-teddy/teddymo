namespace DotnetAPI.Areas.Visitor.ViewModels.Data
{
    public class ExperienceViewModel
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public required string JobTitle { get; set; }
        public required string Company { get; set; }
        public required string Duration { get; set; }
        public required string Description { get; set; }
        public string? Link { get; set; }

        public List<ExperienceResponsibilityViewModel> Responsibilities { get; set; } = new List<ExperienceResponsibilityViewModel>();
    }

    public class ExperienceResponsibilityViewModel
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public List<string> Technologies { get; set; } = new();
    }
}
