namespace DotnetAPI.Models
{
    public class Experience
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public required string JobTitle { get; set; }
        public required string Company { get; set; }
        public required string Duration { get; set; }
        public required string Description { get; set; }
        public string? Link { get; set; }
        public bool IsActive { get; set; }
        public DateTime? DeletedDate { get; set; }

        public List<ExperienceResponsibility> Responsibilities { get; set; } = new List<ExperienceResponsibility>();
    }

    public class ExperienceResponsibility
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string Technologies { get; set; }

        public Guid ExperienceId { get; set; }
        public required Experience Experience { get; set; }
    }
}
