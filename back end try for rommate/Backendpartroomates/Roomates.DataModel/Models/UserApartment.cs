using Roomates.DataModel.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.DataModel.Models
{
 public  class UserApartment
    {
        public User User { get; set;}
        public Apartment Apartment { get; set; }

    }
}
