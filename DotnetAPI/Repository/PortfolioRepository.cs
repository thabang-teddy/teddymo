using DotnetAPI.Data;
using DotnetAPI.Models;
using System.Linq.Expressions;

namespace DotnetAPI.Repository
{
    public class PortfolioRepository : Repository<Portfolio>, IPortfolioRepository
    {
        private ApplicationDbContext _db;
        public PortfolioRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Update(Portfolio obj)
        {
            _db.Portfolios.Update(obj);
        }
    }
}
