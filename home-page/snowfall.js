// Function to generate a random number within a range
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create snowballs falling animation
function createSnowball() {
  const snowball = document.createElement('div');
  snowball.classList.add('snowball');
  snowball.style.left = `${getRandom(0, window.innerWidth)}px`;
  document.getElementById('snowfall-container').appendChild(snowball);

  // Animate the snowball falling and decreasing opacity
  const animationDuration = getRandom(4, 8); // Adjust falling speed
  snowball.style.animation = `fall ${animationDuration}s linear forwards, fade 1s ${animationDuration - 1}s forwards`;

  // Remove snowball element when it reaches the bottom
  snowball.addEventListener('animationend', () => {
    snowball.remove();
  });
}

// Create multiple snowballs falling at random intervals
function generateSnowballs() {
  setInterval(createSnowball, 1000); // Adjust snowfall frequency
}

// Run the function when the content is loaded
window.addEventListener('load', generateSnowballs);