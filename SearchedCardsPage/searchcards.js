
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



let selectLocation = document.getElementById("seconddropdown");
let selectRoomateOrApartment = document.getElementById("firstdropdown");

searchApartments.style.dysplay = 'none';
searchCards.style.display = 'none';

function showDivRoomate(){
    homepage.style.display = 'none';  
    searchApartments.style.dysplay = 'none';   
    trys.style.display = "none";      
    searchCards.style.display = 'block';

}

function showDivApartment(){
    homepage.style.display = 'none';           
    searchCards.style.display = 'none';
    searchApartments.style.dysplay = 'block';
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


    let container = document.querySelector(".filters-container");
    $(document).ready(function() {
        $("#filters-btn").click(function(){
            var favorite = [];
            $.each($("input[name='interest']:checked"), function(){            
                favorite.push($(this).val());
            });
            
            alert("My interests are: " + favorite.join(", "));
            container.style.display = "none";


        });
    });
