// Snowfall effect code
const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.top = '-5px'; // Start snowflakes above the viewport
    const duration = 7 // Adjust duration for consistent falling speed
    snowflake.style.animation = `snowfall ${duration}s linear infinite`;
    document.body.appendChild(snowflake);
  
    setTimeout(() => {
      snowflake.remove();
    }, duration * 1000); // Adjust snowflake lifespan if needed
  };
  
  setInterval(createSnowflake, 500); // Adjust interval for snowflake generation
  