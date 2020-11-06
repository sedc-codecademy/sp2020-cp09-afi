using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace Roomates.DataModel.Models
{
public class ApartmentsDbContext : DbContext
    {
        public ApartmentsDbContext(DbContextOptions opt)
            : base(opt)
        {
        }

        public DbSet<Apartment> Apartments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Apartments
            modelBuilder
                .Entity<Apartment>()
                 .ToTable("Apartment")
                .HasKey(p => p.Id);

            modelBuilder
                .Entity<Apartment>()
                .Property(p => p.Area)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder
                .Entity<Apartment>()
                .Property(p => p.Price)
                .HasMaxLength(100)
                .IsRequired();


            modelBuilder
                .Entity<Apartment>()
                .Property(p => p.Rooms)
                .HasMaxLength(100)
                .IsRequired();

            modelBuilder
            .Entity<Apartment>()
            .Property(p => p.Password)
            .HasMaxLength(100)
            .IsRequired();
            modelBuilder
                        .Entity<Apartment>()
                        .Property(p => p.Name)
                        .HasMaxLength(100)
                        .IsRequired();


            Seed(modelBuilder);

            base.OnModelCreating(modelBuilder);
        }

        public void Seed(ModelBuilder modelBuilder)
        {
            var md5 = new MD5CryptoServiceProvider();
            var md5data = md5.ComputeHash(Encoding.ASCII.GetBytes("123roomates"));
            var hashedPassword = Encoding.ASCII.GetString(md5data);

            modelBuilder.Entity<Apartment>()
                .HasData(
                new Apartment()
                {
                    Id = "2",
                    Name = "Apartmento",
                    Area= "Skopje",
                    Rooms = 4,
                    Price = 230,
                    Password = hashedPassword,
                    
                    


                });



        }
    
    }
}
