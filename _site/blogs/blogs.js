function setTheme(themeName) {
    const themeStylesheet = document.getElementById('stylesheet');
    const desktopThemeIcon = document.getElementById('theme');
    const mobileThemeIcon = document.getElementById('theme-mobile');

    localStorage.setItem('theme', themeName);

    if (themeName === 'dark') {
        themeStylesheet.setAttribute('href', 'blogs-dark.css');
        if (desktopThemeIcon) desktopThemeIcon.src = '../assests/sun.png'; // Change to sun icon for dark mode
        if (mobileThemeIcon) mobileThemeIcon.src = '../assests/sun.png';   // Change to sun icon for dark mode
    } else {
        themeStylesheet.setAttribute('href', 'blogs.css');
        if (desktopThemeIcon) desktopThemeIcon.src = '../assests/moon.png'; // Change to moon icon for light mode
        if (mobileThemeIcon) mobileThemeIcon.src = '../assests/moon.png';   // Change to moon icon for light mode
    }
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// Add event listeners for both desktop and mobile theme buttons
const desktopThemeButton = document.getElementById('theme-btn');
const mobileThemeButton = document.getElementById('theme-mobile-btn'); // Assuming `theme-mobile-btn` wraps the mobile theme toggle

if (desktopThemeButton) {
    desktopThemeButton.addEventListener('click', toggleTheme);
}

if (mobileThemeButton) {
    mobileThemeButton.addEventListener('click', toggleTheme);
}

// Initial theme setup
(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
})();

function truncateBlogTitles() {
    const blogTitles = document.querySelectorAll('.blog-card h3');

    blogTitles.forEach((title) => {
        const originalText = title.getAttribute('data-original-text');

        if (window.innerWidth <= 768) { // Mobile layout
            if (!originalText) {
                // Save the original text if not already saved
                title.setAttribute('data-original-text', title.textContent);
            }

            if (title.textContent.length > 26) {
                title.textContent = title.textContent.slice(0, 26) + '...';
            }
        } else if (originalText) {
            // Restore the original text for desktop layout
            title.textContent = originalText;
        }
    });
}

// Run on load
truncateBlogTitles();

// Run on resize
window.addEventListener('resize', truncateBlogTitles);
