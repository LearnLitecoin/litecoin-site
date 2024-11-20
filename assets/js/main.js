document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle for mobile navigation (assuming you have a button to toggle a menu)
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('open');
        });
    }

    // Placeholder for custom JavaScript functionality
    // For example, if you want to add functionality like a price ticker, form validation, etc., you would add it here.
});
