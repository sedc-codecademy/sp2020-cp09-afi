using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.Models
{
  public  class RegisterModelForRoomate
    {
        public string FullName { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }


    }
}
