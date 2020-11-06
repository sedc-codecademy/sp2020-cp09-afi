using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.Services.Exceptions
{
    public class UserException : Exception
    {
        public string UserId { get; set; }
        public string Name { get; set; }

        public UserException(string userId, string name)
            : base("There has beed an isssue with a user")
        {
            UserId = userId;
            Name = name;
        }

        public UserException(string userId, string name, string message)
            : base(message)
        {
            UserId = userId;
            Name = name;
        }
    }
}
