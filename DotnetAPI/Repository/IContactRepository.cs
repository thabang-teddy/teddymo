using DotnetAPI.Models;

namespace DotnetAPI.Repository
{
    public interface IContactRepository : IRepository<Contact>
    {
        void Update(Contact obj);
        //void UpdateAsync(Contact obj);
    }
}
