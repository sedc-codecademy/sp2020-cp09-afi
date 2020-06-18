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

// Call JSON
function callApi(){
  fetch('https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/users.json')
  .then((res) => res.json())
  .then((data) => {
    
    // Add full name from json
    document.getElementById('fullName').innerHTML = data[0].user.fullName;
    // Add sex
    document.getElementById('sex').innerHTML = data[0].user.sex;
    // Add age
    document.getElementById('age').innerHTML = data[0].user.age;
    // Add location
    document.getElementById('address').innerHTML = data[0].user.address;
    // Add payment
    document.getElementById('payment').innerHTML = data[0].preferences.roomQuestions[0].howMuchRentAndOverhead;
    // Add region
    document.getElementById('region').innerHTML = data[0].preferences.roomQuestions[0].region;
    // Add Phone Number
    document.getElementById('phoneNumber').innerHTML = data[0].user.phoneNumber;
    // Add Email address
    document.getElementById('email').innerHTML = data[0].user.email;

    // Preferences
    // Smoker
    let userIsSmokerVal = data[0].preferences.smoker[0].isSmoker;
    let roomMateSmokerVal = data[0].preferences.smoker[0].roommateSmoker;

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
    let areYouAnimalLoverVal = data[0].preferences.pets[0].areYouAnimalLover;
    let doYouHaveYourOwnPetVal = data[0].preferences.pets[0].doYouHaveYourOwnPet;
    let userPetVal = data[0].preferences.pets[0].yourPet;
    let roomMateOwnerPetVal = data[0].preferences.pets[0].potentionalRoommatePetIsOkay;
    let roomMateOwnerPetTypeVal = data[0].preferences.pets[0].roommateOwnerPet;

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
    let sportVal = data[0].preferences.interests[0].sport;
    let musicVal = data[0].preferences.interests[0].music;
    let moviesVal = data[0].preferences.interests[0].movies;
    let booksVal = data[0].preferences.interests[0].books;
    let foodVal = data[0].preferences.interests[0].food;
    let healthyFoodVal = data[0].preferences.interests[0].healthyFood;
    let isActiveSportistVal = data[0].preferences.interests[0].isActiveSportist;

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

  })
  .catch((err) => console.log(err));
}
callApi();