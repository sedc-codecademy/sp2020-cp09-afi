//najavi se kopche od homepage

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
userprofilepage.style.display = "block";
najavisepage.style.display = "none";

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



