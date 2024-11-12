const themeButton = document.getElementById("theme");
const body = document.body;
//const themeStylesheet = document.querySelector(".theme-stylesheet");

// Function to toggle theme
function toggleTheme() {
    // Check the current theme
    if (body.classList.contains("dark-mode")) {
        // Switch to light mode
        body.classList.remove("dark-mode");
        themeStylesheet.href = themeStylesheet.href.replace("dark.css", "post.css");
        localStorage.setItem("theme", "light"); // Save light theme preference
        themeButton.src = "/assests/moon.png"; // Change to moon icon (light mode)
    } else {
        // Switch to dark mode
        body.classList.add("dark-mode");
        themeStylesheet.href = themeStylesheet.href.replace("post.css", "dark.css");
        localStorage.setItem("theme", "dark"); // Save dark theme preference
        themeButton.src = "/assests/sun.png"; // Change to sun icon (dark mode)
    }
}

// Check localStorage for theme preference on page load
document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeStylesheet.href = themeStylesheet.href.replace("post.css", "dark.css");
        themeButton.src = "/assests/sun.png"; // Display sun icon in dark mode
    } else {
        body.classList.remove("dark-mode");
        themeStylesheet.href = themeStylesheet.href.replace("dark.css", "post.css");
        themeButton.src = "/assests/moon.png"; // Display moon icon in light mode
    }
});

// Add click event listener to the theme button
themeButton.addEventListener("click", toggleTheme);
