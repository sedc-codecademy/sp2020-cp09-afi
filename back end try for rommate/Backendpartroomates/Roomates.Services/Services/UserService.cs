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
   public class UserService : IUserService
    {
        private readonly IRepository<User> _userRepository;
        private readonly IOptions<JwtSettings> _jwtSettings;

        public UserService(IRepository<User> userRepository,
            IOptions<JwtSettings> jwtSettings)
        {
            _userRepository = userRepository;
            _jwtSettings = jwtSettings;
        }

        public RoomateProfileModel Authenticate(string username, string password)
        {
            var user = _userRepository.GetAll().FirstOrDefault(x =>
                    x.FullName == username);

            if (user == null)
            {
                throw new UserException(null, null,
                    "User with that username does not exists");
            }

            var hashedPasword = HashPassword(password);
            if (user.Password != hashedPasword)
            {
                throw new UserException(user.Id, user.Password,
                    "User password does not match with user");
            }

            // TODO: create aut token
            var token = GenerateJwtToken(user);

            var userModel = new RoomateProfileModel
            {
                Id = user.Id,
                FullName = user.FullName,
                Address = user.Address,
                Age = user.Age,
                Token = token
            };

            return userModel;
        }

        // asdasdasd.wdasdasdasd.asdasdasdas

        public void Register(RegisterModelForRoomate request)
        {
            if (string.IsNullOrWhiteSpace(request.Password) ||
                string.IsNullOrWhiteSpace(request.ConfirmPassword))
            {
                throw new UserException(null, request.Password,
                    "Password is required");
            }

            if (request.Password != request.ConfirmPassword)
            {
                throw new UserException(null, request.Password,
                    "Passwords does not match");
            }

            if (string.IsNullOrWhiteSpace(request.FullName))
            {
                throw new UserException(null, request.FullName,
                    "FullName is required"); // should use custom exception
            }

            if (string.IsNullOrWhiteSpace(request.Address))
            {
                throw new UserException(null, request.Address,
                    "Address is required");
            }

          /*  if (string.(request.Age))
            {
                throw new UserException(null, request.Age,
                    "Age is required");
            }*/

            var hashedPassword = HashPassword(request.Password);

            var user = new User
            {
                FullName = request.FullName,
                Address = request.Address,
                Password = hashedPassword,
                Age = request.Age
            };

            _userRepository.Insert(user);
        }

        private string HashPassword(string password)
        {
            var md5 = new MD5CryptoServiceProvider();
            var md5data = md5.ComputeHash(Encoding.ASCII.GetBytes(password));
            return Encoding.ASCII.GetString(md5data);
        }

        private string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var secret = Encoding.ASCII.GetBytes(_jwtSettings.Value.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new[]
                    {
                        new Claim(ClaimTypes.Name, $"{user.FullName}"),
                        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
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

