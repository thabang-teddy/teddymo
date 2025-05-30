using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DotnetAPI.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        public required string FirtName { get; set; }
        [Required]
        public required string LastName { get; set; }

    }
}
