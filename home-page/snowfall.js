
const cnv = document.getElementsByClass("cnv");
const ctx = cnv.getContext("2d");

cnv.width = (window.innerWidth * 75) / 100;
cnv.width = (window.innerHeight * 75) / 100;

class Drop {
  constructor() {
    this.x = Math.random() * cnv.width;
    this.y = Math.random() * cnv.height;
    this.r = Math.random() * 4.5;
    this.v = Math.random() * 1.5;
  }

  make() {
    // Set snowball color to white
    ctx.fillStyle = "#ffffff"; // 

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    this.y += this.v * 0.5;
    if (this.y > cnv.height) {
      this.x = Math.random() * cnv.width;
      this.y = 0;
    }
  }
}

let drops = [];
for (let i = 0; i < 100; i++) drops.push(new Drop());
function animation() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  drops.forEach((drop) => {
    drop.make();
  });
  requestAnimationFrame(animation);
}
animation();
