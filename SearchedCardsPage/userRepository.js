
let searchRoomates = document.getElementById("search-btn");
let cardsRoomateDiv = document.getElementsByClassName("card-wrapper")[0];
let results = [];

let RoomatesDb = {
    getAll: function() {
        fetch(
                "https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/users.json"
            )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                results = data;
                
                createUserCard(data, cardsRoomateDiv);

            })
            .catch(error => console.log(error));
    },
};

searchRoomates.addEventListener("click", function(){
    RoomatesDb.getAll();
});



function createUserCard(roomates, element) {
   
    for (const roomate of roomates) {
        console.log(roomate.user)
        const imageMale = "images/tirkizna3.png";
        const imageFemale = "images/magenta.png";
        const colorMale = "card card-color-2";
        const colorFemale = "card card-color-1";
        element.innerHTML += `<div class="${roomate.user.sex === 'жена' ? colorFemale :colorMale}">
        <div class="card-house-icon">
          <img src="${roomate.user.sex === 'жена' ? imageFemale : imageMale}" alt="" class="card-house-image">
        </div>

        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.89 171.94">
          <image  class="imageinhouse" xlink:href="${roomate.user.image}" clip-path="url(#House)" />
        </svg>
        
        <div class="card-body">
          <h4 class="card-title-2">${roomate.user.fullName}</h4>
          <span class="card-text-2">23, Карпош 3</span><br>
          <a href="#" class="btn btn-primary">Порака</a>
        </div>
      </div>`
             
    }
};

// var url = "https://spreadsheets.google.com/feeds/list/1xo6dUfcVOwPA5Lkd8pKevLj6lP-0gOaPXNBZk4jyuGw/od6/public/values?alt\u003djson";

// var perPage = 3;
// var currentPage = 1;
// var values = []; // Added

// // Modified
// $.getJSON(url, function(data) {
//   var element = "";
//   $.each(data.feed.entry, function(index,value) {
//     values.push({Category: value.gsx$largeimage.$t, Name: value.gsx$imagetitle.$t});
//     if (index < perPage) {
//       for (const roomate of roomates) {
//                 console.log(roomate.user)
//                 const imageMale = "images/tirkizna3.png";
//                 const imageFemale = "images/magenta.png";
//                 const colorMale = "card card-color-2";
//                 const colorFemale = "card card-color-1";
//                 element.innerHTML += `<div class="${roomate.user.sex === 'жена' ? colorFemale :colorMale}">
//                 <div class="card-house-icon">
//                   <img src="${roomate.user.sex === 'жена' ? imageFemale : imageMale}" alt="" class="card-house-image">
//                 </div>
        
//                 <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.89 171.94">
//                   <image  class="imageinhouse" xlink:href="${roomate.user.image}" clip-path="url(#House)" />
//                 </svg>
                
//                 <div class="card-body">
//                   <h4 class="card-title-2">${roomate.user.fullName}</h4>
//                   <span class="card-text-2">23, Карпош 3</span><br>
//                   <a href="#" class="btn btn-primary">Порака</a>
//                 </div>
//               </div>`
                     
//             }
//       element += "Category: " + value.gsx$largeimage.$t + "</br>"+
//                 "Name: " + value.gsx$imagetitle.$t + "</br></br>";
//     }
//   });
//   $(".test").append(element);
// });

// function prevPage() {
//   if (currentPage > 1) {
//     currentPage--;
//     changePage();
//   }
// }

// function nextPage() {
//   if (currentPage < numPages()) {
//     currentPage++;
//     changePage();
//   }
// }

// // Modified
// function changePage() {
//   $(".test").html("");
//   var start = (currentPage - 1) * perPage;
//   var output = values.slice(start, start + perPage).reduce((s, e) => {
//     return s += "Category: " + e.Category + "</br>"+
//                 "Name: " + e.Name + "</br></br>";    
//   }, "");
//   $(".test").append(output);
// }

// // Modified
// function numPages() {
//   return Math.ceil(values.length / perPage);
// }
