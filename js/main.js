// main.js

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-dark-mode");

    if (toggleButton) {
        // Check for saved mode in localStorage
        if (localStorage.getItem("dark-mode") === "enabled") {
            document.body.classList.add("dark-mode");
            toggleButton.textContent = "🌞"; // Switch to light mode icon
        }

        toggleButton.addEventListener("click", function() {
            if (document.body.classList.contains("dark-mode")) {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("dark-mode", "disabled");
                toggleButton.textContent = "🌙"; // Switch to dark mode icon
            } else {
                document.body.classList.add("dark-mode");
                localStorage.setItem("dark-mode", "enabled");
                toggleButton.textContent = "🌞"; // Switch to light mode icon
            }
        });
    } else {
        console.log("Toggle button not found");
    }
});
