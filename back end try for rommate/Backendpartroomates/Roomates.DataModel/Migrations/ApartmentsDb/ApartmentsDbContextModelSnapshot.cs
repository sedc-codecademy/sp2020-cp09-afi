﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Roomates.DataModel.Models;

namespace Roomates.DataModel.Migrations.ApartmentsDb
{
    [DbContext(typeof(ApartmentsDbContext))]
    partial class ApartmentsDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Roomates.DataModel.Models.Apartment", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Area")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<int>("Price")
                        .HasMaxLength(100);

                    b.Property<int>("Rooms")
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("Apartment");

                    b.HasData(
                        new { Id = "2", Area = "Skopje", Name = "Apartmento", Password = "`-?`;?'????F??", Price = 230, Rooms = 4 }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}
