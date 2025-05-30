﻿using System.Linq.Expressions;

namespace DotnetAPI.Repository
{
    public interface IRepository<T> where T : class
    {
        //T - Category
        IEnumerable<T> GetAll(string? includeProperties = null);
        IQueryable<T> GetRow();
        T Get(Expression<Func<T, bool>> filter, string? includeProperties = null);
        Task<T> GetAsync(Expression<Func<T, bool>> filter, string? includeProperties = null);
        void Add(T entity);
        Task AddAsync(T entity);
        void AddRange(List<T> entities);
        Task AddRangeAsync(List<T> entities);
        void Remove(T entity);
        void RemoveAsync(T entity);
        void RemoveRange(IEnumerable<T> entity);
        void RemoveRangeAsync(IEnumerable<T> entity);
    }
}
