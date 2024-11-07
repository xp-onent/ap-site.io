document.addEventListener('DOMContentLoaded', function() {
    const nightModeButton = document.getElementById('theme');
    const styleSheet = document.getElementById('stylesheet');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if(userPrefersDark){
        styleSheet.setAttribute('href', 'styles-dark.css');
        nightModeButton.setAttribute('src', './assests/sun.png');
    }
    else{
        styleSheet.setAttribute('href', 'styles.css');
        nightModeButton.setAttribute('src', './assests/moon.png');
    }

    function toggleMode() {
        if (styleSheet.getAttribute('href') === 'styles.css') {
            styleSheet.setAttribute('href', 'styles-dark.css');
            nightModeButton.setAttribute('src', './assests/sun.png');
            initializeScrollTrigger();
        } else {
            styleSheet.setAttribute('href', 'styles.css');
            nightModeButton.setAttribute('src', './assests/moon.png');
            initializeScrollTrigger();
        }

    }

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

    initializeScrollTrigger();

    nightModeButton.addEventListener('click', toggleMode);
});