document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        // Toggle the 'active' class on both hamburger and menu
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});