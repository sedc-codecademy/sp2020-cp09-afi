
let allfilter = document.getElementById("content");
let allfilter2 = document.getElementById("content2")
let filterbtn = document.getElementById("filter-button");
let getcard = document.getElementById("filterthiscard");
let getsecondcard = document.getElementById("filtersecondcard");



function filters(){
    
    filterbtn.style.display ="none";
    getcard.style.display = "none";
    allfilter.style.display = "block";
    getsecondcard.style.display = "none";
}


function goback(){

    filterbtn.style.display = "block";
    getcard.style.display = "block";
    allfilter.style.display = "none";
}