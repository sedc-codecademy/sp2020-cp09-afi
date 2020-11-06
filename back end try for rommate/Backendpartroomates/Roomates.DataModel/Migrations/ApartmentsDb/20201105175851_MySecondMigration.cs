using Microsoft.EntityFrameworkCore.Migrations;

namespace Roomates.DataModel.Migrations.ApartmentsDb
{
    public partial class MySecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Apartment",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Password = table.Column<string>(maxLength: 100, nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    Price = table.Column<int>(maxLength: 100, nullable: false),
                    Area = table.Column<string>(maxLength: 50, nullable: false),
                    Rooms = table.Column<int>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Apartment", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Apartment",
                columns: new[] { "Id", "Area", "Name", "Password", "Price", "Rooms" },
                values: new object[] { "2", "Skopje", "Apartmento", "`-?`;?'????F??", 230, 4 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Apartment");
        }
    }
}
