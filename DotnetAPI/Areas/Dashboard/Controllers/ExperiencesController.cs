using DotnetAPI.Models;
using DotnetAPI.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotnetAPI.Areas.Dashboard.Controllers
{
    [Authorize]
    [Area("Dashboard")]
    public class ExperiencesController : Controller
    {
        private readonly IExperienceRepository _repo;
        public ExperiencesController(IExperienceRepository repo) => _repo = repo;

        [HttpGet("/dashboard/experiences")]
        public async Task<IActionResult> GetAll() => Ok(await _repo.GetRow().ToListAsync());

        [HttpGet("/dashboard/experiences/{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var item = await _repo.GetAsync(x => x.Id == id);
            return item is null ? NotFound() : Ok(item);
        }

        [HttpPost("/dashboard/experiences/create")]
        public async Task<IActionResult> Create([FromBody] Experience experience)
        {
            await _repo.AddAsync(experience);
            return CreatedAtAction(nameof(Get), new { id = experience.Id }, experience);
        }

        [HttpPut("/dashboard/experiences/update/{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] Experience experience)
        {
            if (id != experience.Id) return BadRequest();
            var experienceInDb = await _repo.GetAsync(x => x.Id == id);

            experienceInDb.Id = experience.Id; 
            experienceInDb.Title = experience.Title; 
            experienceInDb.JobTitle = experience.JobTitle; 
            experienceInDb.Company = experience.Company; 
            experienceInDb.Duration = experience.Duration; 
            experienceInDb.Description = experience.Description; 
            experienceInDb.Link = experience.Link; 
            experienceInDb.IsActive = experience.IsActive; 
            experienceInDb.DeletedDate = experience.DeletedDate; 

            _repo.Update(experienceInDb);
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
