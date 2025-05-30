using DotnetAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotnetAPI.Areas.Visitor.Controllers
{
    public class DataController : Controller
    {
        private readonly IContactRepository _contactRepo;
        private readonly IExperienceRepository _experienceRepo;
        private readonly IPortfolioRepository _portfolioRepo;

        public DataController(
            IContactRepository contactRepo,
            IExperienceRepository experienceRepo,
            IPortfolioRepository portfolioRepo)
        {
            _contactRepo = contactRepo;
            _experienceRepo = experienceRepo;
            _portfolioRepo = portfolioRepo;
        }

        // ------------------- CONTACT -------------------

        [HttpGet("/data/contacts")]
        public async Task<IActionResult> GetAllContacts()
        {
            var data = await _contactRepo.GetRow().ToListAsync();
            return Ok(data);
        }

        [HttpGet("/data/contacts/{id:guid}")]
        public async Task<IActionResult> GetContact(Guid id)
        {
            var item = await _contactRepo.GetAsync(x => x.Id == id);
            return item is null ? NotFound() : Ok(item);
        }

        // ------------------- EXPERIENCE -------------------

        [HttpGet("/data/experiences")]
        public async Task<IActionResult> GetAllExperiences()
        {
            var data = await _experienceRepo.GetRow().ToListAsync();
            return Ok(data);
        }

        [HttpGet("/data/experiences/{id:guid}")]
        public async Task<IActionResult> GetExperience(Guid id)
        {
            var item = await _experienceRepo.GetAsync(x => x.Id == id);
            return item is null ? NotFound() : Ok(item);
        }

        // ------------------- PORTFOLIO -------------------

        [HttpGet("/data/portfolios")]
        public async Task<IActionResult> GetAllPortfolios()
        {
            var data = await _portfolioRepo.GetRow().ToListAsync();
            return Ok(data);
        }

        [HttpGet("/data/portfolios/{id:guid}")]
        public async Task<IActionResult> GetPortfolio(Guid id)
        {
            var item = await _portfolioRepo.GetAsync(x => x.Id == id);
            return item is null ? NotFound() : Ok(item);
        }
    }
}
