using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.DataModel.Models
{
   public class QuestionForPets
    {

        public bool AreYouAnimalLover { get; set; }
        public bool DoYouHaveYourOwnPet { get; set; }
        public string YourPet { get; set; }
        public bool PotentionalRoomatesPetIsOkay { get; set; }
        public string RoomateOwnerPet { get; set; }
    }
}
