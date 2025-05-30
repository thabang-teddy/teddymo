using DotnetAPI.Data;
using DotnetAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace DotnetAPI.Repository
{
    public class ContactRepository : Repository<Contact>, IContactRepository
    {
        private ApplicationDbContext _db;
        public ContactRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Update(Contact obj)
        {
            _db.Contacts.Update(obj);
        }
        //public async Task<void> UpdateAsync(Contact obj)
        //{
        //    await _db.Contacts.UpdateAsync(obj);
        //}
    }
}
