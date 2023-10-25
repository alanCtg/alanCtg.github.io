// Function to navigate to page
function navigateToPage(page) {
    window.location.href = page;
}

// Get the current page URL
const currentPage = window.location.href;

// Get all buttons
const buttons = document.querySelectorAll("button");

// Add click event listener to handle button clicks
document.querySelector(".partbtn").addEventListener("click", function(event) {
    const targetButton = event.target;

    // Check if the clicked element is a button
    if (targetButton.tagName === "BUTTON") {
        const targetPage = targetButton.getAttribute("data-page");

        if (currentPage.endsWith(targetPage)) {
            navigateToPage("index.html");
        }else {
	    navigateToPage(targetPage);	    
	}
    }
});


// Check current page and change the height of main in css
document.addEventListener("DOMContentLoaded", function() {
    const mainDiv = document.querySelector("main");

    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop(); 

    if (currentPage === "index.html") {
        mainDiv.style.height = "100vh";
    } else {
        mainDiv.style.height = "100%";
    }
});