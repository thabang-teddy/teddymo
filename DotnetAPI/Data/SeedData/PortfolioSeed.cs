using DotnetAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DotnetAPI.Data.SeedData
{
    public static class PortfolioSeed
    {
        public static void Apply(ModelBuilder modelBuilder)
        {

            var portfolio1Id = Guid.Parse("f904c68b-c351-401f-8338-2d75cb7bbbb5");
            var portfolio2Id = Guid.Parse("24cc3959-e5b5-4194-bc88-0d698e3faa1d");
            var portfolio3Id = Guid.Parse("54f12588-0ade-49e2-99c7-803917a6d313");
            var portfolio4Id = Guid.Parse("95060d0e-a3ea-4ec2-8248-7510bd9d985b");

            // Portfolios
            modelBuilder.Entity<Portfolio>().HasData(
                new
                {
                    Id = portfolio1Id,
                    Title = "Giwu Bible Website",
                    Summary = "An interactive web application that displays multiple versions of the Bible. Built using React.js for user interface and Laravel 11 for backend development, providing a responsive and accessible platform.",
                    Description = "The application allows users to explore various Bible translations in one centralized location with intuitive navigation and search functionality.",
                    Technologies = "React.js,Laravel 11",
                    Link = "https://github.com/yourusername/giwu-website",
                    ImageUrl = "path/to/image.jpg",
                    IsActive = true,
                    DeletedDate = (DateTime?)null
                },
                new
                {
                    Id = portfolio2Id,
                    Title = "Giwu Bible Mobile App",
                    Summary = "A mobile-friendly application that enables users to access the Bible on their smartphones. Built using Flutter, ensuring cross-platform compatibility and real-time updates.",
                    Description = "The app provides offline capabilities and multi-language support for easy accessibility while reading the Bible.",
                    Technologies = "Flutter",
                    Link = "https://github.com/yourusername/giwu-mobile",
                    ImageUrl = "path/to/mobliee.jpg",
                    IsActive = true,
                    DeletedDate = (DateTime?)null
                },
                new
                {
                    Id = portfolio3Id,
                    Title = "Portfolio Website",
                    Summary = "A professional portfolio website showcasing your work and personal projects. Built using React.js for the frontend and Laravel 11 for backend development to ensure a clean, user-friendly interface.",
                    Description = "The website provides insights into my skills, projects, and experience with full-stack web development.",
                    Technologies = "React.js,Laravel 11",
                    Link = "https://yourusername portfolio website",
                    ImageUrl = "path/to/image.jpg",
                    IsActive = true,
                    DeletedDate = (DateTime?)null
                },
                new
                {
                    Id = portfolio4Id,
                    Title = "Portfolio App",
                    Summary = "A backend service that provides notifications for contacts and updates to your portfolio. Built using Flutter to ensure cross-platform functionality.",
                    Description = "The app integrates with the web interface, allowing real-time updates and notifications for contact management.",
                    Technologies = "Flutter",
                    Link = "https://github.com/yourusername/portfolio-app",
                    ImageUrl = "path/to/image.jpg",
                    IsActive = true,
                    DeletedDate = (DateTime?)null
                }
            );
        }
    }
}
