using Microsoft.AspNetCore.Mvc;

namespace DotnetAPI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return Ok(new { success = true});
        }
    }
}
