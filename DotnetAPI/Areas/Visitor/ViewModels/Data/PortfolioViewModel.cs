namespace DotnetAPI.Areas.Visitor.ViewModels.Data
{
    public class PortfolioViewModel
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public required string Summary { get; set; }
        public required string Description { get; set; }
        public List<string> Technologies { get; set; } = new();
        public string? Link { get; set; }
        public string? ImageUrl { get; set; }
        public bool IsActive { get; set; }
        public DateTime? DeletedDate { get; set; }
    }
}
