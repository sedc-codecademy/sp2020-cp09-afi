// function siteRedirect() {

//     var selectbox = document.getElementById("firstdropdown");
//     var selectedValue = selectbox.options[selectbox.selectedIndex].value;
//     window.location.href = selectedValue;
//   }


// let searchRoomates = document.getElementById("search-btn");
// let cardsRoomateDiv = document.getElementsByClassName("wrapper")[0];
// let roomates = [];

// let RoomatesDb = {
//     getAll: function() {
//         fetch(
//                 "https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/users.json"
//             )
//             .then(res => res.json())
//             .then(data => {                
//               roomates = data;
//               console.log(data);
//               console.log(roomates);
//               $('#list').pagination({
//                 dataSource: roomates,
//                 pageSize: 20,
//                 callback: function(data, pagination) {         
//                   var e = document.getElementById("seconddropdown");
//                   var result = e.options[e.selectedIndex].text;
//                     let wrapper = $('#list .wrapper').empty();
//                     $.each(data, function (i, f) {
//                       if(result === f.preferences.roomQuestions[0].region){
//                       const imageMale = "images/tirkizna3.png";
//                       const imageFemale = "images/magenta.png";
//                       const colorMale = "card card-color-2";
//                       const colorFemale = "card card-color-1";
//                        $('#list .wrapper').append(`<div class="${f.user.sex === 'жена' ? colorFemale :colorMale}">
//                        <div class="card-house-icon">
//                          <img src="${f.user.sex === 'жена' ? imageFemale : imageMale}" alt="" class="card-house-image">
//                        </div>
//                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.89 171.94">
//                        <clipPath id="House"> 
//                          <style>.cls-1{fill:none;stroke:none;stroke-miterlimit:10;stroke-width:8px;}</style>
//                          <polygon class="cls-1"  points="9.66 96.25 35.27 96.25 35.27 167.94 167.13 167.94 167.13 96.25 194.01 96.25 100.41 5.61 9.66 96.25"/>
//                        </clipPath>
//                      <polygon class="cls-1" points="9.66 96.25 35.27 96.25 35.27 167.94 167.13 167.94 167.13 96.25 194.01 96.25 100.41 5.61 9.66 96.25"/>
//                      <image  class ="imageinhouse"width="200" height="200" xlink:href=${f.user.image}" clip-path="url(#House)" />
//                      </svg>
                       
                       
//                        <div class="card-body">
//                          <h4 class="card-title-2">${f.user.fullName}</h4>
//                          <span class="card-text-2"> ${f.user.age} ${f.preferences.roomQuestions[0].region}</span><br>
//                          <a href="#" class="btn btn-primary">Порака</a>
//                        </div>
//                      </div>`);
//                       }
//                     });
                  
//                   }
//                  });
              
//               console.log(roomates);                
//               //createUserCard(data, cardsRoomateDiv);

//             })
//             .catch(error => console.log(error));
//     },
// };

// setTimeout(function(){console.log(roomates)}, 10000);

// searchRoomates.addEventListener("click", function (){
//     RoomatesDb.getAll();


  
// });





// function GetSelectedValue(){
//   var e = document.getElementById("seconddropdown");
//   var result = e.options[e.selectedIndex].text;
//     document.getElementById("result").innerHTML = result;
// }


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
//           <span class="card-text-2">${roomate.preferences.roomQuestions[0].region}</span><br>
//           <a href="#" class="btn btn-primary">Порака</a>
//         </div>
//       </div>`
             
//     }
// };