using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PawfectMatch.Data;
using PawfectMatch.Models;
using PawfectMatch.Services;

namespace PawfectMatch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DogMatchController : ControllerBase
    {
        private readonly DogMatchService _dogMatchService;

        public DogMatchController(DogMatchService dogMatchService)
        {
            _dogMatchService = dogMatchService;
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<DogBreed>>> GetMatchingBreeds([FromBody] DogMatchRequest request)
        {
            var matchingBreeds = await _dogMatchService.GetMatchingBreeds(request);
            return Ok(matchingBreeds);
        }
    }
}
