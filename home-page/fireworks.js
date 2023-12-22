
document.addEventListener("DOMContentLoaded", function () {
  const fireworksContainer = document.getElementById("fireworks-container");

  function createFirework() {
    const firework = document.createElement("div");
    firework.className = "firework";
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    firework.style.left = `${xPos}px`;
    firework.style.top = `${yPos}px`;
    fireworksContainer.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 1500);
  }

  function launchFireworks() {
    setInterval(createFirework, 500);
  }

  launchFireworks();
});

