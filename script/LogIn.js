//najavi se kopche od homepage



$(document).ready(function(){
    $(this).scrollTop(0);
});



let allcontent = document.getElementById("all-content-HomePage");
let allnajava = document.getElementById("NajavisePage");
// let allprofile = document.getElementById("hidecontent");
// let allregistriraj = document.getElementById("allregistracija");
let kopchenajava = document.getElementById("najava-HomePage");
let searchApartmentsa = document.getElementById("getApartmentsSearch");
let userName = document.getElementById("emailIpnut");
let password = document.getElementById("passwordInput");




let logonuserprofile = document.querySelector(".user-profile-nav-bar-logo-image");

logonuserprofile.addEventListener("click", function(){

allcontent.style.display = "block";
userprofilepage.style.display = "none";

})
allnajava.style.display = "none";

kopchenajava.addEventListener("click" ,function(){

    allnajava.style.display = "block";
    allcontent.style.display = "none";
    searchApartmentsa.style.display = "none";
  
})

// sign up leads you to apartmentprofile


let apartmentrentarprofilepage = document.querySelector(".apartment-profile-container-body");
let logintoapartmentownerprofilebutton = document.querySelector(".signup-NajavisePage");
// let najavisepage = document.getElementById("NajavisePage");

apartmentrentarprofilepage.style.display ="none";


logintoapartmentownerprofilebutton.addEventListener("click",function(){

apartmentrentarprofilepage.style.display = "block";
najavisepage.style.display = "none";
searchApartmentsa.style.display = "none";


})



// log in leads you to user  profile

let userprofilepage = document.querySelector(".user-profile-container-body");
let logintouserprofilebutton = document.querySelector(".login-NajavisePage");
let najavisepage = document.getElementById("NajavisePage");




userprofilepage.style.display ="none";


logintouserprofilebutton.addEventListener("click",function(){
callApi();

})

// click on logo and go back to home page
let logoatsearchcards = document.querySelector(".searchcard-nav-bar-logo-image");
let searchcarspage = document.getElementById("searchCards");

logoatsearchcards.addEventListener("click",function(){


    searchcarspage.style.display = "none";
    allcontent.style.display = "block";
})


let najavalogo = document.querySelector(".logo-top-left-image-NajavisePage");


najavalogo.addEventListener("click",function(){
    allnajava.style.display = "none";
    allcontent.style.display = "block";
    
})

    let apartmentsearchlogo = document.querySelector(".apartmentSearch-nav-bar-logo-image");
    let apartmentsearchpage = document.getElementById("searchApartments");

    apartmentsearchlogo.addEventListener("click",function(){

        apartmentsearchpage.style.display ="none";
        allcontent.style.display = "block";

        
    })


    let apartmentownerlogo = document.querySelector(".nav-bar-logo-image-apartmentowner");


    apartmentownerlogo.addEventListener("click", function(){

        apartmentrentarprofilepage.style.display = "none";
        allcontent.style.display = "block";
    })


    let termslogo = document.querySelector(".logo-top-left-image-TermsPage");

    termslogo.addEventListener("click",function(){

            terms.style.display = "none";
            allcontent.style.display = "block";

    })


    let contactlogo = document.querySelector(".logo-top-left-image-ContactPage");

    contactlogo.addEventListener("click", function(){
contacts.style.display = "none";
allcontent.style.display = "block";

    })

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
searchApartmentsa.style.display = "none";


})


 //second button to register

let registrationbuttonsecone = document.getElementById("reg-second");


registrationbuttonsecone.addEventListener("click",function(){


    registracija.style.display = "block";
    allcontent.style.display = "none";
    searchApartmentsa.style.display = "none";


})



// privacy policy


let privacypolicy = document.getElementById("section-footer");
let privacybutton = document.getElementById("privacy");


privacypolicy.style.display = "none";

privacybutton.addEventListener("click",function(){

  allcontent.style.display = "none";
  privacypolicy.style.display = "block";
  searchApartmentsa.style.display = "none";


})


//terms


let terms = document.getElementById("section-terms");
let termsbutton = document.getElementById("terms");


terms.style.display = "none";

termsbutton.addEventListener("click", function(){

    allcontent.style.display = "none";
    privacypolicy.style.display = "none";
    terms.style.display = "block";
    searchApartmentsa.style.display = "none";


})


let contacts = document.getElementById("section-contacts");
let contactsbutton = document.getElementById("Contact");


contacts.style.display = "none";
contactsbutton.addEventListener("click", function(){


    contacts.style.display = "block";
    allcontent.style.display = "none";
    searchApartmentsa.style.display = "none";

})



//goback from privacu 

let privacybuttonback = document.querySelector(".btn-success1");


privacybuttonback.addEventListener("click", function(){

privacypolicy.style.display = "none";
allcontent.style.display = "block";

})

//goback from terms 


let termsbuttonback = document.querySelector(".btn-success2");

termsbuttonback.addEventListener("click", function(){

terms.style.display = "none";
allcontent.style.display = "block";

})



let contactbuttonback = document.querySelector(".btn-success3");

contactbuttonback.addEventListener("click", function(){

contacts.style.display = "none";
allcontent.style.display = "block";

})



let searchcardsbuttonback = document.querySelector(".btn-success4");
let searchrommates = document.getElementById("searhCards");
let homepagetoback = document.querySelector(".section1-HomePage");

searchcardsbuttonback.addEventListener("click", function(){

    searchrommates.style.display ="none";
      homepagetoback.style.display = "block";


})





let apartmentsearchgoback = document.querySelector(".btn-success5");

apartmentsearchgoback.addEventListener("click", function(){

apartmentsearchpage.style.display = "none";
homepagetoback.style.display ="block";



})


let logingoback = document.querySelector(".btn-success6");


logingoback.addEventListener("click",function(){

najavisepage.style.display = "none";
allcontent.style.display = "block";


})


let userprofilegoback = document.querySelector(".btn-success7");


userprofilegoback.addEventListener("click", function(){

userprofilepage.style.display = "none";
allcontent.style.display = "block";

})


let apartmentownergoback = document.querySelector(".btn-success8");

apartmentownergoback.addEventListener("click",function(){


apartmentrentarprofilepage.style.display = "none";
allcontent.style.display = "block";

})


let registrasiongoback = document.querySelector(".btn-success9");


registrasiongoback.addEventListener("click", function(){

registracija.style.display = "none";
allcontent.style.display = "block";

})


let prebaraj = document.querySelector(".searchcard-nav-bar-links 1")

prebaraj.addEventListener("click",function(){

searchcarspage.style.display = "none";
allcontent.style.display = "block";

})


let prebaraj2 = document.querySelector("apartmentSearch-nav-bar-links 2")

prebaraj2.addEventListener("click",function(){

    apartmentsearchpage.style.display = "none";
    allcontent.style.displaym= "block";

})


let prebaraj3 = document.querySelector(".user-profile-nav-bar-links 4")


prebaraj3.addEventListener("click",function(){

userprofilepage.style.display = "none";
allcontent.style.display = "block";

})


let prebaraj4 = document.querySelector(".nav-bar-links-apartmentowner 6");


prebaraj4.addEventListener("click",function(){

apartmentrentarprofilepage.style.display = "none";
allcontent.style.display = "block";

})

