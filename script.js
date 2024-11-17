document.addEventListener('DOMContentLoaded', function () {
    const nightModeButtonDesktop = document.getElementById('theme');
    const nightModeButtonMobile = document.getElementById('theme-mobile');
    const styleSheet = document.getElementById('stylesheet');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme based on user preference
    if (userPrefersDark) {
        styleSheet.setAttribute('href', 'styles-dark.css');
        if (nightModeButtonDesktop) nightModeButtonDesktop.setAttribute('src', './assests/sun.png');
        if (nightModeButtonMobile) nightModeButtonMobile.setAttribute('src', './assests/sun.png');
    } else {
        styleSheet.setAttribute('href', 'styles.css');
        if (nightModeButtonDesktop) nightModeButtonDesktop.setAttribute('src', './assests/moon.png');
        if (nightModeButtonMobile) nightModeButtonMobile.setAttribute('src', './assests/moon.png');
    }

    // Function to toggle themes
    function toggleMode() {
        if (styleSheet.getAttribute('href') === 'styles.css') {
            styleSheet.setAttribute('href', 'styles-dark.css');
            if (nightModeButtonDesktop) nightModeButtonDesktop.setAttribute('src', './assests/sun.png');
            if (nightModeButtonMobile) nightModeButtonMobile.setAttribute('src', './assests/sun.png');
        } else {
            styleSheet.setAttribute('href', 'styles.css');
            if (nightModeButtonDesktop) nightModeButtonDesktop.setAttribute('src', './assests/moon.png');
            if (nightModeButtonMobile) nightModeButtonMobile.setAttribute('src', './assests/moon.png');
        }
        initializeScrollTrigger(); // Reinitialize GSAP scroll triggers if needed
    }

    // GSAP ScrollTrigger initialization
    function initializeScrollTrigger() {
        gsap.registerPlugin(ScrollTrigger);
        const iconPic = document.getElementById('icon-pic');
        if (iconPic) {
            gsap.set(iconPic, { opacity: 0 });

            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                if (section.id !== 'profile') {
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top center",
                        onEnter: () => {
                            if (section.id === 'about') {
                                gsap.to(iconPic, { opacity: 1, duration: 1, delay: 0.2 });
                            } else {
                                gsap.to(iconPic, { opacity: 1, duration: 0.2 });
                            }
                        },
                        onLeaveBack: () => {
                            if (section.id === 'about') {
                                gsap.to(iconPic, { opacity: 0, duration: 1, delay: 0.2 });
                            } else {
                                gsap.to(iconPic, { opacity: 1, duration: 0.2 });
                            }
                        },
                        markers: false
                    });
                } else {
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top top",
                        onEnterBack: () => gsap.to(iconPic, { opacity: 0, duration: 0.2 }),
                        markers: false
                    });
                }
            });
        } else {
            console.error("Element '#icon-pic' not found!");
        }
    }

    initializeScrollTrigger(); // Initial GSAP setup

    // Event listeners for both desktop and mobile buttons
    if (nightModeButtonDesktop) nightModeButtonDesktop.addEventListener('click', toggleMode);
    if (nightModeButtonMobile) nightModeButtonMobile.addEventListener('click', toggleMode);
});
