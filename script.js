// --- HEADER SCROLL EFFECT ---
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- LIVE CLOCK SCRIPT ---
function startTime() {
    const today = new Date();
    const clockElement = document.getElementById('txt');
    if (clockElement) {
        clockElement.innerHTML = today.toLocaleString();
    }
    setTimeout(startTime, 1000);
}

// --- BACK TO TOP BUTTON SCRIPT ---
const toTopBtn = document.getElementById("toTopBtn");

// When the user scrolls, run a series of functions
window.onscroll = function() {
    scrollFunction();
    handleFadeInAnimation(); 
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if(toTopBtn) toTopBtn.style.display = "flex";
    } else {
        if(toTopBtn) toTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- FADE-IN ANIMATION ON SCROLL ---
function handleFadeInAnimation() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Distance from the bottom of the viewport to trigger the animation

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// --- INITIALIZE SCRIPTS ---
// Run functions when the page is fully loaded
window.addEventListener('load', () => {
    startTime();
    handleFadeInAnimation(); // Run once on load to show elements already in view
});