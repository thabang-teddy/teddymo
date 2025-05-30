using DotnetAPI.Data;
using DotnetAPI.Models;
using System.Linq.Expressions;

namespace DotnetAPI.Repository
{
    public class ExperienceRepository : Repository<Experience>, IExperienceRepository
    {
        private ApplicationDbContext _db;
        public ExperienceRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Update(Experience obj)
        {
            _db.Experiences.Update(obj);
        }
    }
}
