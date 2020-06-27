//najavi se kopche od homepage

let allcontent = document.getElementById("all-content-HomePage");
let allnajava = document.getElementById("NajavisePage");
// let allprofile = document.getElementById("hidecontent");
// let allregistriraj = document.getElementById("allregistracija");
let kopchenajava = document.getElementById("najava-HomePage");



allnajava.style.display = "none";

kopchenajava.addEventListener("click" ,function(){

    allnajava.style.display = "block";
    allcontent.style.display = "none";
  
})

// sign up leads you to apartmentprofile


let apartmentrentarprofilepage = document.querySelector(".apartment-profile-container-body");
let logintoapartmentownerprofilebutton = document.querySelector(".signup-NajavisePage");
// let najavisepage = document.getElementById("NajavisePage");

apartmentrentarprofilepage.style.display ="none";


logintoapartmentownerprofilebutton.addEventListener("click",function(){

apartmentrentarprofilepage.style.display = "block";
najavisepage.style.display = "none";

})



// log in leads you to user  profile

let userprofilepage = document.querySelector(".user-profile-container-body");
let logintouserprofilebutton = document.querySelector(".login-NajavisePage");
let najavisepage = document.getElementById("NajavisePage");




userprofilepage.style.display ="none";


logintouserprofilebutton.addEventListener("click",function(){

userprofilepage.style.display = "block";
najavisepage.style.display = "none";

})

// click on logo and go back to home page

let logo = document.getElementById("logo-image");

logo.addEventListener("click",function(){
    allnajava.style.display = "none";
    allcontent.style.display = "block";

})

// go to registrasion forms

let registracija = document.querySelector(".section-reg");
let regbutton = document.getElementById("registriraj-HomePage");


registracija.style.display = "none";

regbutton.addEventListener("click",function(){

registracija.style.display = "block";
allcontent.style.display = "none";

})


 //second button to register

let registrationbuttonsecone = document.getElementById("reg-second");


registrationbuttonsecone.addEventListener("click",function(){


    registracija.style.display = "block";
    allcontent.style.display = "none";

})

// function login(){

//     allnajava.style.display = "none";
//     allprofile.style.display = "block";
// }


// function registriraj(){

//     allregistriraj.style.display = "block";
//     allcontent.style.display ="none";

// }