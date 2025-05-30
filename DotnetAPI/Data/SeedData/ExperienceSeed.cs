using DotnetAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace DotnetAPI.Data.SeedData
{
    public static class ExperienceSeed
    {
        public static void Apply(ModelBuilder modelBuilder)
        {

            // IDs for relationships
            var experienceId = Guid.Parse("54d46c47-3d47-4716-891e-ca84d8d38ffc");
            var responsibility1Id = Guid.Parse("35e831bf-6e69-499d-b850-ebefda79b61d");
            var responsibility2Id = Guid.Parse("ffd2db4e-270f-4dc4-a885-0f3b8c49e920");
            var responsibility3Id = Guid.Parse("e5849100-e49c-4ca2-ae29-bd8382deb522");

            // Experience
            modelBuilder.Entity<Experience>().HasData(new
            {
                Id = experienceId,
                Title = "ASP.NET Web Developer",
                JobTitle = "ASP.NET Web Developer",
                Company = "JHnet",
                Duration = "March 2021 - Present (3 years , 11 months)",
                Description = "<ul class=\"mt-3\"><li>Developed and maintained web applications using C#, ASP.NET MVC, and related technologies.</li><li>Worked on admin and e-commerce websites for South Africa's leading distributor of branded promotional products.</li><li>Designed and implemented Product Information Management (PIM) admin systems to streamline data handling and improve operational efficiency.</li><li>Collaborated with cross-functional teams to gather requirements and deliver scalable software solutions.</li><li>Optimized application performance and resolved technical issues to ensure seamless functionality.</li><li>Contributed to the development of user-centric features and interfaces, enhancing overall user experience.</li></ul>",
                Link = "https://www.jhnet.co.za",
                IsActive = true,
                DeletedDate = (DateTime?)null
            });

            // Responsibilities
            modelBuilder.Entity<ExperienceResponsibility>().HasData(
                new
                {
                    Id = responsibility1Id,
                    ExperienceId = experienceId,
                    Title = "E-commerce Website",
                    Description = "Working on a team to develop a fully functional e-commerce platform for a leading distributor of branded promotional products.",
                    Technologies = "C#,ASP.NET MVC,SQL Server,JavaScript"
                },
                new
                {
                    Id = responsibility2Id,
                    ExperienceId = experienceId,
                    Title = "Product Information Management (PIM) System",
                    Description = "Implemented a PIM admin system to streamline data handling and improve operational efficiency.",
                    Technologies = "C#,ASP.NET MVC,SQL Server,RESTful APIs"
                },
                new
                {
                    Id = responsibility3Id,
                    ExperienceId = experienceId,
                    Title = "Customer Portal",
                    Description = "Built a user-friendly customer portal for managing orders, tracking shipments, and accessing support resources.",
                    Technologies = "C#,ASP.NET Core,React,SQL Server"
                }
            );
        }
    }
}
