// Call JSON
fetch('https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/users.json')
  .then(response => response.json())
  .then(data => console.log(data));

// NAV-BAR Functionality
// Get the container element
let navBarLink = document.getElementById("nav-bar-link");

// Get all links with class="nav-bar-links" inside the container
let navBarLinks = navBarLink.getElementsByClassName("nav-bar-links");

// Loop through the nav-bar-links and add the active class to the current/clicked button
for (let i = 0; i < navBarLinks.length; i++) {
  navBarLinks[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}



