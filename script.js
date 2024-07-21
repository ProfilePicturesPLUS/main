// script.js

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Mobile Menu Toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const isVisible = navLinks.classList.toggle('visible');
    document.getElementById('mobile-menu').setAttribute('aria-expanded', isVisible);
});
