// Referencias a elementos del DOM
const menuScreen = document.getElementById('menu-screen');
const gameScreen = document.getElementById('game-screen');
const btnStart = document.getElementById('btn-start');
const btnMenu = document.getElementById('btn-menu');
const btnBackPortal = document.getElementById('btn-back-portal');
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const turnIndicator = document.getElementById('turn-indicator');
const selectMode = document.getElementById('select-mode');
const pcDifficultyGroup = document.getElementById('pc-difficulty-group'); 
const winningLine = document.getElementById('winning-line');

// Modal Operación
const mathModal = document.getElementById('math-modal');
const gridContainer = document.getElementById('math-grid');
const mathAnswer = document.getElementById('math-answer'); 
const visualAnswer = document.getElementById('visual-answer'); 
const btnSubmitAnswer = document.getElementById('btn-submit-answer');
const btnCancel = document.getElementById('btn-cancel');
const feedbackMsg = document.getElementById('feedback-msg');

// Avatares y Modal Victoria
const p2AvatarSection = document.getElementById('p2-avatar-section');
const avatarsP1Elements = document.querySelectorAll('#avatars-p1 .avatar-option');
const avatarsP2Elements = document.querySelectorAll('#avatars-p2 .avatar-option');
const winnerModal = document.getElementById('winner-modal');
const btnPlayAgain = document.getElementById('btn-play-again');

// Estado del Juego
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;
let currentCellIndex = null;
let currentCorrectAnswer = null;

// Configuraciones
let gameMode = '1v1';
let currentGrade = 1;
let currentDifficulty = 'facil';
let currentPCDifficulty = 'normal'; 
let avatarP1 = '🐶';
let avatarP2 = '🐱';
const allAvatars = ['🐶', '🐱', '🦊', '🐼', '🦁', '🐸'];

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// --- EVENTO DEL INPUT FANTASMA ---
mathAnswer.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.value.length > 6) {
        e.target.value = e.target.value.slice(0, 6);
    }
    let val = e.target.value.toString().padStart(6, ' ');
    
    document.getElementById('ans-cm').textContent = val[0].trim();
    document.getElementById('ans-dm').textContent = val[1].trim();
    document.getElementById('ans-um').textContent = val[2].trim();
    document.getElementById('ans-c').textContent = val[3].trim();
    document.getElementById('ans-d').textContent = val[4].trim();
    document.getElementById('ans-u').textContent = val[5].trim();
});

// --- LÓGICA DE AVATARES Y MODO DE JUEGO ---
selectMode.addEventListener('change', (e) => {
    p2AvatarSection.style.display = e.target.value === 'pc' ? 'none' : 'block';
    pcDifficultyGroup.style.display = e.target.value === 'pc' ? 'block' : 'none';
});

function updateAvatarUI() {
    avatarsP1Elements.forEach(el => {
        el.classList.remove('selected');
        if (el.dataset.avatar === avatarP1) el.classList.add('selected');
    });
    
    avatarsP2Elements.forEach(el => {
        el.classList.remove('selected', 'disabled');
        if (el.dataset.avatar === avatarP1) el.classList.add('disabled');
        if (el.dataset.avatar === avatarP2) el.classList.add('selected');
    });
}

avatarsP1Elements.forEach(el => {
    el.addEventListener('click', () => {
        avatarP1 = el.dataset.avatar;
        if (avatarP1 === avatarP2) {
            avatarP2 = allAvatars.find(a => a !== avatarP1);
        }
        updateAvatarUI();
    });
});

avatarsP2Elements.forEach(el => {
    el.addEventListener('click', () => {
        if (el.dataset.avatar !== avatarP1) {
            avatarP2 = el.dataset.avatar;
            updateAvatarUI();
        }
    });
});

// --- NAVEGACIÓN Y SETUP ---
btnBackPortal.addEventListener('click', () => {
    window.location.href = '../matematicas.html'; 
});

btnStart.addEventListener('click', () => {
    currentGrade = parseInt(document.getElementById('select-grade').value);
    currentDifficulty = document.getElementById('select-difficulty').value;
    gameMode = document.getElementById('select-mode').value;
    currentPCDifficulty = document.getElementById('select-pc-difficulty').value; 
    
    if (gameMode === 'pc') {
        const availableForPC = allAvatars.filter(a => a !== avatarP1);
        avatarP2 = availableForPC[Math.floor(Math.random() * availableForPC.length)];
    }
    
    resetGame();
    menuScreen.classList.remove('active');
    gameScreen.classList.add('active');
});

btnMenu.addEventListener('click', () => {
    gameScreen.classList.remove('active');
    menuScreen.classList.add('active');
});

btnPlayAgain.addEventListener('click', () => {
    winnerModal.classList.remove('active');
    resetGame();
});

// --- LÓGICA DEL JUEGO ---
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.getAttribute('data-index');
        if (boardState[index] !== '' || !isGameActive) return;
        if (gameMode === 'pc' && currentPlayer === 'O') return;

        currentCellIndex = index;
        generateMathProblem();
        openModal();
    });
});

function handleTurnResult(isCorrect) {
    if (isCorrect) {
        boardState[currentCellIndex] = currentPlayer;
        cells[currentCellIndex].textContent = currentPlayer;
        cells[currentCellIndex].classList.add(currentPlayer.toLowerCase());
        checkWinOrDraw();
    }
    
    if (isGameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateTurnIndicator();
        
        if (gameMode === 'pc' && currentPlayer === 'O') {
            setTimeout(playPCTurn, 1000);
        }
    }
}

function updateTurnIndicator() {
    const color = currentPlayer === 'X' ? '#ff6b6b' : '#4ecdc4';
    const name = currentPlayer === 'X' ? 'Jugador 1' : (gameMode === 'pc' ? 'Computadora' : 'Jugador 2');
    const symbol = currentPlayer === 'X' ? 'X' : 'O';
    const avatar = currentPlayer === 'X' ? avatarP1 : avatarP2;
    
    turnIndicator.innerHTML = `Turno: ${avatar} ${name} (<span style="color: ${color}; font-weight: 900;">${symbol}</span>)`;
    turnIndicator.style.borderColor = color;
}

// --- GENERADOR DE MATEMÁTICAS ---
function generateMathProblem() {
    let num1, num2, operator, maxNum;
    
    let availableOperators = ['+', '-'];
    if (currentGrade >= 3) availableOperators.push('x');
    if (currentGrade >= 4) availableOperators.push('÷');

    operator = availableOperators[Math.floor(Math.random() * availableOperators.length)];

    if (operator === '÷') {
        let maxDivisor = currentDifficulty === 'facil' ? 5 : (currentDifficulty === 'medio' ? 10 : 20);
        let maxAnswer = currentDifficulty === 'facil' ? 10 : (currentDifficulty === 'medio' ? 20 : 50);
        
        num2 = Math.floor(Math.random() * maxDivisor) + 2; 
        currentCorrectAnswer = Math.floor(Math.random() * maxAnswer) + 2; 
        num1 = num2 * currentCorrectAnswer; 
    } 
    else {
        switch (currentGrade) {
            case 1:
            case 2:
                maxNum = currentDifficulty === 'facil' ? 10 : (currentDifficulty === 'medio' ? 50 : 100);
                num1 = Math.floor(Math.random() * maxNum) + 1;
                num2 = Math.floor(Math.random() * num1); 
                break;
            case 3:
            case 4:
                maxNum = operator === 'x' ? (currentDifficulty === 'facil' ? 10 : 20) : (currentDifficulty === 'facil' ? 100 : 1000);
                num1 = Math.floor(Math.random() * maxNum) + 1;
                num2 = operator === 'x' ? (Math.floor(Math.random() * 10) + 1) : Math.floor(Math.random() * num1);
                break;
            case 5:
            case 6:
                maxNum = operator === 'x' ? (currentDifficulty === 'facil' ? 20 : 50) : (currentDifficulty === 'facil' ? 1000 : 5000);
                num1 = Math.floor(Math.random() * maxNum) + 1;
                num2 = operator === 'x' ? (Math.floor(Math.random() * 20) + 1) : Math.floor(Math.random() * num1);
                break;
            default:
                num1 = 5; num2 = 5; operator = '+';
        }
        
        if (operator === '+') currentCorrectAnswer = num1 + num2;
        if (operator === '-') currentCorrectAnswer = num1 - num2;
        if (operator === 'x') currentCorrectAnswer = num1 * num2;
    }

    renderMathProblem(num1, num2, operator);
}

function renderMathProblem(n1, n2, op) {
    const formatNumber = (num) => {
        let str = num.toString();
        while (str.length < 6) str = ' ' + str;
        return str.split('');
    };

    if (op === '÷') {
        gridContainer.style.display = 'block';
        gridContainer.innerHTML = `<div class="math-division-format">${n1} <span style="color: #ff6b6b; margin: 0 15px;">÷</span> ${n2}</div>`;
        
        visualAnswer.style.display = 'none'; 
        mathAnswer.style.opacity = '1';      
        mathAnswer.style.position = 'relative';
        mathAnswer.style.textAlign = 'center';
        mathAnswer.style.width = '100%';
        mathAnswer.style.border = '3px solid #ccc';
        mathAnswer.style.borderRadius = '10px';
        mathAnswer.style.padding = '0';
        mathAnswer.parentElement.style.width = '100%'; 
        mathAnswer.parentElement.style.display = 'flex';
        mathAnswer.parentElement.style.justifyContent = 'center';

    } else {
        gridContainer.style.display = 'grid';
        visualAnswer.style.display = 'grid'; 
        mathAnswer.style.opacity = '0';      
        mathAnswer.style.position = 'absolute';
        mathAnswer.parentElement.style.width = '210px'; 
        
        const digits1 = formatNumber(n1);
        const digits2 = formatNumber(n2);

        gridContainer.innerHTML = `
            <div class="math-header-row">
                <span></span>
                <span class="cm">CM</span>
                <span class="dm">DM</span>
                <span class="um">UM</span>
                <span class="c">C</span>
                <span class="d">D</span>
                <span class="u">U</span>
            </div>
            <div class="math-number-row">
                <span></span>
                <span>${digits1[0].trim()}</span>
                <span>${digits1[1].trim()}</span>
                <span>${digits1[2].trim()}</span>
                <span>${digits1[3].trim()}</span>
                <span>${digits1[4].trim()}</span>
                <span>${digits1[5]}</span>
            </div>
            <div class="math-number-row">
                <span class="operator">${op}</span>
                <span>${digits2[0].trim()}</span>
                <span>${digits2[1].trim()}</span>
                <span>${digits2[2].trim()}</span>
                <span>${digits2[3].trim()}</span>
                <span>${digits2[4].trim()}</span>
                <span>${digits2[5]}</span>
            </div>
            <div class="math-line-container"></div>
        `;
    }
}

// --- MANEJO DEL MODAL ---
function openModal() {
    const color = currentPlayer === 'X' ? '#ff6b6b' : '#4ecdc4';
    const name = currentPlayer === 'X' ? 'Jugador 1' : (gameMode === 'pc' ? 'Computadora' : 'Jugador 2');
    const symbol = currentPlayer === 'X' ? 'X' : 'O';
    
    document.getElementById('modal-player-title').innerHTML = `¡Turno de ${name} (<span style="color: ${color}">${symbol}</span>)!`;

    mathAnswer.value = '';
    document.getElementById('ans-cm').textContent = '';
    document.getElementById('ans-dm').textContent = '';
    document.getElementById('ans-um').textContent = '';
    document.getElementById('ans-c').textContent = '';
    document.getElementById('ans-d').textContent = '';
    document.getElementById('ans-u').textContent = '';

    feedbackMsg.textContent = '';
    feedbackMsg.className = 'feedback';
    mathModal.classList.add('active');
    
    setTimeout(() => mathAnswer.focus(), 100);
}

function closeModal() {
    mathModal.classList.remove('active');
}

btnSubmitAnswer.addEventListener('click', () => {
    if (mathAnswer.value === '') return;
    
    const userAnswer = parseInt(mathAnswer.value);
    if (userAnswer === currentCorrectAnswer) {
        feedbackMsg.textContent = '¡Correcto!';
        feedbackMsg.className = 'feedback success';
        setTimeout(() => {
            closeModal();
            handleTurnResult(true);
        }, 800);
    } else {
        feedbackMsg.textContent = '¡Ups! Respuesta incorrecta.';
        feedbackMsg.className = 'feedback error';
        setTimeout(() => {
            closeModal();
            handleTurnResult(false);
        }, 1500);
    }
});

btnCancel.addEventListener('click', () => closeModal());
mathAnswer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') btnSubmitAnswer.click();
});

// --- LÓGICA PC CON ALGORITMO MINIMAX PARA INVENCIBILIDAD ---
function playPCTurn() {
    if (!isGameActive) return;

    let emptyCells = [];
    boardState.forEach((cell, index) => {
        if (cell === '') emptyCells.push(index);
    });

    if (emptyCells.length === 0) return;

    let chosenCell = -1;

    // 1. ESTRATEGIA DE TABLERO
    if (currentPCDifficulty === 'invencible') {
        // Uso de Minimax: Jamás pierde.
        chosenCell = minimax([...boardState], 'O').index;
    } else if (currentPCDifficulty === 'normal') {
        // 50% Listo, 50% Azar
        if (Math.random() > 0.5) {
            chosenCell = findBestMove('O'); 
            if (chosenCell === -1) chosenCell = findBestMove('X'); 
        }
        if (chosenCell === -1) chosenCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    } else {
        // Despistada (Fácil): 100% al azar
        chosenCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }

    currentCellIndex = chosenCell;

    // 2. HABILIDAD MATEMÁTICA
    let isMathCorrect = true;
    let errorChance = 0;

    if (currentPCDifficulty === 'despistada') errorChance = 0.30; 
    else if (currentPCDifficulty === 'normal') errorChance = 0.15; 
    else errorChance = 0; // invencible = 0% error matemático

    if (Math.random() < errorChance) {
        isMathCorrect = false;
    }

    setTimeout(() => {
        if (isMathCorrect) {
            handleTurnResult(true);
        } else {
            turnIndicator.innerHTML = `🤖 ¡La PC falló el cálculo!`;
            turnIndicator.style.borderColor = '#ff4757';
            turnIndicator.style.animation = 'none';
            
            setTimeout(() => {
                handleTurnResult(false);
            }, 2000);
        }
    }, 800);
}

// Auxiliar para nivel "Normal"
function findBestMove(playerSymbol) {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        const cellsValues = [boardState[a], boardState[b], boardState[c]];
        
        if (cellsValues.filter(val => val === playerSymbol).length === 2 && cellsValues.includes('')) {
            if (boardState[a] === '') return a;
            if (boardState[b] === '') return b;
            if (boardState[c] === '') return c;
        }
    }
    return -1; 
}

// Algoritmo Minimax (El cerebro perfecto)
function minimax(newBoard, player) {
    let availSpots = newBoard.map((val, idx) => val === '' ? idx : null).filter(val => val !== null);

    if (checkWinForMinimax(newBoard, 'X')) return { score: -10 };
    if (checkWinForMinimax(newBoard, 'O')) return { score: 10 };
    if (availSpots.length === 0) return { score: 0 };

    let moves = [];
    for (let i = 0; i < availSpots.length; i++) {
        let move = {};
        move.index = availSpots[i];
        newBoard[availSpots[i]] = player;

        if (player === 'O') {
            let result = minimax(newBoard, 'X');
            move.score = result.score;
        } else {
            let result = minimax(newBoard, 'O');
            move.score = result.score;
        }

        newBoard[availSpots[i]] = ''; // resetear para la siguiente simulación
        moves.push(move);
    }

    let bestMove;
    if (player === 'O') {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}

function checkWinForMinimax(board, player) {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}

// --- VICTORIA Y LÍNEA GANADORA ---
function checkWinOrDraw() {
    let roundWon = false;
    let winningCombo = [];

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            roundWon = true;
            winningCombo = [a, b, c];
            break;
        }
    }

    if (roundWon) {
        drawWinningLine(winningCombo);
        
        const winnerName = currentPlayer === 'X' ? 'Jugador 1' : (gameMode === 'pc' ? 'Computadora' : 'Jugador 2');
        const winnerColor = currentPlayer === 'X' ? '#ff6b6b' : '#4ecdc4';
        const winnerAvatar = currentPlayer === 'X' ? avatarP1 : avatarP2;

        document.getElementById('winner-title').innerHTML = `¡GANA <span style="color: ${winnerColor}">${winnerName}</span>!`;
        document.getElementById('winner-avatar-display').textContent = winnerAvatar;
        
        turnIndicator.style.animation = 'none';
        isGameActive = false;
        
        setTimeout(() => winnerModal.classList.add('active'), 1200); 
        return;
    }

    if (!boardState.includes('')) {
        document.getElementById('winner-title').innerHTML = '¡Es un Empate!';
        document.getElementById('winner-avatar-display').textContent = '🤝';
        
        turnIndicator.style.animation = 'none';
        isGameActive = false;
        
        setTimeout(() => winnerModal.classList.add('active'), 500);
        return;
    }
}

function drawWinningLine(combo) {
    const cellA = cells[combo[0]];
    const cellC = cells[combo[2]];

    const startX = cellA.offsetLeft + (cellA.offsetWidth / 2);
    const startY = cellA.offsetTop + (cellA.offsetHeight / 2);
    const endX = cellC.offsetLeft + (cellC.offsetWidth / 2);
    const endY = cellC.offsetTop + (cellC.offsetHeight / 2);

    const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

    winningLine.style.width = '0px'; 
    winningLine.style.left = `${startX}px`;
    winningLine.style.top = `${startY - 6}px`; 
    winningLine.style.transform = `rotate(${angle}deg)`;
    winningLine.style.display = 'block';

    setTimeout(() => {
        winningLine.style.width = `${distance}px`;
    }, 50);
}

function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
    
    winningLine.style.display = 'none';
    winningLine.style.width = '0px';

    updateTurnIndicator();
    turnIndicator.style.animation = 'pulse-anim 1.5s infinite';
}