using DotnetAPI.Models;
using DotnetAPI.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotnetAPI.Areas.Dashboard.Controllers
{
    [Authorize]
    [Area("Dashboard")]
    public class PortfoliosController : Controller
    {
        private readonly IPortfolioRepository _repo;
        public PortfoliosController(IPortfolioRepository repo) => _repo = repo;

        [HttpGet("/dashboard/portfolios")]
        public async Task<IActionResult> GetAll() => Ok(await _repo.GetRow().ToListAsync());

        [HttpGet("/dashboard/portfolios/{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var item = await _repo.GetAsync(x => x.Id == id);
            return item is null ? NotFound() : Ok(item);
        }

        [HttpPost("/dashboard/portfolios/create")]
        public async Task<IActionResult> Create([FromBody] Portfolio portfolio)
        {
            await _repo.AddAsync(portfolio);
            return CreatedAtAction(nameof(Get), new { id = portfolio.Id }, portfolio);
        }

        [HttpPut("/dashboard/portfolios/update/{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] Portfolio portfolio)
        {
            if (id != portfolio.Id) return BadRequest();
            var portfolioInDb = await _repo.GetAsync(x => x.Id == id);

            portfolioInDb.Id = portfolio.Id;
            portfolioInDb.Title = portfolio.Title;
            portfolioInDb.Summary = portfolio.Summary;
            portfolioInDb.Description = portfolio.Description;
            portfolioInDb.Technologies = portfolio.Technologies;
            portfolioInDb.Link = portfolio.Link;
            portfolioInDb.ImageUrl = portfolio.ImageUrl;
            portfolioInDb.IsActive = portfolio.IsActive;
            portfolioInDb.DeletedDate = portfolio.DeletedDate;

            _repo.Update(portfolioInDb);
            return NoContent();
        }

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> Delete(Guid id)
        //{
        //    await _repo.DeleteAsync(id);
        //    return NoContent();
        //}
    }
}
