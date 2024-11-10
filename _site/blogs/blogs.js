function setTheme(themeName) {
    const themeStylesheet = document.getElementById('stylesheet');
    const themeIcon = document.getElementById('theme');
    
    localStorage.setItem('theme', themeName);
    if (themeName === 'dark') {
        themeStylesheet.setAttribute('href', 'blogs-dark.css');
        themeIcon.src = '../assests/sun.png'; // Change to sun icon for dark mode
    } else {
        themeStylesheet.setAttribute('href', 'blogs.css');
        themeIcon.src = '../assests/moon.png'; // Change to moon icon for light mode
    }
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

document.getElementById('theme-btn').addEventListener('click', toggleTheme);

(function () {
    // Theme check
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
})();