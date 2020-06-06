

let allcontent = document.getElementById("allcontent");
let alnajava = document.getElementById("allnajava");
let allprofile = document.getElementById("hidecontent");
let allregistriraj = document.getElementById("allregistracija");




function najava(){
    allnajava.style.display = "block";
    allcontent.style.display = "none";
  
}



function login(){

    allnajava.style.display = "none";
    allprofile.style.display = "block";
}


function registriraj(){

    allregistriraj.style.display = "block";
    allcontent.style.display ="none";

}