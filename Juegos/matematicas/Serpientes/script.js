const config = {
    tablero: { filas: 10, columnas: 10, totalCasillas: 100 },
    obstaculos: {
        escaleras: { "5": 15, "18": 36, "38": 56, "47": 66, "72": 93 },
        serpientes: { "97": 42, "82": 61, "45": 34, "32": 12, "16": 3 },
        escudos: [12, 33, 67, 88] // Casillas de escudo
    }
};

let players = [];
let currentPlayerIndex = 0;
let gameState = { previousPos: 1, targetPos: 1, currentAnswer: 0, isShieldAttempt: false };
let feedbackCallback = null;

const colors = [
    { name: "Roja", hex: "#f44336" }, { name: "Azul", hex: "#2196f3" },
    { name: "Verde", hex: "#4caf50" }, { name: "Amarilla", hex: "#fbc02d" }
];

function initGame() {
    const count = parseInt(document.getElementById('player-count').value);
    players = Array.from({ length: count }, (_, i) => ({
        id: i, pos: 1, name: colors[i].name, color: colors[i].hex, hasShield: false
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
    for (let row = 9; row >= 0; row--) {
        for (let col = 0; col < 10; col++) {
            let index = (row % 2 === 0) ? (row * 10) + col + 1 : (row * 10) + (10 - col);
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${index}`;
            
            if (config.obstaculos.escudos.includes(index)) {
                const shieldIcon = document.createElement('div');
                shieldIcon.innerHTML = '🛡️'; 
                shieldIcon.style.position = 'absolute';
                shieldIcon.style.opacity = '0.3'; 
                shieldIcon.style.fontSize = '2rem';
                shieldIcon.style.zIndex = '1'; 
                cell.appendChild(shieldIcon);
            }
            
            board.appendChild(cell);
        }
    }
}

async function processMove() {
    const dice = document.getElementById('dice');
    const btn = document.getElementById('roll-btn');
    btn.disabled = true;

    for (let i = 0; i < 10; i++) {
        dice.innerText = Math.floor(Math.random() * 6) + 1;
        await new Promise(r => setTimeout(r, 60));
    }

    const roll = parseInt(dice.innerText);
    const player = players[currentPlayerIndex];
    gameState.previousPos = player.pos;

    for (let i = 0; i < roll; i++) {
        if (player.pos < 100) {
            player.pos++;
            updateTokens();
            await new Promise(r => setTimeout(r, 250));
        }
    }

    const landPos = player.pos;
    if (config.obstaculos.escudos.includes(landPos)) {
        gameState.isShieldAttempt = true;
        showFeedback("🛡️ CASILLA DE ESCUDO", "¡Atención! Si respondes esta pregunta de un grado superior, ganarás un escudo protector.", true, openMathModal);
    } 
    else if (config.obstaculos.serpientes[landPos]) {
        if (player.hasShield) {
            player.hasShield = false;
            showFeedback("🛡️ ¡ESCUDO USADO!", "¡La serpiente atacó pero el escudo te salvó de caer!", true, finishTurn);
        } else {
            const dest = config.obstaculos.serpientes[landPos];
            showFeedback("🐍 ¡SSSERPIENTE!", "¡Cuidado! Vas de bajada...", false, async () => {
                player.pos = dest;
                updateTokens();
                await new Promise(r => setTimeout(r, 800));
                finishTurn();
            });
        }
    } 
    else if (config.obstaculos.escaleras[landPos]) {
        const dest = config.obstaculos.escaleras[landPos];
        showFeedback("🪜 ¡ESCALERA!", "¡Sube y resuelve la operación para quedarte arriba!", true, async () => {
            player.pos = dest;
            updateTokens();
            await new Promise(r => setTimeout(r, 800));
            gameState.targetPos = dest;
            gameState.isShieldAttempt = false;
            openMathModal();
        });
    } 
    else {
        gameState.targetPos = landPos;
        gameState.isShieldAttempt = false;
        openMathModal();
    }
}

function openMathModal() {
    const diff = document.getElementById('difficulty').value;
    const problem = generateProblemByGrade(diff);
    gameState.currentAnswer = problem.answer;
    document.getElementById('op-question').innerText = problem.text;
    document.getElementById('op-answer').value = '';
    document.getElementById('math-modal').showModal();
}

// Generador de números aleatorios seguro
function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Selector basado en pesos (porcentajes)
function getProblemType(weights) {
    let sum = weights.reduce((a, b) => a + b.w, 0);
    let r = Math.random() * sum;
    for (let item of weights) {
        if (r < item.w) return item.type;
        r -= item.w;
    }
}

// Generador principal de matemáticas
function generateProblemByGrade(gradeStr) {
    let grade = parseInt(gradeStr);
    
    // Si cae en casilla escudo, le subimos la dificultad 1 grado
    if (gameState.isShieldAttempt) grade++; 

    let pType;
    if (grade === 1) {
        pType = getProblemType([{w:50, type:'add1'}, {w:30, type:'sub1'}, {w:15, type:'add2'}, {w:5, type:'sub2'}]);
    } else if (grade === 2) {
        pType = getProblemType([{w:50, type:'add2'}, {w:30, type:'sub2'}, {w:15, type:'add3'}, {w:5, type:'sub3'}]);
    } else if (grade === 3) {
        pType = getProblemType([{w:40, type:'add2'}, {w:25, type:'sub2'}, {w:10, type:'add3'}, {w:5, type:'sub3'}, {w:20, type:'mult_basic'}]);
    } else if (grade >= 4 && grade <= 6) {
        pType = getProblemType([{w:35, type:'add3'}, {w:25, type:'sub3'}, {w:10, type:'add4'}, {w:5, type:'sub4'}, {w:15, type:'mult_basic'}, {w:5, type:'mult_complex'}, {w:5, type:'div_basic'}]);
    } else {
        // Nivel "7" (El escudo para los niños de 6to grado)
        pType = getProblemType([{w:30, type:'mult_complex'}, {w:30, type:'div_basic'}, {w:20, type:'add4'}, {w:20, type:'sub4'}]);
    }

    let a, b, op, ans;
    let isValid = false;

    // Ciclo de validación para evitar números indeseados
    while (!isValid) {
        if (pType === 'add1') { a = rnd(1,9); b = rnd(1,9); op = '+'; ans = a + b; }
        else if (pType === 'sub1') { a = rnd(2,9); b = rnd(1, a-1); op = '-'; ans = a - b; }
        else if (pType === 'add2') { a = rnd(11,99); b = rnd(11,99); op = '+'; ans = a + b; }
        else if (pType === 'sub2') { a = rnd(20,99); b = rnd(11, a-1); op = '-'; ans = a - b; }
        else if (pType === 'add3') { a = rnd(100,999); b = rnd(100,999); op = '+'; ans = a + b; }
        else if (pType === 'sub3') { a = rnd(200,999); b = rnd(100, a-1); op = '-'; ans = a - b; }
        else if (pType === 'add4') { a = rnd(1000,9999); b = rnd(1000,9999); op = '+'; ans = a + b; }
        else if (pType === 'sub4') { a = rnd(2000,9999); b = rnd(1000, a-1); op = '-'; ans = a - b; }
        else if (pType === 'mult_basic') { a = rnd(2,9); b = rnd(2,9); op = 'x'; ans = a * b; }
        else if (pType === 'mult_complex') { a = rnd(11,99); b = rnd(2,9); op = 'x'; ans = a * b; }
        else if (pType === 'div_basic') { let c = rnd(2,9); b = rnd(2,9); a = c * b; op = '÷'; ans = a / b; }

        // Filtros de limpieza
        if (a === 10 || b === 10 || ans === 10) continue; 
        if (op === '+' && ans === 2) continue; 

        isValid = true;
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
        if (gameState.isShieldAttempt) {
            player.hasShield = true;
            showFeedback("🛡️ ¡ESCUDO ACTIVADO!", "¡Excelente! Ahora estás protegido. Las serpientes no podrán bajarte.", true, finishTurn);
        } else {
            showFeedback("✅ ¡CORRECTO!", "¡Perfecto! Te mantienes en tu lugar.", true, () => { if (player.pos === 100) handleWin(); else finishTurn(); });
        }
    } else {
        showFeedback("❌ ¡INCORRECTO!", `La respuesta correcta era ${gameState.currentAnswer}. Vuelves a la casilla ${gameState.previousPos}.`, false, async () => {
            player.pos = gameState.previousPos;
            updateTokens();
            await new Promise(r => setTimeout(r, 600));
            finishTurn();
        });
    }
}

function showFeedback(title, text, isSuccess, callback) {
    const modal = document.getElementById('feedback-modal');
    document.getElementById('feedback-title').innerText = title;
    document.getElementById('feedback-title').className = isSuccess ? "success-text" : "error-text";
    document.getElementById('feedback-text').innerText = text;
    feedbackCallback = callback;
    modal.showModal();
}

function closeFeedback() {
    document.getElementById('feedback-modal').close();
    if (feedbackCallback) feedbackCallback();
}

function finishTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateUI();
    document.getElementById('roll-btn').disabled = false;
}

function updateUI() {
    const p = players[currentPlayerIndex];
    const indicator = document.getElementById('current-color-name');
    const icon = document.getElementById('turn-token-icon');
    
    indicator.innerText = p.name;
    indicator.style.color = p.color;
    icon.style.backgroundColor = p.color;
    
    updateTokens();
}

function updateTokens() {
    document.querySelectorAll('.token').forEach(t => t.remove());
    players.forEach((p, i) => {
        const cell = document.getElementById(`cell-${p.pos}`);
        if (!cell) return;
        const token = document.createElement('div');
        token.className = 'token' + (i === currentPlayerIndex ? ' active-token' : '');
        if (p.hasShield) token.classList.add('shielded');
        token.style.backgroundColor = p.color;
        const offset = i * 4;
        token.style.left = `calc(50% - 11px + ${offset - 6}px)`;
        token.style.top = `calc(50% - 11px + ${offset - 6}px)`;
        cell.appendChild(token);
    });
}

function handleWin() {
    showFeedback("🎉 ¡VICTORIA!", `¡Felicidades! La Ficha ${players[currentPlayerIndex].name} ha llegado a la meta.`, true, () => location.reload());
}