const userId = document.getElementById('userID');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');
const name = document.getElementById('name');

const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    rootRef.child(userId.value).set({
        firstName : firstName.value,
        lastName : lastName.value,
        age : age.value,
    });
});

 database.ref('apartments').once('value').then(snapshot => {
    console.log(snapshot.val());
})



updateBtn.addEventListener("click", function(){
    
    snapshot.val();
});

function createName(apartments){
    
    for (const place of apartments){
        name.innerHTML = place
    }
}





// addBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     rootRef.child(userId.value).remove();
// });

// rootRef.orderByKey().on('value', snapshot => {
//     console.log(snapshot.val());
// });