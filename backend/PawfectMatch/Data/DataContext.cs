using Microsoft.EntityFrameworkCore;
using PawfectMatch.Models;

namespace PawfectMatch.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) { }
        public DbSet<DogBreed> DogBreeds { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=localhost;Database=PawfectMatchDb;Trusted_Connection=True; TrustServerCertificate=true");
            }
        }

    }
}
