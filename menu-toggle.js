// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Header elements
  const header = document.getElementById('main-header');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');
  const dropdownItems = document.querySelectorAll('.has-dropdown');
  
  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Close menu when clicking overlay
  overlay.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
  
  // Handle dropdown menus on mobile
  dropdownItems.forEach(item => {
    const link = item.querySelector('a');
    
    link.addEventListener('click', function(e) {
if (window.innerWidth <= 1024) {
        e.preventDefault();
        item.classList.toggle('active');
      }
    });
  });
  
  // Shrink header on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Resize handling
  window.addEventListener('resize', function() {
if (window.innerWidth > 1024) {
      // Reset mobile menu when resizing to desktop
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
      
      // Reset any active dropdowns
      dropdownItems.forEach(item => {
        item.classList.remove('active');
      });
    }
  });
});
