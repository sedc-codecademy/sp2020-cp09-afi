using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace Roomates.DataModel.Models
{
 public   class RoomatesDbContext : DbContext
    {
        public RoomatesDbContext(DbContextOptions opt)
            : base(opt)
        {
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // USER
            modelBuilder
                .Entity<User>()
                 .ToTable("User")
                .HasKey(p => p.Id);

            modelBuilder
                .Entity<User>()
                .Property(p => p.FullName)
                .HasMaxLength(50)
                .IsRequired();

            modelBuilder
                .Entity<User>()
                .Property(p => p.Password)
                .HasMaxLength(100)
                .IsRequired();


            modelBuilder
                .Entity<User>()
                .Property(p => p.Address)
                .HasMaxLength(100)
                .IsRequired();



            modelBuilder
                .Entity<User>()
                .Property(p => p.Age)
                .HasMaxLength(10)
                .IsRequired();

         /*   modelBuilder
                .Entity<User>()
                .Property(p => p.Email)
                .HasMaxLength(50)
                .IsRequired();
*/

         /*   modelBuilder
                .Entity<User>()
                .Property(p => p.PhoneNumber)
                .HasMaxLength(10)
                .IsRequired();

           
*/

            Seed(modelBuilder);

            base.OnModelCreating(modelBuilder);
        }

        public void Seed(ModelBuilder modelBuilder)
        {
            var md5 = new MD5CryptoServiceProvider();
            var md5data = md5.ComputeHash(Encoding.ASCII.GetBytes("123roomates"));
            var hashedPassword = Encoding.ASCII.GetString(md5data);

            modelBuilder.Entity<User>()
                .HasData(
                new User()
                {
                   Id = "1",
                    FullName = "Viktorija Jovanovska",
                    Address = "New Address",
                    Age = 23,
                    //Email = "viktoriajovanovska@gmail.com",
                   // Gender = Enums.Gender.Female,
                    Password = hashedPassword,
                    //Smoker = Enums.Smoker.Smoker,
                   // DoYouHaveSpace = true,
                   // PhoneNumber = 0707070,
                    //RoomateSmoker = Enums.RoomateSmoker.RoomateSmoker,
                   // QuestionForRoomate = true,
                  //  Messages = true,
                   
                });


         
        }
    }
}


