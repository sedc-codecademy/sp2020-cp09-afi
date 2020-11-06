using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.Models
{
    public class ApartmentProfileModel
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public int Price { get; set; }
        public string Area { get; set; }
        public int Rooms { get; set; }
        // TODO: Add token here
        public string Token { get; set; }
    }
}
