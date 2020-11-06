using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Roomates.DataAccess;
using Roomates.DataModel.Models;
using Roomates.Models;
using Roomates.Models.SettingsModels;
using Roomates.Services.Exceptions;
using Roomates.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Roomates.Services.Services
{
     public class ApartmentService: IApartmentService
    {
        private readonly IRepository<Apartment> _apartmentRepository;
        private readonly IOptions<JwtSettings> _jwtSettings;

        public ApartmentService(IRepository<Apartment> apartmentRepository,
            IOptions<JwtSettings> jwtSettings)
        {
            _apartmentRepository = apartmentRepository;
            _jwtSettings = jwtSettings;
        }

        public ApartmentProfileModel Authenticate(string username, string password)
        {
            var userApartment = _apartmentRepository.GetAll().FirstOrDefault(x =>
                    x.Name == username);

            if (userApartment == null)
            {
                throw new ApartmentException(null, null,
                    "User-apartment with that name does not exists");
            }

            var hashedPasword = HashPassword(password);
            if (userApartment.Password != hashedPasword)
            {
                throw new ApartmentException(userApartment.Id, userApartment.Password,
                    "User-apartment password does not match with user-apartment");
            }

            // TODO: create aut token
            var token = GenerateJwtToken(userApartment);

            var userApartmentModel = new ApartmentProfileModel
            {
                Id = userApartment.Id,
                Name = userApartment.Name,
                Area = userApartment.Area,
                Rooms = userApartment.Rooms,
                Price = userApartment.Price,
                Token = token
            };

            return userApartmentModel;
        }

        // asdasdasd.wdasdasdasd.asdasdasdas

        public void Register(RegisterModelForApartment request)
        {
            if (string.IsNullOrWhiteSpace(request.Password) ||
                string.IsNullOrWhiteSpace(request.ConfirmPassword))
            {
                throw new ApartmentException(null, request.Password,
                    "Password is required");
            }

            if (request.Password != request.ConfirmPassword)
            {
                throw new ApartmentException(null, request.Password,
                    "Passwords does not match");
            }

            if (string.IsNullOrWhiteSpace(request.Name))
            {
                throw new ApartmentException(null, request.Name,
                    "Apartment Name is required"); // should use custom exception
            }

            if (string.IsNullOrWhiteSpace(request.Area))
            {
                throw new ApartmentException(null, request.Area,
                    "Area is required");
            }

            /*  if (string.(request.Age))
              {
                  throw new UserException(null, request.Age,
                      "Age is required");
              }*/

            var hashedPassword = HashPassword(request.Password);

            var apartment = new Apartment
            {
                Name = request.Name,
                Area = request.Area,
                Password = hashedPassword,
                Price = request.Price,
                Id = request.Id,
                Rooms= request.Rooms
            };

            _apartmentRepository.Insert(apartment);
        }

        private string HashPassword(string password)
        {
            var md5 = new MD5CryptoServiceProvider();
            var md5data = md5.ComputeHash(Encoding.ASCII.GetBytes(password));
            return Encoding.ASCII.GetString(md5data);
        }

        private string GenerateJwtToken(Apartment apartment)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var secret = Encoding.ASCII.GetBytes(_jwtSettings.Value.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new[]
                    {
                        new Claim(ClaimTypes.Name, $"{apartment.Name}"),
                        new Claim(ClaimTypes.NameIdentifier, apartment.Id.ToString())
                    }),
                Expires = DateTime.UtcNow.AddDays(_jwtSettings.Value.ExpireDays),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(secret), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}

