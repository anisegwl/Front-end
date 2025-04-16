 // Hamburger menu functionality
 document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');
  
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('show');
    }
  });
  
  // Close menu when clicking a menu item
  const navItems = navMenu.querySelectorAll('li');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navMenu.classList.remove('show');
    });
  });
});