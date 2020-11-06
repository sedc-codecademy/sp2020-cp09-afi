using Roomates.DataModel.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.DataAccess.EntityFramework
{
    public class ApartmentRepository : IRepository<Apartment>
    {
        private readonly ApartmentsDbContext _context;

        public ApartmentRepository(ApartmentsDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Apartment> GetAll()
        {
            return _context.Apartments;
        }

        public void Insert(Apartment entity)
        {
            _context.Apartments.Add(entity);
            _context.SaveChanges();
        }

        public void Remove(Apartment entity)
        {
            _context.Apartments.Remove(entity);
            _context.SaveChanges();
        }

        public void Update(Apartment entity)
        {
            _context.Apartments.Update(entity);
            _context.SaveChanges();
        }

    }
}
