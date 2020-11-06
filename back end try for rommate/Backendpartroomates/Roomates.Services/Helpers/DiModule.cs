using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Roomates.DataAccess;
using Roomates.DataAccess.EntityFramework;
using Roomates.DataModel.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.Services.Helpers
{
    public static class DiModule
    {
        public static IServiceCollection RegisterModule(
            IServiceCollection services,
            string connectionString)
        {
     // registering db context
            services.AddDbContext<RoomatesDbContext>(x =>
                x.UseSqlServer(connectionString));

            services.AddDbContext<ApartmentsDbContext>(x =>
          x.UseSqlServer(connectionString));
            //register repositories
            //entity framework
            services.AddTransient<IRepository<User>, UserRepository>();
           services.AddTransient<IRepository<Apartment>, ApartmentRepository>();



            return services;
        }
    }
}