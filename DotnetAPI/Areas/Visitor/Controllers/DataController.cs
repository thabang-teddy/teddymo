using AutoMapper;
using DotnetAPI.Areas.Visitor.ViewModels.Data;
using DotnetAPI.Models;
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
        private readonly IMapper _mapper;

        public DataController(
            IContactRepository contactRepo,
            IExperienceRepository experienceRepo,
            IPortfolioRepository portfolioRepo,
            IMapper mapper)
        {
            _contactRepo = contactRepo;
            _experienceRepo = experienceRepo;
            _portfolioRepo = portfolioRepo;
            _mapper = mapper;
        }

        // ------------------- CONTACT -------------------

        [HttpPost("/data/send-contact")]
        public async Task<IActionResult> SendContact(ContactViewModel sbmitedContact)
        {
            try
            {
                Contact contact = new()
                {
                    Id = Guid.NewGuid(),
                    Email = sbmitedContact.Email,
                    Name = sbmitedContact.Name,
                    Subject = sbmitedContact.Subject,
                    Message = sbmitedContact.Message,
                };

                await _contactRepo.AddAsync(contact);

                return Ok(new { success = true });
            }
            catch (Exception ex)
            {
                return Ok(new { success = false });
            }
        }

        // ------------------- EXPERIENCE -------------------

        [HttpGet("/data/experiences")]
        public async Task<IActionResult> GetAllExperiences()
        {
            try
            {
                var data = await _experienceRepo.GetRow().Include(x => x.Responsibilities).ToListAsync();
                var viewModel = _mapper.Map<List<ExperienceViewModel>>(data);
                return Ok(new { success = true, experiences = viewModel });
            }
            catch (Exception ex)
            {
                return Ok(new { success = false });
            }
        }

        [HttpGet("/data/experiences/{id:guid}")]
        public async Task<IActionResult> GetExperience(Guid id)
        {
            try
            {
                var data = await _experienceRepo.GetAsync(x => x.Id == id, "Responsibilities");
                var viewModel = _mapper.Map<ExperienceViewModel>(data);
                return data is null ? NotFound() : Ok(new { success = true, experiences = viewModel });
            }
            catch (Exception ex)
            {
                return Ok(new { success = false });
            }
        }

        // ------------------- PORTFOLIO -------------------

        [HttpGet("/data/portfolios")]
        public async Task<IActionResult> GetAllPortfolios()
        {
            try
            {
                var data = await _portfolioRepo.GetRow().ToListAsync();
                var viewModel = _mapper.Map<List<PortfolioViewModel>>(data);
                return Ok(new { success = true, portfolios = viewModel });
            }
            catch (Exception ex)
            {
                return Ok(new { success = false });
            }
        }

        [HttpGet("/data/portfolios/{id:guid}")]
        public async Task<IActionResult> GetPortfolio(Guid id)
        {
            try
            {
                var data = await _portfolioRepo.GetAsync(x => x.Id == id);
                var viewModel = _mapper.Map<PortfolioViewModel>(data);
                return data is null ? NotFound() : Ok(new { success = true, portfolio = viewModel });
            }
            catch (Exception ex)
            {
                return Ok(new { success = false });
            }
        }
    }
}
