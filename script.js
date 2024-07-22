// script.js

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        button.parentElement.classList.toggle('active');
    });
});

// Mobile Menu Toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuButton = document.getElementById('mobile-menu');
    const isVisible = navLinks.classList.toggle('visible');
    menuButton.setAttribute('aria-expanded', isVisible.toString());
});
