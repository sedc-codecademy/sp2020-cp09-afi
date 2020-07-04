
let allfilter = document.getElementById("content");
let allfilter2 = document.getElementById("content2")
let filterbtn = document.getElementById("filter-button");
let getcard = document.getElementById("filterthiscard");
let getsecondcard = document.getElementById("filtersecondcard");
let homepage = document.getElementsByClassName("section1-HomePage")[0];
let searchCards = document.getElementById("searhCards");
let searchApartments = document.getElementById("getApartmentsSearch");
let search = document.getElementById("search-btn");
let trys = document.getElementById("searchApartments");
let footerapartmentsearch = document.querySelector(".footer-ApartmentSearch");
let navapartmentssearch = document.querySelector(".apartments-top-right-user-box");
let aparmentOwnerDiv = document.querySelector(".apartment-profile-container-body");


let selectLocation = document.getElementById("seconddropdown");
let selectRoomateOrApartment = document.getElementById("firstdropdown");

searchApartments.style.dysplay = 'none';
searchCards.style.display = 'none';
footerapartmentsearch.style.display = "none";
navapartmentssearch.style.display = "none";

function showDivRoomate(){
    homepage.style.display = 'none';  
    searchApartments.style.dysplay = 'none';   
    trys.style.display = "none";      
    searchCards.style.display = 'block';

}

function showDivApartment(){
    homepage.style.display = 'none';           
    searchCards.style.display = 'none';
    navapartmentssearch.style.display = "block";
    searchApartments.style.dysplay = 'block';
    footerapartmentsearch.style.display = "block";
}

search.addEventListener("click", function(){

    let selectedLocation = selectLocation.options[selectLocation.selectedIndex].value;
    let selectedRoomateOrAparment = selectRoomateOrApartment.options[selectRoomateOrApartment.selectedIndex].value;
    if(selectedRoomateOrAparment === "true" || selectedRoomateOrAparment === "false"){
        showDivRoomate();
        //paginationInitUsers();
        RoomatesDb.getAll();
        //filterRoomates();
    }else{
        showDivApartment();
        //paginationInitUsers();
        ApartmentsDb.getAll();
        //filterApartments();
    }    
});

let roomatesList3 = [];


let RoomatesDb3 = {
    getAll: function() {
        fetch(
                "https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/users.json"
            )
            .then(res => res.json())
            .then(data => {     
              console.log(data);           
              roomates = data;
              
              roomatesList3 = filterRoomates(data, selectedLocation, selectedRoomateOrAparment);
              console.log(roomatesList, "filtered list ");
              paginationInitUsers3();                    
            })
            .catch(error => console.log(error));
    },
};

function filterRoomates3(roomates, selectedLocation, selectedRoomateOrAparment){
    return roomates.filter(r => selectedLocation === r.preferences.roomQuestions[0].region
    && selectedRoomateOrAparment == String(r.preferences.doYouHaveSpace)
  );  
}



function paginationInitUsers3 (){
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
             <h4 class="card-title-2">${roomate.user.fullName}</h4>
             <span class="card-text-2">${roomate.user.age}, ${roomate.preferences.roomQuestions[0].region}</span><br>
             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
             Порака
           </button>             </div>
           </div>`);
          // }
          
        });
      }
     });
}

function showDivPerfectMatch(){
    homepage.style.display = 'none';  
    searchApartments.style.display = 'none';
    userprofilepage.style.display = 'none';
    trys.style.display = "none";    
    aparmentOwnerDiv.style.display = "none";  
    searchCards.style.display = 'block';
}

let perfectMatchList = [];
let perfectMatchBtn1 = document.getElementById('sovpagjanja-page1');
//let perfectMatchBtn2 = document.getElementById('sovpagjanja-page2');
let perfectMatchBtn3 = document.getElementById('sovpagjanja-page3');
//let perfectMatchBtn4 = document.getElementById('sovpagjanja-page4');

let RoomatesDb2 = {
    getAll: function() {
        fetch(
                "https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/users.json"
            )
            .then(res => res.json())
            .then(data => {     
              console.log(data);           
              
              let region2 = roomateUser[2].regionUser;
            let isSmoker2 = roomateUser[1].isSmoker1;
            console.log(region2);
            console.log(isSmoker2);              
              perfectMatchList = perfectMatch(data, region2, isSmoker2);
              console.log(perfectMatchList, "filtered list ");
              paginationInitPerfectMatch();                   
            })
            .catch(error => console.log(error));
    },
};

function perfectMatch(roomates, region2, isSmoker2){
    
        return roomates.filter(r => region2 === r.preferences.roomQuestions[0].region
        //&& isSmoker2 == String(r.preferences.smoker[0].isSmoker)
      ); 
}
perfectMatchBtn1.addEventListener('click', function(){
    RoomatesDb2.getAll();
    showDivPerfectMatch();
})
// perfectMatchBtn2.addEventListener('click', function(){
//     RoomatesDb2.getAll();
//     showDivPerfectMatch();
// })
perfectMatchBtn3.addEventListener('click', function(){
    RoomatesDb3.getAll();
    showDivPerfectMatch();
})
// perfectMatchBtn4.addEventListener('click', function(){
//     RoomatesDb2.getAll();
//     showDivPerfectMatch();
// })

function paginationInitPerfectMatch (){
    $('#list').pagination({
      dataSource: perfectMatchList,
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
               <h4 class="card-title-2">${roomate.user.fullName}</h4>
               <span class="card-text-2">${roomate.user.age}, ${roomate.preferences.roomQuestions[0].region}</span><br>
               <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
               Порака
             </button>             </div>
             </div>`);
            // }
            
          });
        }
       });
  }

let getwrap = document.querySelector(".wrapper");

function filters(){
    
    filterbtn.style.display = "none";
    //getcard.style.display = "none";
    allfilter.style.display = "block";
    //getsecondcard.style.display = "none";
     getwrap.style.opacity = .5;
     allfilter.style.opacity = 1;

    

    
}

function goback(){

    filterbtn.style.display = "block";
    getcard.style.display = "block";
    allfilter.style.display = "none";
}

$('#range').on("input", function() {
    $('.output').val(this.value +"  eur" );
    }).trigger("change");


    let container = document.querySelector(".filters-container");
    $(document).ready(function() {
        $("#filters-btn").click(function(){
            var favorite = [];
            $.each($("input[name='interest']:checked"), function(){            
                favorite.push($(this).val());
            });
            
            alert("My interests are: " + favorite.join(", "));
            container.style.display = "none";
            filterbtn.style.display = "block";
            getwrap.style.opacity = 1;


        });
    });
