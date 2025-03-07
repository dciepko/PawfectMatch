using Microsoft.EntityFrameworkCore;
using PawfectMatch.Data;
using PawfectMatch.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PawfectMatch.Services
{
    public class DogMatchService
    {
        private readonly DataContext _context;

        public DogMatchService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<DogBreed>> GetMatchingBreeds(DogMatchRequest request)
        {
            var allBreeds = await _context.DogBreeds.ToListAsync();

            Dictionary<int, int> breedScores = allBreeds.ToDictionary(b => b.Id, _ => 0);

            int experienceWeight = 3;
            int activityWeight = 3;
            int homePresenceWeight = 3;
            int sizeWeight = 5;
            int allergyWeight = 5;
            int kidsWeight = 4;
            int animalsWeight = 3;

            foreach (var breed in allBreeds)
            {
                if ((request.Experience == "low" && breed.RequiredAttention == "LOW") ||
                    (request.Experience == "medium" && breed.RequiredAttention == "MEDIUM") ||
                    (request.Experience == "high" && breed.RequiredAttention == "HIGH"))
                {
                    breedScores[breed.Id] += experienceWeight;
                }

                if ((request.ActivityLevel == "low" && breed.ActivityLevel == "LOW") ||
                    (request.ActivityLevel == "medium" && breed.ActivityLevel == "MEDIUM") ||
                    (request.ActivityLevel == "high" && breed.ActivityLevel == "HIGH"))
                {
                    breedScores[breed.Id] += activityWeight;
                }

                if ((request.HomePresence == "low" && breed.IndependenceLevel == "LOW") ||
                    (request.HomePresence == "medium" && breed.IndependenceLevel == "MEDIUM") ||
                    (request.HomePresence == "high" && breed.IndependenceLevel == "HIGH"))
                {
                    breedScores[breed.Id] += homePresenceWeight;
                }

                if ((request.PreferredSize == "small" && breed.Size == "SMALL") ||
                    (request.PreferredSize == "medium" && breed.Size == "MEDIUM") ||
                    (request.PreferredSize == "large" && breed.Size == "LARGE"))
                {
                    breedScores[breed.Id] += sizeWeight;
                }

                if (request.HasAllergy && breed.IsAllergenic)
                {
                    breedScores[breed.Id] -= allergyWeight; 
                }

                if (request.HasKids && breed.IsGoodWithKids)
                {
                    breedScores[breed.Id] += kidsWeight;
                }

                if (request.OtherAnimals == "no" ||
                   (request.OtherAnimals == "cats" && breed.IsGoodWithCats) ||
                   (request.OtherAnimals == "dogs" && breed.IsGoodWithDogs) ||
                   (request.OtherAnimals == "other" && breed.IsGoodWithOtherAnimals))
                {
                    breedScores[breed.Id] += animalsWeight;
                }
            }

            var bestMatches = breedScores
                .OrderByDescending(kvp => kvp.Value)
                .Select(kvp => allBreeds.First(b => b.Id == kvp.Key))
                .Take(5) 
                .ToList();

            return bestMatches;
        }
    }
}
