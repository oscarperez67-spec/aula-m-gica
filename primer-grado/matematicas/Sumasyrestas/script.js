const totalProblems = 25;
let currentProblem = 0;
let score = 0;
let currentAnswer = 0;
let maxRange = 10; 

const colors = ['#FF5252', '#00E676', '#FFEB3B', '#E040FB', '#FF9800', '#00BCD4'];

const startScreen = document.getElementById('start-screen');
const gameUI = document.getElementById('game-ui');
const gameArea = document.getElementById('game-area');
const finalScreen = document.getElementById('final-screen');
const btn10 = document.getElementById('btn-10');
const btn20 = document.getElementById('btn-20');
const restartBtn = document.getElementById('restart-btn');
const puzzleContainer = document.getElementById('puzzle-container');
const equationDiv = document.getElementById('equation');
const answersDiv = document.getElementById('answers');
const feedbackDiv = document.getElementById('feedback');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const finalScoreText = document.getElementById('final-score');

btn10.onclick = () => startGame(10);
btn20.onclick = () => startGame(20);
restartBtn.onclick = () => { finalScreen.style.display = "none"; startScreen.style.display = "block"; };

function startGame(range) {
    maxRange = range;
    currentProblem = 0;
    score = 0;
    startScreen.style.display = "none";
    gameUI.style.display = "block";
    gameArea.style.display = "block";
    generateProblem();
}

function generateProblem() {
    if (currentProblem >= totalProblems) { endGame(); return; }
    currentProblem++;
    updateProgress();
    feedbackDiv.textContent = "";

    let num1, num2;
    // Si el problema es impar (1, 3, 5...), es suma. Si es par (2, 4, 6...), es resta.
    let isAddition = (currentProblem % 2 !== 0); 
    let operatorChar = "";

    if (isAddition) {
        // Lógica de suma
        do {
            num1 = Math.floor(Math.random() * (maxRange - 1)) + 1;
            num2 = Math.floor(Math.random() * (maxRange - 1)) + 1;
        } while (num1 + num2 > maxRange || num1 + num2 === 2); 
        
        currentAnswer = num1 + num2;
        operatorChar = "+";
    } else {
        // Lógica de resta (evitando resultados negativos y ceros)
        do {
            num1 = Math.floor(Math.random() * maxRange) + 1; 
            num2 = Math.floor(Math.random() * num1); 
        } while (num2 === 0 || num1 === num2); // Asegura que num1 > num2 y num2 > 0
        
        currentAnswer = num1 - num2;
        operatorChar = "-";
    }

    renderPuzzles(num1, num2, operatorChar);
    equationDiv.textContent = `${num1} ${operatorChar} ${num2} = ?`;
    generateAnswerButtons(currentAnswer);
}

function renderPuzzles(num1, num2, operatorChar) {
    puzzleContainer.innerHTML = '';
    
    let c1 = colors[Math.floor(Math.random() * colors.length)];
    let c2;
    do { c2 = colors[Math.floor(Math.random() * colors.length)]; } while (c1 === c2);

    const svgPath = "M 20 20 L 40 20 A 10 10 0 1 1 60 20 L 80 20 L 80 40 A 10 10 0 1 0 80 60 L 80 80 L 60 80 A 10 10 0 1 1 40 80 L 20 80 L 20 60 A 10 10 0 1 0 20 40 Z";

    // GRUPO 1
    const group1 = document.createElement('div');
    group1.classList.add('puzzle-group');
    for(let i = 0; i < num1; i++) {
        group1.innerHTML += `<svg class="puzzle-piece" viewBox="0 0 100 100"><path d="${svgPath}" fill="${c1}" stroke="#333" stroke-width="3" stroke-linejoin="round"/></svg>`;
    }
    puzzleContainer.appendChild(group1);

    // Separador Visual (+ o -)
    const operatorSign = document.createElement('div');
    operatorSign.classList.add('puzzle-operator-visual');
    operatorSign.textContent = operatorChar;
    puzzleContainer.appendChild(operatorSign);

    // GRUPO 2
    const group2 = document.createElement('div');
    group2.classList.add('puzzle-group');
    for(let i = 0; i < num2; i++) {
        group2.innerHTML += `<svg class="puzzle-piece" viewBox="0 0 100 100"><path d="${svgPath}" fill="${c2}" stroke="#333" stroke-width="3" stroke-linejoin="round"/></svg>`;
    }
    puzzleContainer.appendChild(group2);
}

function generateAnswerButtons(correct) {
    answersDiv.innerHTML = '';
    let options = [correct];
    
    // Generamos respuestas incorrectas dentro del rango lógico (1 hasta maxRange)
    while (options.length < 3) {
        let wrong = Math.floor(Math.random() * maxRange) + 1; 
        if (!options.includes(wrong) && wrong !== correct) { 
            options.push(wrong); 
        }
    }
    
    options.sort(() => Math.random() - 0.5);
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.classList.add('answer-btn');
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(selected, btn) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(b => b.disabled = true); 
    
    if (selected === currentAnswer) {
        feedbackDiv.textContent = "¡Correcto! ⭐"; 
        feedbackDiv.className = "correct"; 
        score++; 
        btn.style.backgroundColor = '#00E676'; 
    } else {
        feedbackDiv.textContent = "¡Oh no! ❌"; 
        feedbackDiv.className = "incorrect"; 
        btn.style.backgroundColor = '#FF5252'; 
        buttons.forEach(b => { 
            if(parseInt(b.textContent) === currentAnswer) { b.style.backgroundColor = '#00E676'; } 
        });
    }
    
    setTimeout(() => { generateProblem(); }, 1500);
}

function updateProgress() {
    let percentage = ((currentProblem - 1) / totalProblems) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `Problema ${currentProblem} de ${totalProblems}`;
}

function endGame() {
    progressBar.style.width = "100%";
    gameArea.style.display = "none";
    finalScreen.style.display = "block";
    finalScoreText.textContent = `Obtuviste ${score} respuestas correctas de ${totalProblems}.`;
}