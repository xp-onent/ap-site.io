/*
// JavaScript to toggle between dark and light modes
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme');
    const themeStylesheet = document.querySelector('.theme-stylesheet');

    // Paths for dark and light mode stylesheets and icons
    const darkModeStylesheet = "{{ '/assests/post-dark.css' | relative_url }}";
    const lightModeStylesheet = "{{ '/assests/post.css' | relative_url }}" // Update with your light mode stylesheet path
    const moonIcon = '{{ "/assests/moon.png" | relative_url }}';
    const sunIcon = '{{ "/assests/sun.png" | relative_url }}'; // Update with your light mode icon path

    // Function to toggle theme
    const toggleTheme = () => {
        if (themeStylesheet.href.includes('post-dark.css')) {
            // Switch to light mode
            themeStylesheet.href = lightModeStylesheet;
            themeBtn.src = sunIcon;
        } else {
            // Switch to dark mode
            themeStylesheet.href = darkModeStylesheet;
            themeBtn.src = moonIcon;
        }
    };

    // Attach click event listener
    themeBtn.addEventListener('click', toggleTheme);
});
*/