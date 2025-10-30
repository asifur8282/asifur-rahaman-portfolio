document.addEventListener("DOMContentLoaded", () => {
    // Section fade-in animation (existing code)
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    // Dark mode toggle (existing code)
    const darkToggle = document.getElementById('darkModeToggle');
    const darkIcon = document.getElementById('darkModeIcon');
    const darkText = document.getElementById('darkModeText');

    function setDarkMode(isDark) {
        document.body.classList.toggle('dark-mode', isDark);
        if (isDark) {
            darkIcon.textContent = '☀️';
            darkText.textContent = 'Light Mode';
        } else {
            darkIcon.textContent = '🌙';
            darkText.textContent = 'Dark Mode';
        }
    }
    const darkPref = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(darkPref);
    darkToggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-mode');
        setDarkMode(isDark);
        localStorage.setItem('dark-mode', isDark);
    });

    // --- Location Icon Animation and Text Display ---
    const contactIconsContainer = document.querySelector('.contact-icons'); 
    const locationIconWrapper = document.getElementById('locationIconWrapper');
    
    let hoverEnterTimeout; 
    let hoverLeaveTimeout; 

    function applyHoverAnimations() {
        contactIconsContainer.classList.add('animate-wrap'); 
        locationIconWrapper.classList.add('animate-hover'); 
    }

    function resetAnimations() {
        contactIconsContainer.classList.remove('animate-wrap'); 
        locationIconWrapper.classList.remove('animate-hover'); 
    }

    if (locationIconWrapper) {
        locationIconWrapper.addEventListener('mouseenter', () => {
            clearTimeout(hoverLeaveTimeout); 
            clearTimeout(hoverEnterTimeout); 

            hoverEnterTimeout = setTimeout(() => {
                applyHoverAnimations();
            }, 1000); 
        });

        locationIconWrapper.addEventListener('mouseleave', () => {
            clearTimeout(hoverEnterTimeout); 

            hoverLeaveTimeout = setTimeout(() => {
                resetAnimations();
            }, 3500); 
        });
    }
});