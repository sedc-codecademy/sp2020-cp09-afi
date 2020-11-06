using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Roomates.Models;
using Roomates.Services.Exceptions;
using Roomates.Services.Interfaces;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roomates.Application.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentController : ControllerBase
    {
        private readonly IApartmentService _apartmentService;

        public ApartmentController(IApartmentService apartmentService)
        {
            this._apartmentService = apartmentService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public ActionResult<ApartmentProfileModel> Authenticate(
            [FromBody] ApartmentLogInModel request)
        {
            try
            {
                var response = _apartmentService
                    .Authenticate(request.Name,
                    request.Password);

                Log.Information($"USER who is renting an apartment: {response.Name} has logged in");
                //Debug.WriteLine($"{response.Id} has been loged in");
                return Ok(response);
            }
            catch (ApartmentException ex)
            {
                Log.Error($"USER who is renting the apartment: {ex.UserId}.{ex.Name}: {ex.Message}");
                //Debug.WriteLine($"USER: {ex.UserId}.{ex.Name} {ex.Message}");
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error("USER who is renting the apartment: {message}", ex.Message);
                //Debug.WriteLine(ex.Message);
                return BadRequest("Something went wrong!");
            }
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterModelForApartment request)
        {
            try
            {
                _apartmentService.Register(request);

                Log.Information("USER who is renting the apartment: {username} has registered", request.Name);
                //Debug.WriteLine($"User registered with {request.Username}");
                return Ok("Success");
            }
            catch (ApartmentException ex)
            {
                Log.Error($"USER who is renitng the apartment: {ex.UserId}.{ex.Name}: {ex.Message}");
                //Debug.WriteLine($"User {ex.UserId}.{ex.Name}: {ex.Message}");
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                
                Log.Error($"USER who is renting the apartment : {ex.Message}");
                //Debug.WriteLine($"Unknown error: {ex.Message}");
                return BadRequest(ex.Message);
            }
        }
    }
}