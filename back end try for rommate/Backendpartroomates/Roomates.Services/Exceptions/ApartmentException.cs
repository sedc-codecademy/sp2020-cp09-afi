using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.Services.Exceptions
{
  public  class ApartmentException : Exception
    {
        public string UserId { get; set; }
        public string Name { get; set; }

        public ApartmentException(string userId, string name)
            : base("There has beed an isssue with a user-apartment")
        {
            UserId = userId;
            Name = name;
        }

        public ApartmentException(string userId, string name, string message)
            : base(message)
        {
            UserId = userId;
            Name = name;
        }

    }
}
