// Animated starfield background
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.1
  });
}

function drawStars() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#fff';
  stars.forEach(star => {
    star.x -= star.speed;
    if (star.x < 0) star.x = width;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}
animate();

// Konami Code Easter Egg
const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let idx = 0;

document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (key === konami[idx].toLowerCase()) {
    idx++;
    if (idx === konami.length) {
      document.getElementById('easter').style.display = 'block';
      setTimeout(() => {
        document.getElementById('easter').style.display = 'none';
      }, 2000);
      idx = 0;
    }
  } else {
    idx = 0;
  }
});