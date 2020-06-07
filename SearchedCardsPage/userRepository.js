
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
              // roomates = data;
              let selectedLocation =document.getElementById("seconddropdown").options[selectLocation.selectedIndex].text;
              let selectedRoomateOrAparment =document.getElementById("firstdropdown").options[selectRoomateOrApartment.selectedIndex].text;
              // console.log(selectedLocation);
              roomatesList = filterRoomates(data, selectedLocation, selectedRoomateOrAparment);
              console.log(roomatesList, "filtered list ");
              pagination();         
              
              
            })
            .catch(error => console.log(error));
    },
};

function filterRoomates(roomates, selectedLocation, selectedRoomateOrAparment){
  return roomates.filter(r => selectedLocation === r.preferences.roomQuestions[0].region
    //  && selectedRoomateOrAparment == String(roomate.preferences.doYouHaveSpace)
  );
  
}



function pagination (){
  $('#list').pagination({
    dataSource: roomatesList,
    pageSize: 8,
    callback: function(data, pagination) {                    
        console.log(data, "pagination");
        let wrapper = $('#list .wrapper').empty();
        $.each(data, function (i, roomate) {
          console.log(roomate.preferences.doYouHaveSpace)
          // if(selectedLocation === roomate.preferences.roomQuestions[0].region.trim()){
            const imageMale = "./SearchedCardsPage/images/tirkizna3.png";
            const imageFemale = "./SearchedCardsPage/images/magenta.png";
            const colorMale = "card card-color-2";
            const colorFemale = "card card-color-1";
             $('#list .wrapper').append(`<div class="${roomate.user.sex === 'жена' ? colorFemale :colorMale}">
             <div class="card-house-icon">
               <img src="${roomate.user.sex === 'жена' ? imageFemale : imageMale}" alt="" class="card-house-image">
             </div>
             <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.89 171.94">
             <clipPath id="House"> 
               <style>.cls-1{fill:none;stroke:none;stroke-miterlimit:10;stroke-width:8px;}</style>
               <polygon class="cls-1"  points="9.66 96.25 35.27 96.25 35.27 167.94 167.13 167.94 167.13 96.25 194.01 96.25 100.41 5.61 9.66 96.25"/>
             </clipPath>
           <polygon class="cls-1" points="9.66 96.25 35.27 96.25 35.27 167.94 167.13 167.94 167.13 96.25 194.01 96.25 100.41 5.61 9.66 96.25"/>
           <image  class ="imageinhouse"width="200" height="200" xlink:href=${roomate.user.image}" clip-path="url(#House)" />
           </svg>            
             <div class="card-body">
             <h4 class="card-title-2">${roomate.user.fullName}</h4>
             <span class="card-text-2">${roomate.user.age}, ${roomate.preferences.roomQuestions[0].region}</span><br>
               <a href="#" class="btn btn-primary">Порака</a>
             </div>
           </div>`);
          // }
          
        });
      }
     });
}

// RoomatesDb.getAll();

setTimeout(function(){console.log(roomates)}, 10000);

console.log(roomatesList);






  // function createUserCard(roomates, element) {
    
  //     for (const roomate of roomates) {
  //         console.log(roomate.user)
  //         const imageMale = "images/tirkizna3.png";
  //         const imageFemale = "images/magenta.png";
  //         const colorMale = "card card-color-2";
  //         const colorFemale = "card card-color-1";
  //         element.innerHTML += `<div class="${roomate.user.sex === 'жена' ? colorFemale :colorMale}">
  //         <div class="card-house-icon">
  //           <img src="${roomate.user.sex === 'жена' ? imageFemale : imageMale}" alt="" class="card-house-image">
  //         </div>

  //         <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.89 171.94">
  //           <image  class="imageinhouse" xlink:href="${roomate.user.image}" clip-path="url(#House)" />
  //         </svg>
          
  //         <div class="card-body">
  //           <h4 class="card-title-2">${roomate.user.fullName}</h4>
  //           <span class="card-text-2">23, Карпош 3</span><br>
  //           <a href="#" class="btn btn-primary">Порака</a>
  //         </div>
  //       </div>`
              
  //     }
  // };





//    $.getJSON('https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/users.json', function (json) {
//     $('#list').pagination({
//         dataSource: json.Product,
//         pageSize: 2,
//         callback: function(data, pagination) {
//             var wrapper = $('#list .wrapper').empty();
//             $.each(data, function (i, f) {
//                 $('#list .wrapper').append('<ul><li>Key1: ' + f.Key1 + '</li></ul>');
//             });
//         }
//     });
// });