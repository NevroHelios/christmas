// Toggle menu open/close on menu icon click
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});
