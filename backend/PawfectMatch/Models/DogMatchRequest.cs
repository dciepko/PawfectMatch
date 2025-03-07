namespace PawfectMatch.Models
{
    public class DogMatchRequest
    {
        public string Experience { get; set; }  
        public string ActivityLevel { get; set; } 
        public string HomePresence { get; set; } 
        public bool HasAllergy { get; set; } 
        public bool HasKids { get; set; }
        public string OtherAnimals { get; set; }
        public string PreferredSize { get; set; } 
    }
}
