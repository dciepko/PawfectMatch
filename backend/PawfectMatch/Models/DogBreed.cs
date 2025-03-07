namespace PawfectMatch.Models
{
    public class DogBreed
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePatch { get; set; }
        public string Description { get; set; }
        public string RequiredAttention { get; set; } // LOW, MEDIUM, HIGH
        public string ActivityLevel { get; set; } // LOW, MEDIUM, HIGH
        public string IndependenceLevel { get; set; } // LOW, MEDIUM, HIGH
        public bool IsAllergenic { get; set; }
        public bool IsGoodWithKids { get; set; }
        public bool IsGoodWithDogs { get; set; }
        public bool IsGoodWithCats { get; set; }
        public bool IsGoodWithOtherAnimals { get; set; }
        public string Size { get; set; } // LOW, MEDIUM, HIGH

    }
}
