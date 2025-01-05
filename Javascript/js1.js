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
  
  function toggleDropdown(id) {
    // Get all dropdowns
    const dropdowns = document.querySelectorAll('.dropdown-content');
    
    // Close all dropdowns except the one being clicked
    dropdowns.forEach(dropdown => {
        if (dropdown.id !== id) {
            dropdown.style.display = 'none';
        }
    });

    // Toggle the visibility of the clicked dropdown
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Optional: Close dropdowns when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
};