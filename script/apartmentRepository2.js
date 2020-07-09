let searchApatments = document.getElementById("search-btn-cardss");
let cardsApartmentsDiv = document.getElementsByClassName("wrapper")[0];

let apartmentsList = [];


let ApartmentsDb = {
    getAll: function() {
        fetch(
                "https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/AparmentsOwners.json"
            )
            .then(res => res.json())
            .then(data => {     
              console.log(data);           
              apartments = data;
              let selectedLocation =document.getElementById("seconddropdown").options[selectLocation.selectedIndex].value;
              // let selectedLocation =document.getElementById("seconddropdown").value;
              // console.log(selectLocation, "selected location")
              
              console.log(selectedLocation);
              
              let selectedRoomateOrAparment =document.getElementById("firstdropdown").options[selectRoomateOrApartment.selectedIndex].value;
              // console.log(selectedLocation);
              // console.log(selectedRoomateOrAparment);
              // console.log(apartments[0].apartment[0].region);
              apartmentsList = filterApartments(data, selectedLocation);
              console.log("fetch", apartmentsList);
              paginationInitApartments(apartmentsList);         
              
              
            })
            .catch(error => console.log(error));
    },
};

function filterApartments(apartments, selectedLocation){
  console.log("filterApartments", apartments, selectedLocation)
  if(selectedLocation !== "all"){
    return apartments.filter(a => {
      console.log(selectedLocation, a.apartment[0].region)
     return selectedLocation === a.apartment[0].region;
    });
  }
  return apartments;
}
// ApartmentsDb.getAll();


function paginationInitApartments (apartmentsList){
  $('#list1').pagination({
    dataSource: apartmentsList,
    pageSize: 10,
    callback: function(data, pagination) {                    
        console.log(data, "pagination");
        let wrapper = $('#list1 .wrapper').empty();
        $.each(data, function (i, apartment) {         
            const imageMale = "./SearchedCardsPage/images/tirkizna3.png";
            const imageFemale = "./SearchedCardsPage/images/magenta.png";
            const colorMale = "card card-color-2";
            const colorFemale = "card card-color-1";
            $('#list1 .wrapper').append(`<div class="${apartment.sex === 'жена' ? colorFemale :colorMale}" id = "apartmentCard">
            <div class="card-house-icon">
              <img src="${apartment.sex === 'жена' ? imageFemale : imageMale}" alt="" class="card-house-image">
            </div>
             <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.89 171.94">
             <clipPath id="Houses"> 
               <polygon class="cls-5"  points="9.66 96.25 35.27 96.25 35.27 167.94 167.13 167.94 167.13 96.25 194.01 96.25 100.41 5.61 9.66 96.25"/>
             </clipPath>
           <polygon class="cls-5" points="9.66 96.25 35.27 96.25 35.27 167.94 167.13 167.94 167.13 96.25 194.01 96.25 100.41 5.61 9.66 96.25"/>
           <image  class ="imageinhouse" xlink:href="${apartment.pictures[1]}" clip-path="url(#Houses)" />
           </svg>            
             <div class="card-body" >
             <h4 class="card-title-2">Локација: ${apartment.apartment[0].region}</h4>
             <span class="card-text-2">Кирија: ${apartment.apartment[0].price} €</span><br>
             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
             Порака
           </button> 
             </div>
           </div>`);         

        });
      }
     });
}


//setTimeout(function(){console.log(roomates)}, 10000);

// console.log(apartmentsList);