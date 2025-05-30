using DotnetAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace DotnetAPI.Data.SeedData
{
    public static class UsersSeed
    {
        public static void Apply(ModelBuilder modelBuilder)
        {
            var user = new ApplicationUser
            {
                Id = "e756c817-bcb7-47b2-8e7b-52a6b3065cf4",
                UserName = "teddy@teddymo.co.za",
                FirtName = "Teddy",
                LastName = "Morwasetla",
                Email = "teddy@teddymo.co.za",
                NormalizedUserName = "TEDDY@TEDDYMO.CO.ZA",
                NormalizedEmail = "TEDDY@TEDDYMO.CO.ZA",
                EmailConfirmed = true
            };

            // Hash the password
            var passwordHasher = new PasswordHasher<ApplicationUser>();
            user.PasswordHash = passwordHasher.HashPassword(user, "Admin@123");

            // Seed the user
            modelBuilder.Entity<ApplicationUser>().HasData(user);

            var adminRole = new IdentityRole
            {
                Id = "8d04dce2-969a-435d-bba4-df3f325983dc", // any unique GUID
                Name = "Admin",
                NormalizedName = "ADMIN"
            };

            modelBuilder.Entity<IdentityRole>().HasData(adminRole);

            // Link user to role
            modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
            {
                UserId = "e756c817-bcb7-47b2-8e7b-52a6b3065cf4", // same as seeded user
                RoleId = "8d04dce2-969a-435d-bba4-df3f325983dc"  // same as seeded role
            });

        }
    }
}
