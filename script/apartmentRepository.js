
let searchApartments = document.getElementById("searchApartments");
let apartmentCards = document.getElementsByClassName("card card-one");
let cardsApartmentDiv = document.getElementById("cardsAparments");



let apartmentOwnersDb = {
    getAll: function() {
        fetch(
                "https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/AparmentsOwners.json"
            )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                createApartmentCard(data, cardsApartmentDiv);

            })
            .catch(error => console.log(error));
    },
};

searchApartments.addEventListener("click", function(){
    apartmentOwnersDb.getAll();
});   


function createApartmentCard(places, element) {
    element.innerHTML = '';    
    for (const place of places) {
        let divCard = document.createElement('div');
        divCard.setAttribute("class", "card card-one");
        let headerCard = document.createElement('header');
        let divPicture = document.createElement('div');
        divPicture.setAttribute("class", "avatar");
        divPicture.innerHTML = `<img src="${place.pictures[2]}">`;
        headerCard.appendChild(divPicture);
        let region = document.createElement('h3');
        region.innerHTML = `<h3>${place.apartment[0].region}</h3>`;
        let divInfo = document.createElement('div')
        divInfo.setAttribute("class", "desc");
        let p1 = document.createElement('p');
        p1.innerHTML = `${place.apartment[0].area}, ${place.apartment[0].price} години`;
        divInfo.appendChild(p1);
        let p2 = document.createElement('p');
        p1.innerHTML = `${place.apartment[0].area}, ${place.apartment[0].price} еур`;
        divInfo.appendChild(p2);
        divCard.appendChild(headerCard);
        divCard.appendChild(region);
        divCard.appendChild(divInfo);
        element.appendChild(divCard);
    }
};
