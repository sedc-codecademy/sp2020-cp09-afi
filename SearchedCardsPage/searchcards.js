
let allfilter = document.getElementById("content");
let allfilter2 = document.getElementById("content2")
let filterbtn = document.getElementById("filter-button");
let getcard = document.getElementById("filterthiscard");
let getsecondcard = document.getElementById("filtersecondcard");
let homepage = document.getElementById("homePage");
let searchCards = document.getElementById("searhCards");
let search = document.getElementById("search-btn");

let selectLocation = document.getElementById("seconddropdown");
let selectedLocation = selectLocation.options[selectLocation.selectedIndex].text;

let selectRoomateOrApartment = document.getElementById("firstdropdown");
let selectedRoomateOrAparment = selectRoomateOrApartment.options[selectRoomateOrApartment.selectedIndex].text;


searchCards.style.display = 'none';
function showHideDiv(){
    homepage.style.display = 'none';           
    searchCards.style.display = 'block';
}

search.addEventListener("click", function(){
    showHideDiv();
    pagination();
    RoomatesDb.getAll();
    filterRoomates();
});

function filters(){
    
    filterbtn.style.display = "none";
    //getcard.style.display = "none";
    allfilter.style.display = "block";
    //getsecondcard.style.display = "none";
}

function goback(){

    filterbtn.style.display = "block";
    getcard.style.display = "block";
    allfilter.style.display = "none";
}

$('#range').on("input", function() {
    $('.output').val(this.value +"  eur" );
    }).trigger("change");

