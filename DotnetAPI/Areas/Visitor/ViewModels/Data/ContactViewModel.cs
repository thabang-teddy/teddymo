﻿namespace DotnetAPI.Areas.Visitor.ViewModels.Data
{
    public class ContactViewModel
    {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Subject { get; set; }
        public required string Message { get; set; }
    }
}
