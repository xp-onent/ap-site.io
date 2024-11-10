document.addEventListener('DOMContentLoaded', function() {
    const nightModeButton = document.getElementById('theme');
    const styleSheet = document.getElementById('stylesheet');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    function setDarkMode() {
        styleSheet.setAttribute('href', "{{ '/assests/post-dark.css' | relative_url }}");
        nightModeButton.setAttribute('src', "{{ '/assests/sun.png' | relative_url }}");
    }

    function setLightMode() {
        styleSheet.setAttribute('href', "{{ '/assests/post.css' | relative_url }}");
        nightModeButton.setAttribute('src', "{{ '/assests/moon.png' | relative_url }}");
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

    if (nightModeButton) {
        nightModeButton.addEventListener('click', toggleMode);
    }
});