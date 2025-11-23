/* --- CONFIGURACIÓN --- */
let CONFIG = {
    width: 400,   
    height: 500,  
    ballRadius: 35, // Tamaño (70px ancho)
    gravity: 0.5,
    friction: 0.5,
    bounce: 0.1,
    baseSpawnRate: 3500, // <--- CAMBIO: Ahora son 3.5 segundos (antes 2500)
    limitLineY: 90,
    freezeDuration: 5000 
};

/* --- VARIABLES --- */
let balls = [];
let score = 0;
let targetNumber = 0;
let currentSum = 0;
let gameActive = false;
let lastTime = 0;
let spawnTimer = 0;
let difficultyTimer = 0;
let currentSpawnRate = CONFIG.baseSpawnRate;
let animationFrameId; 
let dangerTimer = 0;
let isFrozen = false; 

// Referencias DOM
const container = document.getElementById('game-container');
const gameWrapper = document.getElementById('game-wrapper');
const targetDisplay = document.getElementById('target-number');
const scoreDisplay = document.getElementById('score');
const currentSumDisplay = document.getElementById('current-sum-display');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlay-title');
const overlayMsg = document.getElementById('overlay-msg');
const startBtn = document.getElementById('start-btn');

// --- SISTEMA DE SONIDO ---
const sndClick = document.getElementById('snd-click');
const sndMatch = document.getElementById('snd-match');
const sndLose = document.getElementById('snd-lose');
const sndExplosionEl = document.getElementById('snd-explosion');
const sndIceEl = document.getElementById('snd-ice');

// Fallbacks de sonido
const sndExplosion = sndExplosionEl || sndLose; 
const sndIce = sndIceEl || sndMatch;      

startBtn.addEventListener('click', startGame);

window.addEventListener('resize', () => {
    if(!gameActive) calculateDimensions();
});

function calculateDimensions() {
    const rect = gameWrapper.getBoundingClientRect();
    CONFIG.width = rect.width;
    CONFIG.height = rect.height;
    
    if (rect.width < 350) {
        CONFIG.ballRadius = 30; 
    } else {
        CONFIG.ballRadius = 35; 
    }
}

function startGame() {
    calculateDimensions();
    
    gameActive = true;
    score = 0;
    currentSum = 0;
    balls = [];
    currentSpawnRate = CONFIG.baseSpawnRate;
    spawnTimer = 0;
    difficultyTimer = 0;
    dangerTimer = 0;
    isFrozen = false;
    CONFIG.gravity = 0.5;
    
    // --- LÓGICA DE TEMA ---
    gameWrapper.className = 'game-wrapper'; // Limpia clases anteriores
    currentThemeIndex = 0;
    changeTheme(); // <--- LLAMADA INICIAL
    // --- FIN LÓGICA DE TEMA ---

    const oldBalls = document.querySelectorAll('.ball');
// ... (resto de la función)
    oldBalls.forEach(b => b.remove());
    
    document.getElementById('limit-line').style.borderTop = "3px dashed #ff4757";
    container.classList.remove('frozen-effect');

    updateHUD();
    overlay.style.display = 'none';
    setNewTarget();

    lastTime = performance.now();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(gameLoop);
}

function gameLoop(timestamp) {
    if (!gameActive) return;
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // DIFICULTAD
    difficultyTimer += deltaTime;
    if (difficultyTimer > 10000) { 
        increaseDifficulty();
        difficultyTimer = 0;
    }

    // SPAWN
    if (!isFrozen) {
        spawnTimer += deltaTime;
        if (spawnTimer > currentSpawnRate) {
            spawnBalls();
            spawnTimer = 0;
        }
    }

    updatePhysics();
    renderBalls();
    checkGameOver();

    animationFrameId = requestAnimationFrame(gameLoop);
}

/* --- CORRECCIÓN MATEMÁTICA AQUÍ --- */
function getBallValue() {
    // REGLA: Los números < 5 deben salir el DOBLE de veces que los >= 5.
    // Menores (1,2,3,4): Ponemos 3 fichas de cada uno (Total 12 fichas)
    // Mayores (5,6,7,8,9,10): Ponemos 1 ficha de cada uno (Total 6 fichas)
    // 12 es el doble de 6. Proporción 2:1 exacta.
    const pool = [
        1, 1, 1, 
        2, 2, 2, 
        3, 3, 3, 
        4, 4, 4, 
        5, 6, 7, 8, 9 // hasta el 9
    ];
    return pool[Math.floor(Math.random() * pool.length)];
}

function setNewTarget() {
    // Objetivo a sumar:
    // Menores a 5 (3,4,5) = Peso 1
    // Mayores a 5 (6,7,8,9,10) = Peso 2
    const targetPool = [
        3, 4, 5,             
        6, 6, 7, 7, 8, 8, 9, 9, 10, 10 
    ];
    targetNumber = targetPool[Math.floor(Math.random() * targetPool.length)];
    
    targetDisplay.style.transform = "scale(1.5)";
    setTimeout(() => targetDisplay.style.transform = "scale(1)", 200);
    updateHUD();
}

function spawnBalls() {
    createBall();
    setTimeout(() => {
        if(gameActive && !isFrozen) createBall();
    }, 500);
}

function createBall() {
    // --- CORRECCIÓN DE PREMIOS ---
    // Antes 5% cada uno (Total 10%). Ahora 2.5% cada uno (Total 5%).
    // Esto reduce a la mitad la aparición de bombas y hielo.
    let type = 'normal';
    const rand = Math.random();
    
    if (rand < 0.025) type = 'bomb';       // 2.5% Probabilidad
    else if (rand < 0.050) type = 'ice';  // 2.5% Probabilidad

    const val = getBallValue(); 
    const ballEl = document.createElement('div');
    ballEl.classList.add('ball');
    
    ballEl.style.width = (CONFIG.ballRadius * 2) + 'px';
    ballEl.style.height = (CONFIG.ballRadius * 2) + 'px';
    ballEl.style.fontSize = (CONFIG.ballRadius * 0.8) + 'px';

    if (type === 'normal') {
        const imgName = val < 10 ? `0${val}.png` : `${val}.png`;
        const img = new Image();
        img.src = imgName;
        img.onload = () => ballEl.style.backgroundImage = `url('${imgName}')`;
        img.onerror = () => {
            ballEl.classList.add('fallback');
            ballEl.style.backgroundColor = getRandomColor();
            ballEl.innerText = val; 
        };
    } else if (type === 'bomb') {
        ballEl.classList.add('bomb');
        ballEl.innerText = ""; 
    } else if (type === 'ice') {
        ballEl.classList.add('ice');
        ballEl.innerText = ""; 
    }

    const minX = CONFIG.ballRadius + 10; 
    const maxX = CONFIG.width - CONFIG.ballRadius - 10;
    const startX = minX + (Math.random() * (maxX - minX));
    const startY = - (CONFIG.ballRadius * 2.5);

    const ball = {
        id: Math.random().toString(36),
        element: ballEl,
        val: val,
        type: type,
        x: startX,
        y: startY,
        vx: 0,
        vy: 2,
        radius: CONFIG.ballRadius,
        selected: false,
    };

    ballEl.addEventListener('click', (e) => {
        e.preventDefault();
        handleBallClick(ball);
    });
    ballEl.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleBallClick(ball);
    });

    container.appendChild(ballEl);
    balls.push(ball);
}

function handleBallClick(ball) {
    if (!gameActive) return;

    if (ball.type === 'bomb') {
        activateBomb(ball);
        return;
    }
    if (ball.type === 'ice') {
        activateIce(ball);
        return;
    }

    playSound(sndClick);
    ball.selected = !ball.selected;
    ball.element.classList.toggle('selected', ball.selected);
    calculateSum();
}

function activateBomb(bombBall) {
    playSound(sndExplosion); 
    
    bombBall.element.style.transform = "scale(2)";
    bombBall.element.style.opacity = "0";

    const explosionRadius = CONFIG.ballRadius * 2.8; 

    const ballsToDestroy = balls.filter(b => {
        if (b === bombBall) return false;
        const dx = b.x - bombBall.x;
        const dy = b.y - bombBall.y;
        return Math.sqrt(dx*dx + dy*dy) < explosionRadius;
    });

    ballsToDestroy.forEach(b => {
        b.element.style.transform = "scale(0.5) rotate(360deg)";
        setTimeout(() => b.element.remove(), 200);
        const idx = balls.indexOf(b);
        if (idx > -1) balls.splice(idx, 1);
    });

    setTimeout(() => bombBall.element.remove(), 100);
    const bombIdx = balls.indexOf(bombBall);
    if (bombIdx > -1) balls.splice(bombIdx, 1);

    calculateSum();
}

function activateIce(iceBall) {
    playSound(sndIce); 
    
    isFrozen = true;
    container.classList.add('frozen-effect'); 

    iceBall.element.style.transform = "scale(0)";
    setTimeout(() => iceBall.element.remove(), 200);
    const idx = balls.indexOf(iceBall);
    if (idx > -1) balls.splice(idx, 1);

    setTimeout(() => {
        isFrozen = false;
        container.classList.remove('frozen-effect');
    }, CONFIG.freezeDuration);
}

function calculateSum() {
    const selected = balls.filter(b => b.selected && b.type === 'normal');
    currentSum = selected.reduce((acc, b) => acc + b.val, 0);
    updateHUD();
    
    if (currentSum === targetNumber && selected.length >= 2) {
        handleMatch(selected);
    }
}

function handleMatch(selectedBalls) {
    playSound(sndMatch); 
    score++;
    
    // Calcular el punto medio de la suma para la explosión de confeti
    let avgX = 0;
    let avgY = 0;
    selectedBalls.forEach(b => {
        avgX += b.x;
        avgY += b.y;
    });
    avgX /= selectedBalls.length;
    avgY /= selectedBalls.length;

    // --- LLAMADA A CONFETI ---
    spawnConfetti(avgX, avgY); // Confeti sale del centro de la suma
    
    // --- LLAMADA A CAMBIO DE TEMA (cada 4 puntos) ---
    if (score > 0 && score % 4 === 0) {
        changeTheme();
    }
    
    selectedBalls.forEach(b => {
        b.element.style.transform = "scale(0)"; 
        setTimeout(() => b.element.remove(), 200);
        const idx = balls.indexOf(b);
        if (idx > -1) balls.splice(idx, 1);
    });
    currentSum = 0;
    setNewTarget();
    updateHUD();
}

function increaseDifficulty() {
    if (currentSpawnRate > 600) {
        currentSpawnRate -= 150; 
        console.log("¡Más rápido! " + currentSpawnRate);
    }
    if (CONFIG.gravity < 0.9) CONFIG.gravity += 0.05;
}

function updatePhysics() {
    balls.forEach(ball => {
        if (!ball.selected) {
            ball.vy += CONFIG.gravity;
            ball.x += ball.vx;
            ball.y += ball.vy;
            ball.vx *= 0.98; 
            ball.vy *= 0.98;
        }
    });

    const iterations = 6; 
    const padding = 5; 

    for (let i = 0; i < iterations; i++) {
        balls.forEach(ball => {
            if (ball.x - ball.radius < padding) {
                ball.x = ball.radius + padding;
                ball.vx *= -CONFIG.bounce;
            } else if (ball.x + ball.radius > CONFIG.width - padding) {
                ball.x = CONFIG.width - ball.radius - padding;
                ball.vx *= -CONFIG.bounce;
            }

            if (ball.y + ball.radius > CONFIG.height - padding) {
                ball.y = CONFIG.height - ball.radius - padding;
                ball.vy *= -CONFIG.bounce;
                ball.vx *= CONFIG.friction; 
            }

            balls.forEach(other => {
                if (ball === other) return;
                const dx = other.x - ball.x;
                const dy = other.y - ball.y;
                const distance = Math.sqrt(dx*dx + dy*dy);
                const minDistance = ball.radius + other.radius;

                if (distance < minDistance && distance > 0) {
                    const angle = Math.atan2(dy, dx);
                    const overlap = minDistance - distance;
                    const force = 0.4;
                    const pushX = Math.cos(angle) * overlap * force;
                    const pushY = Math.sin(angle) * overlap * force;

                    ball.x -= pushX;
                    ball.y -= pushY;
                    other.x += pushX;
                    other.y += pushY;

                    const frictionCollision = 0.8;
                    const avgVX = (ball.vx + other.vx) / 2;
                    const avgVY = (ball.vy + other.vy) / 2;
                    
                    ball.vx = avgVX * frictionCollision;
                    ball.vy = avgVY * frictionCollision;
                    other.vx = avgVX * frictionCollision;
                    other.vy = avgVY * frictionCollision;
                }
            });
        });
    }

    balls.forEach(ball => {
        if (Math.abs(ball.vx) < 0.1) ball.vx = 0;
        if (Math.abs(ball.vy) < 0.1) ball.vy = 0;
    });
}

function renderBalls() {
    balls.forEach(ball => {
        ball.element.style.left = (ball.x - ball.radius) + 'px';
        ball.element.style.top = (ball.y - ball.radius) + 'px';
    });
}

function checkGameOver() {
    const limitY = CONFIG.limitLineY; 
    let isOverflowing = false;

    for (let ball of balls) {
        if (ball.y < limitY && ball.y > 0 && Math.abs(ball.vy) < 1) {
            isOverflowing = true;
            break;
        }
    }

    if (isOverflowing) {
        dangerTimer++;
        document.getElementById('limit-line').style.borderTop = "5px solid red";
        if (dangerTimer > 150) triggerGameOver(); 
    } else {
        dangerTimer = 0;
        document.getElementById('limit-line').style.borderTop = "3px dashed #ff4757";
    }
}

function updateHUD() {
    scoreDisplay.innerText = score;
    targetDisplay.innerText = targetNumber;
    currentSumDisplay.innerText = currentSum;
    const selectedCount = balls.filter(b => b.selected && b.type === 'normal').length;

    if (currentSum > targetNumber) {
        currentSumDisplay.style.color = '#e74c3c'; 
    } else if (currentSum === targetNumber && selectedCount < 2) {
        currentSumDisplay.style.color = '#f39c12'; 
    } else if (currentSum === targetNumber) {
        currentSumDisplay.style.color = '#2ecc71'; 
    } else {
        currentSumDisplay.style.color = '#273c75'; 
    }
}

function triggerGameOver() {
    gameActive = false;
    playSound(sndLose);
    overlayTitle.innerText = "¡Lleno!";
    overlayMsg.innerText = `Lograste ${score} aciertos.`;
    startBtn.innerText = "Reintentar";
    overlay.style.display = 'flex';
}

function playSound(audioEl) {
    if (audioEl) {
        audioEl.currentTime = 0;
        audioEl.play().catch(e => {});
    }
}

/* --- FUNCIONES DE TEMAS Y EFECTOS --- */

function changeTheme() {
    // 1. Limpiar el tema anterior
    gameWrapper.classList.remove(`theme-${currentThemeIndex}`);

    // 2. Incrementar el índice del tema (4 temas, luego vuelve a 1)
    currentThemeIndex++;
    if (currentThemeIndex > 4) {
        currentThemeIndex = 1;
    }

    // 3. Aplicar el nuevo tema
    gameWrapper.classList.add(`theme-${currentThemeIndex}`);
}

function spawnConfetti(x, y) {
    const COUNT = 30; // Cuantas partículas de confeti generar
    const spread = 200; // Distancia a la que se dispersan

    for (let i = 0; i < COUNT; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Posición inicial (centro de la bola acertada)
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        
        // Color aleatorio
        confetti.style.backgroundColor = getRandomColor();

        // Destino aleatorio (usado por la animación fall-fade)
        const targetX = (Math.random() - 0.5) * spread;
        const targetY = (Math.random() * -spread) - 50; 
        
        confetti.style.setProperty('--confetti-x', `${targetX}px`);
        confetti.style.setProperty('--confetti-y', `${targetY}px`);

        container.appendChild(confetti);

        // Eliminar el confeti después de que termine la animación
        setTimeout(() => confetti.remove(), 800);
    }
}


function getRandomColor() {
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#a29bfe', '#fdcb6e'];
    return colors[Math.floor(Math.random() * colors.length)];
}