using DotnetAPI.Models;

namespace DotnetAPI.Repository
{
    public interface IExperienceRepository : IRepository<Experience>
    {
        void Update(Experience obj);
    }
}
