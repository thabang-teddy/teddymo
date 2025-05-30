using DotnetAPI.Models;
using DotnetAPI.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotnetAPI.Areas.Dashboard.Controllers
{
    [Authorize]
    [Area("Dashboard")]
    public class ContactsController : Controller
    {
        private readonly IContactRepository _repo;
        public ContactsController(IContactRepository repo) => _repo = repo;

        [HttpGet("/dashboard/contacts")]
        public async Task<IActionResult> GetAll() => Ok(await _repo.GetRow().ToListAsync());

        [HttpGet("/dashboard/contacts/{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var item = await _repo.GetAsync(x => x.Id == id);
            return item is null ? NotFound() : Ok(item);
        }

        [HttpPost("/dashboard/contacts")]
        public async Task<IActionResult> Create([FromBody] Contact contact)
        {
            await _repo.AddAsync(contact);
            return CreatedAtAction(nameof(Get), new { id = contact.Id }, contact);
        }

        [HttpPut("/dashboard/contacts/{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] Contact contact)
        {
            if (id != contact.Id) return BadRequest();
            var contactInDb = await _repo.GetAsync(x => x.Id == id);

            contactInDb.Id = contact.Id;
            contactInDb.Name = contact.Name;
            contactInDb.Email = contact.Email;
            contactInDb.Subject = contact.Subject;
            contactInDb.Message = contact.Message;
            contactInDb.State = contact.State;
            contactInDb.DeletedDate = contact.DeletedDate;

            _repo.Update(contactInDb);
            //await _repo.UpdateAsync(contact);
            return NoContent();
        }

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> Delete(Guid id)
        //{
        //    var item = await _repo.GetAsync(x => x.Id == id);
        //    _repo.Remove(item);
        //    return NoContent();
        //}
    }
}
