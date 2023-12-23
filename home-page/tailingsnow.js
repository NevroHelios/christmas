// Parameters
const distanceBetween = 15;
const sfScaleStartFrom = 0.4;
const sfScaleStartTo = 0.9;
const sfScaleEndFrom = 0.4;
const sfScaleEndTo = 0.9;

// Snowflake spawn offset (+ and - is randomized so don't put negative values)
const spawnOffsetXFrom = 5;
const spawnOffsetXTo = 10;
const spawnOffsetYFrom = 5;
const spawnOffsetYTo = 10;

// Snowflake vertical movement limit
const movY = 100;

// Snowflake horizontal movement limits (+ and - is randomized so don't put negative values)
const movXFrom = 10;
const movXTo = 30;

// Snowflake rotation (+ and - is randomized so don't put negative values)
const rotYFrom = 100;
const rotYTo = 500;

const animationTemplate = `
@keyframes snow-animation-INDEX {
  0% {
    opacity: 1;
    transform: scale(STARTSCALE);
  }
  100% {
    opacity: 0;
    transform: scale(ENDSCALE) translateY(MOVYpx) translateX(MOVXpx) rotateY(ROTYdeg);
  }
}
`;
const snowflakeContainer = document.getElementById('snowflake-container');
let lastX = -100;
let lastY = -100;

createSnowflakeAnimations();

function calculatePoints(startX, startY, endX, endY, distance) {
  const totalDistance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  const stepX = (endX - startX) / totalDistance * distance;
  const stepY = (endY - startY) / totalDistance * distance;
  const points = [];

    for (let i = 1; i <= (totalDistance/distance); i += 1) {
        const x = startX + stepX * i;
        const y = startY + stepY * i;
        points.push({ x, y });
    }
 
    // Adding the final endpoint to ensure it's included
    points.push({ x: endX, y: endY });
 
    return points;
}


function updatePosition(e){
    const x = e.clientX + window.scrollX;
  const y = e.clientY + window.scrollY;

  const distance = Math.sqrt((x - lastX) ** 2 + (y - lastY) ** 2);
  if (distance > distanceBetween) {
    if((distance/distanceBetween)> 2){
      const points = calculatePoints(lastX,lastY, x, y, distanceBetween);
      for(let p of points){
        createSnowflake(p.x, p.y);
      }
    }else{
      createSnowflake(x,y);
    }
    lastX = x;
    lastY = y;
  }  
}

document.addEventListener('mousemove', (e) => {
  updatePosition(e);
});

function createSnowflake(x, y) { 
  const snowflake = document.createElement('i');
  const animation = 'snow-animation-' + getRandomWhole(0,99);
  const offsetX = (getRandomWhole(1,2)%2==0 ? 1 : -1)*getRandomWhole(spawnOffsetXFrom,spawnOffsetXTo);
  const offsetY = (getRandomWhole(1,2)%2==0 ? 1 : -1)*getRandomWhole(spawnOffsetYFrom,spawnOffsetYTo);

  
  snowflake.style.top = (y+offsetY) +'px';
  snowflake.style.left = (x+offsetX)+'px';
  snowflake.style.animationName = animation;
  snowflake.classList.add('fas', 'fa-snowflake', 'snowflake');

  snowflakeContainer.appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, 1000);

}

function createSnowflakeObject(){
  const MOVX = (getRandomWhole(1,2)%2==0 ? 1 : -1)*getRandomWhole(movXFrom,movXTo);
  const MOVY = movY;
  const STARTSCALE = getRandom(sfScaleStartFrom,sfScaleStartTo);
  const ENDSCALE = getRandom(sfScaleEndFrom,sfScaleEndTo);
  const ROTY = (getRandomWhole(1,2)%2==0 ? 1 : -1)*getRandomWhole(rotYFrom,rotYTo);
  return ({
    STARTSCALE: STARTSCALE,
    ENDSCALE: ENDSCALE,
    MOVX: MOVX,
    MOVY: MOVY,
    ROTY: ROTY
  });
}

function createSnowflakeAnimations(){
  
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  let style = '';
  for(let i =0; i<100; i++){
    let animation = animationTemplate;
    const obj = createSnowflakeObject();
    style += '\n' + animation
    .replace('ENDSCALE', obj.ENDSCALE)
      .replace('STARTSCALE', obj.STARTSCALE)
      .replace('INDEX', i)
      .replace('MOVY', obj.MOVY)
      .replace('STARTMOVZ', obj.STARTMOVZ)
      .replace('ENDMOVZ', obj.ENDMOVZ)
      .replace('MOVX', obj.MOVX)
      .replace('ROTY', obj.ROTY);
  }
  styleElement.innerHTML = style;
  document.getElementsByTagName('head')[0].appendChild(styleElement);
}

function getRandomWhole(from,to){
  return Math.floor(Math.random() * (to-from+1)) + from;
}

function getRandom(from, to) {
  return Math.random() * ( to - from) + from;
}

function getRandomSize() {
  const sizes = [0.6, 0.8, 1];
  return sizes[Math.floor(Math.random() * sizes.length)];
}
