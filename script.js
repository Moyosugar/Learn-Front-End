// Select hamburger menu and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the navigation menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Animate hamburger lines for better UX
  hamburger.classList.toggle('toggle');
});
