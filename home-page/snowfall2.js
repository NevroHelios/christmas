document.addEventListener("DOMContentLoaded", function() {
    // Create snowflakes dynamically
    for (let i = 0; i < 50; i++) {
      createSnowflake();
    }
  });
  
  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(snowflake);
  
    // Remove snowflake after animation completes
    snowflake.addEventListener("animationiteration", function() {
      snowflake.remove();
      createSnowflake();
    });
  }
  