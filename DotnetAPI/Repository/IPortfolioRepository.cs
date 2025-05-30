using DotnetAPI.Models;

namespace DotnetAPI.Repository
{
    public interface IPortfolioRepository : IRepository<Portfolio>
    {
        void Update(Portfolio obj);
    }
}
