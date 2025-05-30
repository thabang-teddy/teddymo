namespace DotnetAPI.Models
{
    public class Contact
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Subject { get; set; }
        public required string Message { get; set; }
        public ContactState State { get; set; }
        public DateTime? DeletedDate { get; set; }
    }
    public enum ContactState
    {
        New = 0,
        Opened = 1,
        Saved = 2,
    }
}
