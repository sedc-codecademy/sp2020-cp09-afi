using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.Models
{
 public class RegisterModelForApartment
    {
        public string Name { get; set; }

        public string Id { get; set;}
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public int Price { get; set; }
        public string Area { get; set; }
        public int Rooms { get; set; }

    }
}

