const canvas = document.createElement("canvas");
canvas.id = "constellation-canvas";
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");
let stars = [];
const STAR_COUNT = 100;
const LINE_DISTANCE = 130;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      twinkleOffset: Math.random() * Math.PI * 2, 
    });
  }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const time = performance.now() / 1000;
  
    for (const star of stars) {
      
      const rawAlpha = 0.5 + 0.5 * Math.sin(time * 4 + star.twinkleOffset);
      const alpha = Math.pow(rawAlpha, 1.5); 
  
      ctx.beginPath();
      ctx.arc(star.x, star.y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.shadowBlur = 12; 
      ctx.shadowColor = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();
    }
  
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < LINE_DISTANCE) {
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / LINE_DISTANCE})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
    }
  }
  

function update() {
  for (const star of stars) {
    star.x += star.vx;
    star.y += star.vy;
    if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.vy *= -1;
  }
}

function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

resizeCanvas();
createStars();
animate();
window.addEventListener("resize", () => {
  resizeCanvas();
  createStars();
});

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
