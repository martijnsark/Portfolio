// JavaScript for the Cookie Banner
document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookie");

    // Function to remove the cookie banner
    function removeCookieBanner() {
        cookieBanner.remove(); // Remove the banner from the DOM
    }

    // Check if the user has already accepted cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block"; // Show the banner if cookies are not accepted
    }

    // Event listener for the "Accept" button
    acceptButton.addEventListener("click", function () {
        removeCookieBanner(); // Remove the banner from the DOM
        // Set a local storage flag to remember that the user accepted cookies
        localStorage.setItem("cookiesAccepted", "true");
    });
});