function setTheme(themeName) {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const themeIcon = document.getElementById('theme');
    
    localStorage.setItem('theme', themeName);
    if (themeName === 'dark') {
        themeStylesheet.setAttribute('href', 'blogs-dark.css');
        themeIcon.src = '/assests/sun.png'; // Change to sun icon for dark mode
    } else {
        themeStylesheet.setAttribute('href', 'blogs.css');
        themeIcon.src = '/assests/moon.png'; // Change to moon icon for light mode
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
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#blogs'),
        smooth: true
    });
})();