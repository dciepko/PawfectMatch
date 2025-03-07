using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PawfectMatch.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DogBreeds",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImagePatch = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RequiredAttention = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ActivityLevel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IndependenceLevel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsAllergenic = table.Column<bool>(type: "bit", nullable: false),
                    IsGoodWithKids = table.Column<bool>(type: "bit", nullable: false),
                    IsGoodWithDogs = table.Column<bool>(type: "bit", nullable: false),
                    IsGoodWithCats = table.Column<bool>(type: "bit", nullable: false),
                    IsGoodWithOtherAnimals = table.Column<bool>(type: "bit", nullable: false),
                    Size = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DogBreeds", x => x.Id);
                });

            // Dodanie 10 przykładowych ras psów
            migrationBuilder.Sql(@"
          INSERT INTO DogBreeds (Name, ImagePatch, Description, RequiredAttention, ActivityLevel, IndependenceLevel, IsAllergenic, IsGoodWithKids, IsGoodWithDogs, IsGoodWithCats, IsGoodWithOtherAnimals, Size)
            VALUES
            ('Labrador Retriever', '', 'Przyjazny, rodzinny pies o dużej energii.', 'HIGH', 'HIGH', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Golden Retriever', '', 'Inteligentny, przyjazny pies idealny dla rodzin.', 'HIGH', 'HIGH', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Poodle', '', 'Hipoalergiczny pies o dużej inteligencji.', 'MEDIUM', 'MEDIUM', 'MEDIUM', 1, 1, 1, 1, 1, 'MEDIUM'),
            ('German Shepherd', '', 'Lojalny, inteligentny pies pracujący.', 'HIGH', 'HIGH', 'MEDIUM', 0, 1, 1, 0, 1, 'LARGE'),
            ('Bulldog', '', 'Spokojny i przyjazny pies o niskiej aktywności.', 'LOW', 'LOW', 'HIGH', 0, 1, 1, 1, 1, 'MEDIUM'),
            ('Beagle', '', 'Wesoły, ciekawski pies o dużej energii.', 'MEDIUM', 'HIGH', 'MEDIUM', 0, 1, 1, 1, 1, 'MEDIUM'),
            ('Dachshund', '', 'Niezależny, ale przyjazny pies myśliwski.', 'MEDIUM', 'MEDIUM', 'HIGH', 0, 1, 1, 1, 1, 'SMALL'),
            ('Siberian Husky', '', 'Niezależny pies o wysokiej energii, wymagający aktywności.', 'HIGH', 'HIGH', 'HIGH', 0, 1, 1, 0, 1, 'LARGE'),
            ('Shih Tzu', '', 'Towarzyski, spokojny pies rodzinny.', 'LOW', 'LOW', 'MEDIUM', 1, 1, 1, 1, 1, 'SMALL'),
            ('Border Collie', '', 'Bardzo inteligentny, pracowity pies pasterski.', 'HIGH', 'HIGH', 'LOW', 0, 1, 1, 1, 1, 'MEDIUM'),
            ('Boxer', '', 'Energiczny, lojalny i przyjazny pies.', 'HIGH', 'HIGH', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Chihuahua', '', 'Mały, odważny i bardzo przywiązany do właściciela.', 'LOW', 'MEDIUM', 'HIGH', 0, 1, 1, 1, 1, 'SMALL'),
            ('Cavalier King Charles Spaniel', '', 'Spokojny, towarzyski pies rodzinny.', 'MEDIUM', 'LOW', 'LOW', 0, 1, 1, 1, 1, 'SMALL'),
            ('Dalmatian', '', 'Energiczny pies wymagający dużo ruchu.', 'HIGH', 'HIGH', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Doberman', '', 'Inteligentny, czujny pies stróżujący.', 'HIGH', 'HIGH', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Great Dane', '', 'Gigantyczny, ale łagodny pies rodzinny.', 'HIGH', 'LOW', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Cocker Spaniel', '', 'Przyjazny pies myśliwski o średniej aktywności.', 'MEDIUM', 'MEDIUM', 'MEDIUM', 0, 1, 1, 1, 1, 'MEDIUM'),
            ('Rottweiler', '', 'Silny, pewny siebie pies stróżujący.', 'HIGH', 'HIGH', 'MEDIUM', 0, 1, 1, 0, 1, 'LARGE'),
            ('Maltese', '', 'Mały, delikatny pies towarzyski.', 'LOW', 'LOW', 'HIGH', 1, 1, 1, 1, 1, 'SMALL'),
            ('Papillon', '', 'Inteligentny, energiczny piesek do towarzystwa.', 'MEDIUM', 'MEDIUM', 'HIGH', 0, 1, 1, 1, 1, 'SMALL'),
            ('French Bulldog', '', 'Przyjazny, mało aktywny pies rodzinny.', 'LOW', 'LOW', 'HIGH', 0, 1, 1, 1, 1, 'SMALL'),
            ('Akita Inu', '', 'Niezależny, lojalny pies stróżujący.', 'HIGH', 'MEDIUM', 'HIGH', 0, 1, 1, 0, 1, 'LARGE'),
            ('Samoyed', '', 'Towarzyski, energiczny pies zaprzęgowy.', 'HIGH', 'HIGH', 'MEDIUM', 0, 1, 1, 0, 1, 'LARGE'),
            ('Weimaraner', '', 'Inteligentny, aktywny pies myśliwski.', 'HIGH', 'HIGH', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Australian Shepherd', '', 'Bardzo inteligentny i energiczny pies pasterski.', 'HIGH', 'HIGH', 'LOW', 0, 1, 1, 1, 1, 'MEDIUM'),
            ('Bichon Frise', '', 'Hipoalergiczny piesek do towarzystwa.', 'MEDIUM', 'LOW', 'HIGH', 1, 1, 1, 1, 1, 'SMALL'),
            ('Whippet', '', 'Szybki, spokojny pies o łagodnym charakterze.', 'MEDIUM', 'HIGH', 'HIGH', 0, 1, 1, 0, 1, 'MEDIUM'),
            ('Pug', '', 'Zabawny, mało aktywny pies rodzinny.', 'LOW', 'LOW', 'HIGH', 0, 1, 1, 1, 1, 'SMALL'),
            ('Shiba Inu', '', 'Niezależny, czysty i inteligentny pies.', 'MEDIUM', 'HIGH', 'HIGH', 0, 1, 1, 0, 1, 'MEDIUM'),
            ('Bernese Mountain Dog', '', 'Spokojny, lojalny pies rodzinny.', 'HIGH', 'LOW', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Newfoundland', '', 'Gigantyczny, łagodny pies ratowniczy.', 'HIGH', 'LOW', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Saint Bernard', '', 'Łagodny, czuły olbrzym.', 'HIGH', 'LOW', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Irish Setter', '', 'Energiczny, wesoły pies myśliwski.', 'HIGH', 'HIGH', 'LOW', 0, 1, 1, 0, 1, 'LARGE'),
            ('Alaskan Malamute', '', 'Silny pies zaprzęgowy wymagający aktywności.', 'HIGH', 'HIGH', 'HIGH', 0, 1, 1, 0, 1, 'LARGE'),
            ('Basenji', '', 'Niezależny, cichy pies bez szczekania.', 'LOW', 'MEDIUM', 'HIGH', 0, 1, 1, 0, 1, 'SMALL'),
            ('Bull Terrier', '', 'Silny, energiczny pies towarzyski.', 'MEDIUM', 'HIGH', 'MEDIUM', 0, 1, 1, 0, 1, 'MEDIUM');

            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DogBreeds");
        }
    }
}
