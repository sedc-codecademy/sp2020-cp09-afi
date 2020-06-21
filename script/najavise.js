

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


let apartmentrentarprofilepage = document.querySelector(".apartment-profile-container-body");
let logintoapartmentownerprofilebutton = document.querySelector(".signup-NajavisePage");
// let najavisepage = document.getElementById("NajavisePage");

apartmentrentarprofilepage.style.display ="none";


logintoapartmentownerprofilebutton.addEventListener("click",function(){

apartmentrentarprofilepage.style.display = "block";
najavisepage.style.display = "none";

})



let userprofilepage = document.querySelector(".user-profile-container-body");
let logintouserprofilebutton = document.querySelector(".login-NajavisePage");
let najavisepage = document.getElementById("NajavisePage");




userprofilepage.style.display ="none";


logintouserprofilebutton.addEventListener("click",function(){

userprofilepage.style.display = "block";
najavisepage.style.display = "none";

})







// function login(){

//     allnajava.style.display = "none";
//     allprofile.style.display = "block";
// }


// function registriraj(){

//     allregistriraj.style.display = "block";
//     allcontent.style.display ="none";

// }