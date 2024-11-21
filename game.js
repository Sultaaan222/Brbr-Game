
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = { x: 400, y: 300, size: 20, color: 'blue' };
let target = { x: Math.random() * 800, y: Math.random() * 600, size: 15, color: 'red' };
let score = 0;

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
    ctx.fill();

    // Draw target
    ctx.fillStyle = target.color;
    ctx.beginPath();
    ctx.arc(target.x, target.y, target.size, 0, Math.PI * 2);
    ctx.fill();

    // Draw score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 20);

    requestAnimationFrame(gameLoop);
}

// Handle player movement
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    player.x = e.clientX - rect.left;
    player.y = e.clientY - rect.top;

    // Check collision
    const dx = player.x - target.x;
    const dy = player.y - target.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < player.size + target.size) {
        score++;
        target.x = Math.random() * (canvas.width - target.size * 2) + target.size;
        target.y = Math.random() * (canvas.height - target.size * 2) + target.size;
    }
});

// Start game loop
gameLoop();
