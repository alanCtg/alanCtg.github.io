// Function to navigate to page
function navigateToPage(page) {
    window.location.href = page;
}

// Function to disable and make a button transparent
function disableButton(button) {
    button.style.opacity = "0.5";  // Set opacity to 0.5 (making it transparent)
    button.disabled = true;       // Disable the button
}

// Get all buttons
const buttons = document.querySelectorAll("button");

// Add click event listener to handle button clicks
document.querySelector(".partbtn").addEventListener("click", function(event) {
    const targetButton = event.target;

    // Check if the clicked element is a button
    if (targetButton.tagName === "BUTTON") {
        const targetPage = targetButton.getAttribute("data-page");

        if (targetPage) {
            navigateToPage(targetPage);

            // Disable and make the clicked button transparent
            disableButton(targetButton);
        }
    }
});

