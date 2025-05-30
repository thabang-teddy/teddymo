namespace DotnetAPI.Models
{
    public class Portfolio
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public required string Summary { get; set; }
        public required string Description { get; set; }
        public required string Technologies { get; set; }
        public string? Link { get; set; }
        public string? ImageUrl { get; set; }
        public bool IsActive { get; set; }
        public DateTime? DeletedDate { get; set; }
    }
}
