document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            navToggle.classList.toggle('active'); // For hamburger animation
        });
    }

    // Current Year for Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Header Scroll Effect
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }

    // Intersection Observer for Scroll Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Optional: stop observing once animated
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        // Fallback for older browsers (simply make them visible)
        animatedElements.forEach(element => {
            element.classList.add('is-visible');
        });
    }

    // Active Navigation Link (Basic: based on current page URL)
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const currentPath = window.location.pathname.split("/").pop() || "index.html"; // Get current file name

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

});
