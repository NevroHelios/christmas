const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
setupFireworks()

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setupFireworks() {
  let particles = [];
  const startTime = new Date().getTime();
  const startX = random(50, canvas.width-50);
  const startY = random(50, canvas.height-50);
  const colour = '#'+Math.random().toString(16).substr(2,6);
  const time = random(500,1500);
  let alpha = 1;
  drawFireworks();
  
  function drawFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let particle = {x: startX, y: startY, xVel: random(-5,5), yVel: random(-5,5)}
    particles.push(particle);
      
    for(let p = 0; p < particles.length; p++){
      particle = particles[p];
      ctx.fillStyle = colour;
      ctx.globalAlpha = alpha;
      ctx.fillRect(particle.x, particle.y, 5, 5);
      particle.x += particle.xVel;
      particle.y += particle.yVel;
    }
    
    if(new Date().getTime() - startTime < time){
      if(new Date().getTime() - startTime < time + 100){
        alpha -= 0.01;
      }
      window.requestAnimationFrame(drawFireworks);  
    } else{
      setupFireworks();
    }
  }
}