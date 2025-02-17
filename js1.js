/* Toggle between adding and removing the "responsive" class 
to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  function toggleDropdown(id) {   //function works only for the inputted id
    // Collect all element with class "dropdown-content"
    const dropdowns = document.querySelectorAll('.dropdown-content');
    
    // Changes display to none to all dropdowns except the one being clicked
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].id !== id) {
            dropdowns[i].style.display = 'none';
        }
    }

    // Toggle the visibility of the clicked dropdown 
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Close dropdowns when clicking somewhere on window (event.target.matches checks if clicked element has class "dropbutton")
window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = 'none';
        }
    }
};

//Contactform
      //If checkbox is checked, the questionsection is hidden and the bookingSection is not hidden. Else the bookingSession remains hidden
      const bookingCheckbox = document.getElementById("bookingCheckbox");
      const bookingSection = document.getElementById("bookingSection");
      const questionSection = document.getElementById("questionSection");

      bookingCheckbox.addEventListener("change", () => {
        if (bookingCheckbox.checked) {
          bookingSection.classList.remove("hidden");
          questionSection.classList.add("hidden");
        } else {
          bookingSection.classList.add("hidden");
          questionSection.classList.remove("hidden");
        }
      });

      //Handle form submission
      document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault(); //prevent website to reload
        alert("Thank you! We will get back at you as soon as we can!");
      });