using Roomates.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.Services.Interfaces
{
    public interface IUserService
    {
        RoomateProfileModel Authenticate(string username, string password);
        void Register(RegisterModelForRoomate request);
    }
}
