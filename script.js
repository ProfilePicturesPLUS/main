// script.js

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');
    
    mobileMenuButton.addEventListener('click', function() {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('open');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ Accordion Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(a => {
            a.style.display = 'none';
        });
        
        // Toggle the clicked answer
        answer.style.display = isVisible ? 'none' : 'block';
    });
});

// Lazy Load Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0.01
    };

    const onIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(onIntersection, config);

    images.forEach(image => {
        if (image.dataset.src) {
            observer.observe(image);
        }
    });
});
