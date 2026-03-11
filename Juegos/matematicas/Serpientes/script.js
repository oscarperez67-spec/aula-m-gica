const boardSize = 7;
const totalCells = boardSize * boardSize;
let players = [];
let currentPlayerIndex = 0;
let gameState = { previousPos: 1, targetPos: 1, currentAnswer: 0 };

// Reglas exactas solicitadas
const ladders = { 4: 11, 18: 30, 39: 44 }; // Suben y preguntan
const snakes = { 16: 3, 32: 21, 45: 34 };  // Bajan sin preguntar (castigo directo)

const colors = [
    { name: "Roja", hex: "#f44336" }, 
    { name: "Azul", hex: "#2196f3" },
    { name: "Verde", hex: "#4caf50" }, 
    { name: "Amarilla", hex: "#fbc02d" }
];

function initGame() {
    const count = parseInt(document.getElementById('player-count').value);
    players = Array.from({ length: count }, (_, i) => ({
        id: i, pos: 1, name: colors[i].name, color: colors[i].hex
    }));

    currentPlayerIndex = 0;
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex';
    
    renderBoard();
    updateUI();
}

function renderBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    
    // Generación matemática de la cuadrícula de arriba hacia abajo (7x7)
    for (let row = 6; row >= 0; row--) {
        for (let col = 0; col < 7; col++) {
            let index;
            // Fila 0, 2, 4, 6 van de Izq a Der. Filas 1, 3, 5 de Der a Izq.
            if (row % 2 === 0) {
                index = (row * 7) + col + 1;
            } else {
                index = (row * 7) + (7 - col);
            }

            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${index}`;
            // Las celdas se crean vacías para no tapar tu imagen PNG
            board.appendChild(cell);
        }
    }
}

async function processMove() {
    const dice = document.getElementById('dice');
    const btn = document.getElementById('roll-btn');
    btn.disabled = true;

    // Animación visual del dado cambiando números
    for (let i = 0; i < 12; i++) {
        dice.innerText = Math.floor(Math.random() * 6) + 1;
        await new Promise(r => setTimeout(r, 50));
    }

    const roll = parseInt(dice.innerText);
    const player = players[currentPlayerIndex];
    gameState.previousPos = player.pos;

    // Caminado casilla por casilla
    for (let i = 0; i < roll; i++) {
        if (player.pos < totalCells) {
            player.pos++;
            updateTokens();
            await new Promise(r => setTimeout(r, 300));
        }
    }

    const landPos = player.pos;

    // LÓGICA DE SERPIENTES (Castigo directo)
    if (snakes[landPos]) {
        alert(`🐍 ¡Ssserpiente! La Ficha ${player.name} baja a la casilla ${snakes[landPos]}`);
        player.pos = snakes[landPos];
        updateTokens();
        finishTurn();
    } 
    // LÓGICA DE ESCALERAS (Sube y luego pregunta)
    else if (ladders[landPos]) {
        alert(`🪜 ¡Escalera! Subes a la casilla ${ladders[landPos]}. ¡Resuelve para quedarte!`);
        player.pos = ladders[landPos]; // Sube visualmente
        updateTokens();
        gameState.targetPos = ladders[landPos];
        setTimeout(openMathModal, 600); 
    } 
    // CASILLA NORMAL (Pregunta)
    else {
        gameState.targetPos = landPos;
        setTimeout(openMathModal, 400);
    }
}

function openMathModal() {
    const diff = document.getElementById('difficulty').value;
    const problem = generateProblem(diff);
    gameState.currentAnswer = problem.answer;
    
    document.getElementById('op-question').innerText = problem.text;
    document.getElementById('op-answer').value = '';
    document.getElementById('math-modal').showModal();
}

function generateProblem(diff) {
    let a, b, op, ans;
    if (diff === 'easy') {
        // Sumas/Restas hasta 100
        a = Math.floor(Math.random() * 50) + 1;
        b = Math.floor(Math.random() * 50) + 1;
        op = Math.random() > 0.5 ? '+' : '-';
        if (op === '-' && a < b) [a, b] = [b, a]; 
        ans = op === '+' ? a + b : a - b;
    } else if (diff === 'medium') {
        // Sumas/Restas hasta 1000 + Tablas de multiplicar
        if (Math.random() > 0.4) {
            a = Math.floor(Math.random() * 500) + 1;
            b = Math.floor(Math.random() * 500) + 1;
            op = Math.random() > 0.5 ? '+' : '-';
            if (op === '-' && a < b) [a, b] = [b, a];
            ans = op === '+' ? a + b : a - b;
        } else {
            a = Math.floor(Math.random() * 10) + 1; // Tabla del 1 al 10
            b = Math.floor(Math.random() * 10) + 1;
            op = 'x';
            ans = a * b;
        }
    } else {
        // Difícil: Sumas/Restas hasta 10000 + Mult 2x1
        if (Math.random() > 0.4) {
            a = Math.floor(Math.random() * 5000) + 1;
            b = Math.floor(Math.random() * 5000) + 1;
            op = Math.random() > 0.5 ? '+' : '-';
            if (op === '-' && a < b) [a, b] = [b, a];
            ans = op === '+' ? a + b : a - b;
        } else {
            a = Math.floor(Math.random() * 90) + 10; // 2 dígitos (10-99)
            b = Math.floor(Math.random() * 9) + 1;   // 1 dígito (1-9)
            op = 'x';
            ans = a * b;
        }
    }
    return { text: `${a} ${op} ${b}`, answer: ans };
}

function checkAnswer() {
    const input = document.getElementById('op-answer').value;
    if (input === '') return; 
    
    const userAns = parseInt(input);
    const player = players[currentPlayerIndex];
    document.getElementById('math-modal').close();

    if (userAns === gameState.currentAnswer) {
        alert("¡EXCELENTE! Respuesta correcta. Te quedas aquí.");
        player.pos = gameState.targetPos;
    } else {
        alert(`¡OH NO! La respuesta correcta era ${gameState.currentAnswer}. Vuelves a donde estabas.`);
        player.pos = gameState.previousPos; // Regresa de la escalera o de la casilla normal
    }

    updateTokens();

    if (player.pos === totalCells) {
        // GANADOR: Lluvia de confeti
        throwConfetti();
        
        // Retrasamos la alerta para que vean el confeti primero
        setTimeout(() => {
            alert(`🎉 ¡FELICIDADES! La Ficha ${player.name} ha ganado el juego. 🎉`);
            location.reload(); 
        }, 800);
    } else {
        finishTurn();
    }
}

function finishTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateUI();
    document.getElementById('roll-btn').disabled = false;
}

function updateUI() {
    const p = players[currentPlayerIndex];
    const indicator = document.getElementById('current-color-name');
    indicator.innerText = p.name;
    indicator.style.color = p.color;
    updateTokens();
}

function updateTokens() {
    document.querySelectorAll('.token').forEach(t => t.remove());
    players.forEach((p, i) => {
        const cell = document.getElementById(`cell-${p.pos}`);
        if (!cell) return;
        
        const token = document.createElement('div');
        token.className = 'token' + (i === currentPlayerIndex ? ' active-token' : '');
        token.style.backgroundColor = p.color;
        
        // Separar fichas si caen en la misma casilla
        const offset = i * 4;
        token.style.transform = `translate(${offset - 10}px, ${offset - 10}px)`;
        
        cell.appendChild(token);
    });
}

// Generador visual de confeti
function throwConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const colors = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800', '#9c27b0'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 15 + 5) + 'px';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 1.5) + 's';
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000); // Limpia la memoria
    }
}