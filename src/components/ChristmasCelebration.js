import React, { useEffect } from 'react';
import './ChristmasCelebration.css';

function ChristmasCelebration() {
  useEffect(() => {
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

    function handleClick(event) {
      event.stopPropagation(); // Prevents snowballs when button is clicked
      window.location.href = 'home-page/index.html';

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

    document.getElementById('explore-btn').addEventListener('click', handleClick);
    document.addEventListener('mousemove', createSnowballOnMove);

    return () => {
      document.getElementById('explore-btn').removeEventListener('click', handleClick);
      document.removeEventListener('mousemove', createSnowballOnMove);
    };
  }, []);

  return (
    <>
      <div className="buttons-container">
        <button id="about-btn" className="button">About</button>
        <button id="explore-btn" className="button">Explore</button>
      </div>
      <main>
        <section className="home">
          <h1>Welcome to Our Christmas Celebration!</h1>
          <p>Join us in spreading the joy and warmth of the holiday season.</p>
        </section>
      </main>
    </>
  );
}

export default ChristmasCelebration;
