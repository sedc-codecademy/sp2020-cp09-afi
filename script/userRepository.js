
let searchRoomates = document.getElementById("searchRoomates");
let userCards = document.getElementsByClassName("card card-one");
let cardsRoomateDiv = document.getElementById("cardsRoomate");
let searchRoomatesAndApartm = document.getElementById("searchRoomatesAndApart");




let RoomatesDb = {
    getAll: function() {
        fetch(
                "https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/users.json"
            )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                createUserCard(data, cardsRoomateDiv);

            })
            .catch(error => console.log(error));
    },
};

searchRoomates.addEventListener("click", function(){
    RoomatesDb.getAll();
});   

searchRoomatesAndApartm.addEventListener("click", function(){
    RoomatesDb.getAll();
    apartmentOwnersDb.getAll();
});   

function createUserCard(roomates, element) {
    element.innerHTML = '';
    for (const roomate of roomates) {
        let divCard = document.createElement('div');
        divCard.setAttribute("class", "card card-one");
        let headerCard = document.createElement('header');
        let divPicture = document.createElement('div');
        divPicture.setAttribute("class", "avatar");
        divPicture.innerHTML = `<img src="${roomate.user.image}">`;
        headerCard.appendChild(divPicture);
        let fullName = document.createElement('h3');
        fullName.innerHTML = `<h3>${roomate.user.fullName}</h3>`;
        let divInfo = document.createElement('div')
        divInfo.setAttribute("class", "desc");
        let p1 = document.createElement('p');
        p1.innerHTML = `${roomate.user.sex}, ${roomate.user.age} години`;
        divInfo.appendChild(p1);
        let p2 = document.createElement('p');
        p2.innerHTML = `${roomate.preferences.roomQuestions[0].region}`;
        divInfo.appendChild(p2);
        divCard.appendChild(headerCard);
        divCard.appendChild(fullName);
        divCard.appendChild(divInfo);
        element.appendChild(divCard);
    }
};

const database = firebase.database();
