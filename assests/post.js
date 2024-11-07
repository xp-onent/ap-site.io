document.addEventListener('DOMContentLoaded', function() {
    const nightModeButton = document.getElementById('theme');
    const styleSheet = document.getElementById('stylesheet');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    function setDarkMode() {
        styleSheet.setAttribute('href', '/assests/post-dark.css');
        nightModeButton.setAttribute('src', '/assests/sun.png');
    }

    function setLightMode() {
        styleSheet.setAttribute('href', '/assests/post.css');
        nightModeButton.setAttribute('src', '/assests/moon.png');
    }

    if (userPrefersDark) {
        setDarkMode();
    } else {
        setLightMode();
    }

    function toggleMode() {
        if (styleSheet.getAttribute('href').includes('post.css')) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }

    nightModeButton.addEventListener('click', toggleMode);
});
