using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PawfectMatch.Migrations
{
    /// <inheritdoc />
    public partial class UpdateImagePatchValues : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
            UPDATE DogBreeds SET ImagePatch = 'labrador retriever.png' WHERE Id = 1;
            UPDATE DogBreeds SET ImagePatch = 'golden retriever.png' WHERE Id = 2;
            UPDATE DogBreeds SET ImagePatch = 'poodle.png' WHERE Id = 3;
            UPDATE DogBreeds SET ImagePatch = 'German Shepherd.png' WHERE Id = 4;
            UPDATE DogBreeds SET ImagePatch = 'bulldog.png' WHERE Id = 5;
            UPDATE DogBreeds SET ImagePatch = 'beagle.png' WHERE Id = 6;
            UPDATE DogBreeds SET ImagePatch = 'dachshund.png' WHERE Id = 7;
            UPDATE DogBreeds SET ImagePatch = 'siberian husky.png' WHERE Id = 8;
            UPDATE DogBreeds SET ImagePatch = 'Shich Tzu.png' WHERE Id = 9;
            UPDATE DogBreeds SET ImagePatch = 'border collie.png' WHERE Id = 10;
            UPDATE DogBreeds SET ImagePatch = 'boxer dog.png' WHERE Id = 11;
            UPDATE DogBreeds SET ImagePatch = 'chihuahua.png' WHERE Id = 12;
            UPDATE DogBreeds SET ImagePatch = 'Cavalier King Charles Spaniel.png' WHERE Id = 13;
            UPDATE DogBreeds SET ImagePatch = 'dalmatian.png' WHERE Id = 14;
            UPDATE DogBreeds SET ImagePatch = 'Doberman.png' WHERE Id = 15;
            UPDATE DogBreeds SET ImagePatch = 'Great Dane.png' WHERE Id = 16;
            UPDATE DogBreeds SET ImagePatch = 'Cocker Spaniel.png' WHERE Id = 17;
            UPDATE DogBreeds SET ImagePatch = 'Rottweiler.png' WHERE Id = 18;
            UPDATE DogBreeds SET ImagePatch = 'Maltese dog.png' WHERE Id = 19;
            UPDATE DogBreeds SET ImagePatch = 'papillon dog.png' WHERE Id = 20;
            UPDATE DogBreeds SET ImagePatch = 'French Bulldog.png' WHERE Id = 21;
            UPDATE DogBreeds SET ImagePatch = 'fakita inu.png' WHERE Id = 22;
            UPDATE DogBreeds SET ImagePatch = 'Samoyed dog.png' WHERE Id = 23;
            UPDATE DogBreeds SET ImagePatch = 'Weimaraner dog.png' WHERE Id = 24;
            UPDATE DogBreeds SET ImagePatch = 'Australian Shepherd.png' WHERE Id = 25;
            UPDATE DogBreeds SET ImagePatch = 'Bichon Frise.png' WHERE Id = 26;
            UPDATE DogBreeds SET ImagePatch = 'Whippet.png' WHERE Id = 27;
            UPDATE DogBreeds SET ImagePatch = 'Pug.png' WHERE Id = 28;
            UPDATE DogBreeds SET ImagePatch = 'Shiba Inu.png' WHERE Id = 29;
            UPDATE DogBreeds SET ImagePatch = 'Bernese Mountain Dog.png' WHERE Id = 30;
            UPDATE DogBreeds SET ImagePatch = 'Newfoundland dog.png' WHERE Id = 31;
            UPDATE DogBreeds SET ImagePatch = 'Saint Bernard.png' WHERE Id = 32;
            UPDATE DogBreeds SET ImagePatch = 'Irish Setter.png' WHERE Id = 33;
            UPDATE DogBreeds SET ImagePatch = 'Alaskan Malamute.png' WHERE Id = 34;
            UPDATE DogBreeds SET ImagePatch = 'Basenji dog.png' WHERE Id = 35;
            UPDATE DogBreeds SET ImagePatch = 'Bull Terrier.png' WHERE Id = 36;
        ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
