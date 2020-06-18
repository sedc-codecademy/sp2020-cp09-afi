

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



// function login(){

//     allnajava.style.display = "none";
//     allprofile.style.display = "block";
// }


// function registriraj(){

//     allregistriraj.style.display = "block";
//     allcontent.style.display ="none";

// }