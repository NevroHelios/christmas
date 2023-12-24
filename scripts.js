// Get necessary elements
const aboutBtn = document.getElementById('about-btn');
const menuSection = document.getElementById('menu-section');
const overlay = document.getElementById('overlay');

// Function to toggle the menu section display and overlay
function toggleMenu() {
  menuSection.classList.toggle('active'); // Toggle the 'active' class
  overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
}

// Event listener for the "About" button click
aboutBtn.addEventListener('click', () => {
  toggleMenu();
  // Toggle blur effect for background
  document.body.classList.toggle('blur-background');
});

// Initially hide the menu section
menuSection.classList.remove('active');

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("explore-btn").addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents snowballs when button is clicked

    const urlParams = new URLSearchParams(window.location.search);
    const soundPreference = urlParams.get('sound');

    

  // Set musicFiles based on the user's sound preference
  if (soundPreference === 'withSound') {
    window.location.href = 'home-page/index.html?sound=withSound'
    console.log('hmm')
  } else {
    window.location.href = 'home-page/index.html?sound=withoutSound'
  }

    // window.location.href = 'home-page/index.html'

    const snowball = document.createElement('div');
    snowball.classList.add('snowball');
    const size = Math.random() * 20 + 10;
    const xPos = event.clientX - size / 2;
    const yPos = event.clientY - size / 2;
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;

    snowball.style.width = size + 'px';
    snowball.style.height = size + 'px';
    snowball.style.top = yPos + 'px';
    snowball.style.left = xPos + 'px';
    snowball.style.setProperty('--x', randomX + 'px');
    snowball.style.setProperty('--y', randomY + 'px');

    document.body.appendChild(snowball);

    setTimeout(() => {
      snowball.remove();
    }, 2000);
  });
  
  document.addEventListener('mousemove', createSnowballOnMove);
  
  function createSnowballOnMove(event) {
    const snowball = document.createElement('div');
    snowball.classList.add('snowball');
    const size = Math.random() * 20 + 10;
    const xPos = event.clientX - size / 2;
    const yPos = event.clientY - size / 2;
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;

    snowball.style.width = size + 'px';
    snowball.style.height = size + 'px';
    snowball.style.top = yPos + 'px';
    snowball.style.left = xPos + 'px';
    snowball.style.setProperty('--x', randomX + 'px');
    snowball.style.setProperty('--y', randomY + 'px');

    document.body.appendChild(snowball);

    setTimeout(() => {
      snowball.remove();
    }, 2000);
  }
});