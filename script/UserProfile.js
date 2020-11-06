// NAV-BAR Functionality
// Get the container element
let navBarLink = document.getElementById("user-profile-nav-bar-link");

// Get all links with class="nav-bar-links" inside the container
let navBarLinks = navBarLink.getElementsByClassName("user-profile-nav-bar-links");

// Loop through the nav-bar-links and add the active class to the current/clicked button
for (let i = 0; i < navBarLinks.length; i++) {
  navBarLinks[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

let errorInputMsg = document.getElementById("errorInputMsg");
function logIn (roomates){
  for(const roomate of roomates){
      if(userName.value === roomate.user.email && password.value === roomate.user.password){
          console.log("succses");
          userprofilepage.style.display = "block";
          najavisepage.style.display = "none";
    document.getElementById('logoPicUser').innerHTML = `<img  src=${roomate.user.image} alt="user image" class="user-profile-img-user">`
    document.getElementById('profilePic').innerHTML = `<img  src=${roomate.user.image} class="user-profile-card-img" alt="image">`
          // Add full name from json
    document.getElementById('fullName').innerHTML = roomate.user.fullName;
    // Add sex
    document.getElementById('sex').innerHTML = roomate.user.sex;
    // Add age
    document.getElementById('age').innerHTML = roomate.user.age;
    // Add location
    document.getElementById('address').innerHTML = roomate.user.address;
    // Add payment
    if(roomate.preferences.roomQuestions[0].howMuchRentAndOverhead){
      document.getElementById('payment').innerHTML = roomate.preferences.roomQuestions[0].howMuchRentAndOverhead;
    }
    else {
      document.getElementById('payment').innerHTML = roomate.preferences.roomQuestions[0].payment;
    }
    // Add region
    document.getElementById('region').innerHTML = roomate.preferences.roomQuestions[0].region;
    // Add Phone Number
    document.getElementById('phoneNumber').innerHTML = roomate.user.phoneNumber;
    // Add Email address
    document.getElementById('email').innerHTML = roomate.user.email;

    // Preferences
    // Smoker
    let userIsSmokerVal = roomate.preferences.smoker[0].isSmoker;
    let roomMateSmokerVal = roomate.preferences.smoker[0].roommateSmoker;

    if(userIsSmokerVal){
      document.getElementById('isSmoker').innerHTML = "Пушач";
    }

    if(!userIsSmokerVal){
      document.getElementById('isSmoker').innerHTML = "Не пушач";
    }

    if(roomMateSmokerVal){
      document.getElementById('roomMateSmoker').innerHTML = "Цимер е пушач";
    }

    if(!roomMateSmokerVal){
      document.getElementById('roomMateSmoker').innerHTML = "Цимер не пушач";
    }

    // Pets
    let areYouAnimalLoverVal = roomate.preferences.pets[0].areYouAnimalLover;
    let doYouHaveYourOwnPetVal = roomate.preferences.pets[0].doYouHaveYourOwnPet;
    let userPetVal = roomate.preferences.pets[0].yourPet;
    let roomMateOwnerPetVal = roomate.preferences.pets[0].potentionalRoommatePetIsOkay;
    let roomMateOwnerPetTypeVal = roomate.preferences.pets[0].roommateOwnerPet;

    if(areYouAnimalLoverVal){
      document.getElementById('animalLover').innerHTML = "Љубител на миленичиња";
    }

    if(!areYouAnimalLoverVal){
      document.getElementById('animalLover').innerHTML = "Не е љубител на миленичиња";
    }

    if(doYouHaveYourOwnPetVal){
      document.getElementById('havePet').innerHTML = "Има милениче";
      document.getElementById('userPet').innerHTML = userPetVal;
    }

    if(!doYouHaveYourOwnPetVal){
      document.getElementById('havePet').innerHTML = "Heма милениче";
    }

    if(roomMateOwnerPetVal){
      document.getElementById('roomMatePet').innerHTML = "Цимер милениче океј";
      document.getElementById('roomMatePetType').innerHTML = roomMateOwnerPetTypeVal;
    }

    if(!roomMateOwnerPetVal){
      document.getElementById('roomMatePet').innerHTML = "Цимер милениче не е океј";
    }

    // Interests
    let sportVal = roomate.preferences.interests[0].sport;
    let musicVal = roomate.preferences.interests[0].music;
    let moviesVal = roomate.preferences.interests[0].movies;
    let booksVal = roomate.preferences.interests[0].books;
    let foodVal = roomate.preferences.interests[0].food;
    let healthyFoodVal = roomate.preferences.interests[0].healthyFood;
    let isActiveSportistVal = roomate.preferences.interests[0].isActiveSportist;

    if(sportVal){
      document.getElementById('sport').innerHTML = "Спорт";
    }

    if(musicVal){
      document.getElementById('music').innerHTML = "Музика";
    }

    if(moviesVal){
      document.getElementById('movies').innerHTML = "Филмови";
    }

    if(booksVal){
      document.getElementById('books').innerHTML = "Kниги";
    }

    if(foodVal){
      document.getElementById('food').innerHTML = "Храна";
    }

    if(healthyFoodVal){
      document.getElementById('healthyFood').innerHTML = "Здрава храна";
    }

    if(isActiveSportistVal){
      document.getElementById('isActiveSportist').innerHTML = "Активен спортист";
    }

      }
      else{
        errorInputMsg.style.display = "block";
      }
  }    
}

// Call JSON
function callApi(){
  fetch('https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/users.json')
  .then((res) => res.json())
  .then((data) => {
    roomates = data;
    console.log(roomates)
    logIn (roomates);
  })
  .catch((err) => console.log(err));
}
