console.log("we are live!");

let reg = document.getElementById("reg");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div3_1 = document.getElementById("div3_1");
let div3_2 = document.getElementById("div3_2");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");
let div6 = document.getElementById("div6");
let div7 = document.getElementById("div7");
let div7_1 = document.getElementById("div7_1");
let div7_2 = document.getElementById("div7_2");
let div8 = document.getElementById("div8");
let div10 = document.getElementById("div10");

let apartmentUser =[];
let roomateUser =[];

function baramcimer(){
    reg.style.display = "none";
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
};

function prodolzi1(){
    
    div1.style.display = "none";
    div2.style.display = "block";
    

    let nameUser = document.getElementById("firstName").value;
    let lastNameUser = document.getElementById("lastName").value;
    let ageUser = document.getElementById("age1").value;
    let emailUser = document.getElementById("email1").value;
    let password = document.getElementById("password1").value;
    let phoneUser = document.getElementById("phone").value;
    let address1 = document.getElementById("address1").value; 
    let picture1 = "https://images.pexels.com/photos/220453/pexels-pto-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";   


roomateUser.push({
    firstname: nameUser,
    lastname: lastNameUser,
    fullname: nameUser + " " + lastNameUser,
    age: ageUser,
    email: emailUser,
    phone: phoneUser,
    address1: address1,
    picture: picture1,
    password: password,   
});
console.log(roomateUser);
};

function prodolzi2(){    
    div2.style.display = "none";
    div3.style.display = "block";
    

    let isSmoker1 = document.getElementById("smokerTrue").checked;
    let areYouAnimalLover = document.getElementById("areYouAnimalLover").checked;
    let doYouHaveYourOwnPet = document.getElementById("doYouHaveYourOwnPet").checked;
    let yourPet = document.getElementById("yourPet").value;
    let roomatePet = document.getElementById("roomatePet").checked;
    let e = document.getElementById("interests");
    let interestInput = e.options[e.selectedIndex].text;

    roomateUser.push({
        isSmoker1 : isSmoker1,
        //roomateSmoker : isRoomateSmoker,
        areYouAnimalLover: areYouAnimalLover,
        doYouHaveYourOwnPet : doYouHaveYourOwnPet,
        yourPet : yourPet,
        roomatePet : roomatePet,
        interestInput : interestInput      
    });
    console.log(roomateUser);
};

let comletRegUserBtn = document.getElementById("completeRegUser");
let sectionReg = document.querySelector(".section-reg");

comletRegUserBtn.addEventListener("click", function(){
    completeProfileUser()
})

function completeProfileUser(){
    console.log("yeey");
    userprofilepage.style.display = "block";   
     div10.style.display = "none";
     sectionReg.style.display = "none";
    var file = document.querySelector('#prikaci').files[0];
     const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    
    async function LoadProfilePicture() {
       const file = document.querySelector('#prikaci').files[0];
    //    console.log(await toBase64(file));
        roomateUser[0].picture = await toBase64(file);
       document.getElementById('profilePic').innerHTML = `<img  src=${roomateUser[0].picture} class="user-profile-card-img" alt="image">`;
    }
    LoadProfilePicture();

    document.getElementById('fullName').innerHTML = roomateUser[0].fullname;
    document.getElementById('sex').innerHTML = "маж";
    document.getElementById('age').innerHTML = roomateUser[0].age;
    document.getElementById('address').innerHTML = roomateUser[0].address1;
    document.getElementById('region').innerHTML = roomateUser[2].regionUser;
    document.getElementById('phoneNumber').innerHTML = roomateUser[0].phone;
    document.getElementById('email').innerHTML = roomateUser[0].email;

    //Preferences
    //Smoker
    let userIsSmokerVal1 = roomateUser[1].isSmoker1;
    //let roomMateSmokerVal1 = roomateUser[1].adress;

    if(userIsSmokerVal1){
      document.getElementById('isSmoker').innerHTML = "Пушач";
    }

    if(!userIsSmokerVal1){
      document.getElementById('isSmoker').innerHTML = "Не пушач";
    }

    // if(roomMateSmokerVal1){
    //   document.getElementById('roomMateSmoker').innerHTML = "Цимер е пушач";
    // }

    // if(!roomMateSmokerVal1){
    //   document.getElementById('roomMateSmoker').innerHTML = "Цимер не пушач";
    // }

    // // Pets
    let areYouAnimalLoverVal1 = roomateUser[1].areYouAnimalLover;
    let doYouHaveYourOwnPetVal1 = roomateUser[1].doYouHaveYourOwnPet;
    let userPetVal1 = roomateUser[1].yourPet;
    
    if(!areYouAnimalLoverVal1){
      document.getElementById('animalLover').innerHTML = "Љубител на миленичиња";
    }

    if(areYouAnimalLoverVal1){
      document.getElementById('animalLover').innerHTML = "Не е љубител на миленичиња";
    }

    if(doYouHaveYourOwnPetVal1){
      document.getElementById('havePet').innerHTML = "Има милениче";
      document.getElementById('userPet').innerHTML = userPetVal1;
    }

    if(!doYouHaveYourOwnPetVal1){
      document.getElementById('havePet').innerHTML = "Heма милениче";
    }


    // // Interests
    let interest = roomateUser[1].interestInput;
    
    document.getElementById('sport').innerHTML = interest;     
}


function da(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "block";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
};

function ne(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "block";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
}

function prodolzi3(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "block";
    div5.style.display = "block";
    div6.style.display = "none";
    div7.style.display = "none";

    let regionUser = document.getElementById('regionUser').value;

    roomateUser.push({
        regionUser: regionUser,
               
    });
    console.log(roomateUser);
    
}

function prodolzi3_1(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "block";
    div5.style.display = "block";
    div6.style.display = "none";
    div7.style.display = "none";

    let regionUser = document.getElementById('regionUser').value;

    roomateUser.push({
        regionUser: regionUser,               
    });
    console.log(roomateUser);
}

function izdavam(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "block";
    div7.style.display = "none";
}

function prodolzi4(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "block";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";

    let name = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime.text.input").value;
    let godini = document.getElementById("godini.text.input").value;
    let email = document.getElementById("email.text.input").value;
    let telefon = document.getElementById("telefon.input").value;
    let adresa = document.getElementById("adresa.input").value;

    apartmentUser.push({
        firstname: name,
        lastname: prezime,
        fullname: name + " " + prezime,
        godini: godini,
        email: email,
        telefon: telefon,
        adresa: adresa
    })
    console.log(apartmentUser);
}

function prodolzi5(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div7_1.style.display ="block";
    div7_2.style.display = "block";
    div8.style.display = "none";

    let opstina = document.getElementById("opstina").value
    let internet = document.getElementById("internet.1").value
    let net = document.getElementById("net").value
    let televizija_1 = document.getElementById("televizija.1").value
    let televizija = document.getElementById("televizija").value
    let kvadratura = document.getElementById("kvadratura").value
    let greenje = document.getElementById("greenje").value
    let broj_na_sobi = document.getElementById("broj.na.sobi").value
    let spalna_soba = document.getElementById("spalna.soba").value
    let spalnasoba_oprema = document.getElementById("spalnasoba.oprema").value
    let pushenje = document.getElementById("pushenje").value
    let kujna = document.getElementById("kujna1").value
    let kujna_oprema = document.getElementById("kujna.oprema").value
    let wc_oprema = document.getElementById("wc.oprema").value
    let dnevna_oprema = document.getElementById("dnevna.oprema").value

    apartmentUser.push({
        opstina: opstina,
        internet: internet,
        net: net,
        televizija1: televizija_1,
        televizija: televizija,
        kvadratura: kvadratura,
        greenje: greenje,
        broj_na_sobi: broj_na_sobi,
        spalna_soba: spalna_soba,
        spalnasoba_oprema: spalnasoba_oprema,
        pushenje: pushenje,
        kujna: kujna,
        kujna_oprema: kujna_oprema,
        wc_oprema:  wc_oprema,
        dnevna_oprema: dnevna_oprema,
    })
    console.log(apartmentUser);
}

function prodolzi6(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";
    div10.style.display ="block";
}

function izmeni(){
    reg.style.display = "block";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";
    div10.style.display ="none";
}

function nazad1(){
    reg.style.display = "none";
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";
    div10.style.display ="none";
}

function nazad2(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "block";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";
    div10.style.display ="none";
}

function nazad3_1(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";
    div10.style.display ="none";
}

function nazad3_2(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";
    div10.style.display ="none";
}

function nazad4(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "block";
    div6.style.display = "none";
    div7.style.display = "none";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";
    div10.style.display ="none";
}

function nazad5(){
    reg.style.display = "block";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";
    div10.style.display ="none";
    
}

function nazad6(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "block";
    div7.style.display = "none";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";
    div10.style.display ="none";
}

function nazad7(){
    reg.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div3_1.style.display = "none";
    div3_2.style.display = "none";
    div4.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "block";
    div7_1.style.display ="none";
    div7_2.style.display = "none";
    div8.style.display = "none";
    div10.style.display ="none";
}

let slider1 = document.getElementById("myRange1");
let output1 = document.getElementById("value1");

let slider2 = document.getElementById("myRange2");
let output2 = document.getElementById("value2");

let slider3 = document.getElementById("myRange3");
let output3 = document.getElementById("value3");

let slider4 = document.getElementById("myRange4");
let output4 = document.getElementById("value4");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;

slider1.oninput = function(){
    output1.innerHTML = this.value;
}

slider1.addEventListener("mousemove", function(){
    let x = slider1.value;
    let color = 'linear-gradient(90deg, rgb(128,0,128)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider1.style.background = color;
});

slider2.oninput = function(){
    output2.innerHTML = this.value;
}

slider2.addEventListener("mousemove", function(){
    let x = slider2.value;
    let color = 'linear-gradient(90deg, rgb(128,0,128)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider2.style.background = color;
});

slider3.oninput = function(){
    output3.innerHTML = this.value;
}

slider3.addEventListener("mousemove", function(){
    let x = slider3.value;
    let color = 'linear-gradient(90deg, rgb(128,0,128)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider3.style.background = color;
});

slider4.oninput = function(){
    output4.innerHTML = this.value;
}

slider4.addEventListener("mousemove", function(){
    let x = slider4.value;
    let color = 'linear-gradient(90deg, rgb(128,0,128)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider4.style.background = color;
});


let apart_profile_page = document.querySelector(".apartment-profile-container-body");


let complete_profile_btn = document.getElementById("completeApartbtn");

function completeProfile(){
    console.log("yeey");
    apart_profile_page.style.display = "block";
    sectionReg.style.display = "none";   
     div7_1.style.display = "none";
     addDataFromRegForm(apartmentUser) 
}

let fullName1 = document.getElementById("fullName1");
let region1 = document.getElementById("region1");
let price1 = document.getElementById("price1");
let area1 = document.getElementById("area1");
let phoneNumber1 = document.getElementById("phoneNumber1");
var file1 = document.querySelector('#prikaci').files[0];
     const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
async function LoadApartmentPicture() {
    const file1 = document.querySelector('#prikaci1').files[0];
    const file2 = document.querySelector('#prikaci1').files[1];
    const file3 = document.querySelector('#prikaci1').files[2];
     console.log(await toBase64(file1));
 apartmentUser[0].picture = await toBase64(file1);
 apartmentUser[1].picture = await toBase64(file2);
 apartmentUser[2].picture = await toBase64(file3);
    document.getElementById('pic1').innerHTML = `<img  src=${apartmentUser[0].picture} class="user-profile-card-img" alt="image">`;
    document.getElementById('pic1').innerHTML = `<img  src=${apartmentUser[1].picture} class="user-profile-card-img" alt="image">`;
    document.getElementById('pic1').innerHTML = `<img  src=${apartmentUser[2].picture} class="user-profile-card-img" alt="image">`;
 }
 LoadApartmentPicture();
function addDataFromRegForm(apartmentUser){
    fullName1.innerHTML = apartmentUser[0].fullname;
    region1.innerHTML = apartmentUser[1].opstina;
    //price1.innerHTML = apartmentUser[0].price;
    area1.innerHTML = apartmentUser[1].kvadratura;
} 




function kompletiraj(){
    // account_object
    // document.getElementById('prikazi_ime').innerHTML(account_object.firstname)
}