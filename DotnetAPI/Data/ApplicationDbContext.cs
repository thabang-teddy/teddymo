
using DotnetAPI.Data.SeedData;
using DotnetAPI.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DotnetAPI.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Portfolio> Portfolios { get; set; }
        public DbSet<Experience> Experiences { get; set; }
        public DbSet<ExperienceResponsibility> ExperienceResponsibilities { get; set; }
        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Apply seed data from different files
            UsersSeed.Apply(modelBuilder);
            PortfolioSeed.Apply(modelBuilder);
            ExperienceSeed.Apply(modelBuilder);
        }
    }
}
