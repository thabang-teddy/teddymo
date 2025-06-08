using DotnetAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotnetAPI.Areas.Visitor.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("/home/index")]
        public IActionResult Index() => Ok("working");

    }
}
