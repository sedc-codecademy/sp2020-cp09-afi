

let searchRoomates = document.getElementById("search-btn-cardss");
let cardsRoomateDiv = document.getElementsByClassName("wrapper")[0];

let roomatesList = [];


let RoomatesDb = {
    getAll: function() {
        fetch(
                "https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/users.json"
            )
            .then(res => res.json())
            .then(data => {     
              console.log(data);           
              roomates = data;
              let selectedLocation =document.getElementById("seconddropdown").options[selectLocation.selectedIndex].text;
              let selectedRoomateOrAparment =document.getElementById("firstdropdown").options[selectRoomateOrApartment.selectedIndex].value;
              console.log(selectedLocation);
              console.log(selectedRoomateOrAparment);
              console.log(String(data[0].preferences.doYouHaveSpace));
              roomatesList = filterRoomates(data, selectedLocation, selectedRoomateOrAparment);
              console.log(roomatesList, "filtered list ");
              paginationInitUsers();                    
            })
            .catch(error => console.log(error));
    },
};

function filterRoomates(roomates, selectedLocation, selectedRoomateOrAparment){
  if(selectedLocation === "Локација"){
    return roomates.filter(r => selectedRoomateOrAparment == String(r.preferences.doYouHaveSpace)
    );
  }
  return roomates.filter(r => selectedLocation === r.preferences.roomQuestions[0].region
    && selectedRoomateOrAparment == String(r.preferences.doYouHaveSpace)
  );  
}



function paginationInitUsers (){
  $('#list').pagination({
    dataSource: roomatesList,
    pageSize: 10,
    callback: function(data, pagination) {                    
        console.log(data, "pagination");
        let wrapper = $('#list .wrapper').empty();
        $.each(data, function (i, roomate) {
          
          // if(selectedLocation === roomate.preferences.roomQuestions[0].region.trim()){
            const imageMale = "./SearchedCardsPage/images/tirkizna3.png";
            const imageFemale = "./SearchedCardsPage/images/magenta.png";
            const colorMale = "card card-color-2";
            const colorFemale = "card card-color-1";
            const colorMaleTitle ="card-title-2";
            const colorFemaleTitle ="card-title-1";
            const colorMaleRegion = "card-text-2";
            const colorFemaleRegion = "card-text-1";
             $('#list .wrapper').append(`<div class="${roomate.user.sex === 'жена' ? colorFemale :colorMale}">
             <div class="card-house-icon">
               <img src="${roomate.user.sex === 'жена' ? imageFemale : imageMale}" alt="" class="card-house-image">
             </div>
             <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.89 171.94">
             <clipPath id="Houses"> 
               <polygon class="cls-5"  points="9.66 96.25 35.27 96.25 35.27 167.94 167.13 167.94 167.13 96.25 194.01 96.25 100.41 5.61 9.66 96.25"/>
             </clipPath>
           <polygon class="cls-5" points="9.66 96.25 35.27 96.25 35.27 167.94 167.13 167.94 167.13 96.25 194.01 96.25 100.41 5.61 9.66 96.25"/>
           <image  class ="imageinhouse" xlink:href=${roomate.user.image}" clip-path="url(#Houses)" />
           </svg>            
             <div class="card-body">
             <h4 class="${roomate.user.sex === 'жена' ? colorFemaleTitle :colorMaleTitle}">${roomate.user.fullName}</h4>
             <span class="${roomate.user.sex === 'жена' ? colorFemaleRegion :colorMaleRegion}">${roomate.user.age}, ${roomate.preferences.roomQuestions[0].region}</span><br>
             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
             Порака
           </button>             </div>
           </div>`);
          // }
          
        });
      }
     });
}

// RoomatesDb.getAll();

//setTimeout(function(){console.log(roomates)}, 10000);

console.log(roomatesList);

//for messages

// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })

