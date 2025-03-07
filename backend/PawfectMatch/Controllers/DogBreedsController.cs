using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PawfectMatch.Data;
using PawfectMatch.Models;

namespace PawfectMatch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DogBreedsController:ControllerBase
    {
        private readonly DataContext _context;

        public DogBreedsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DogBreed>>> GetDogBreeds()
        {
            return await _context.DogBreeds.ToListAsync();
        }
    }
}
