let range = 10; // Default to 10
let correctCount = 0;
let incorrectCount = 0;
let totalOperations = 0;

// Elementos del DOM
const btn10 = document.getElementById('btn10');
const btn20 = document.getElementById('btn20');
const sumContainer = document.getElementById('sum');
const answerBtns = document.querySelectorAll('.answer-btn');
const correctSpan = document.getElementById('correct');
const incorrectSpan = document.getElementById('incorrect');
const finalScore = document.getElementById('final-score');
const finalMessage = document.getElementById('final-message');
const medal = document.getElementById('medal');
const restartBtn = document.getElementById('restartBtn');
const gameArea = document.getElementById('game'); // Referencia al área de juego

const imageFolder = "imagenes/"; 
let sumImages = [];

// Eventos de selección de rango
btn10.addEventListener('click', () => {
    range = 10;
    startGame();
    hideRangeButtons();
});

btn20.addEventListener('click', () => {
    range = 20;
    startGame();
    hideRangeButtons();
});

const loadImages = () => {
    sumImages = []; // Limpiar array antes de cargar
    for (let i = 1; i <= range; i++) {
        sumImages.push(`${imageFolder}${i.toString().padStart(2, '0')}.png`);
    }
};

const generateSum = () => {
    // Eliminamos la validación de aquí para que sea controlada en checkAnswer
    const num1 = Math.floor(Math.random() * range) + 1;
    const num2 = Math.floor(Math.random() * range) + 1;
    
    if (num1 + num2 > range) {
        return generateSum(); 
    }

    const sum = num1 + num2;
    
    const sumImage1 = `<img src="${sumImages[num1 - 1]}" alt="${num1}" class="sum-image">`;
    const sumImage2 = `<img src="${sumImages[num2 - 1]}" alt="${num2}" class="sum-image">`;
    const plusImage = `<img src="${imageFolder}plus.png" alt="+" class="sum-image">`;
    const equalsImage = `<img src="${imageFolder}equals.png" alt="=" class="sum-image">`;
    
    sumContainer.innerHTML = `${sumImage1} ${plusImage} ${sumImage2} ${equalsImage}`;
    generateAnswers(sum);
};

const generateAnswers = (correctAnswer) => {
    let wrongAnswer1, wrongAnswer2;

    do {
        wrongAnswer1 = Math.floor(Math.random() * range) + 1;
    } while (wrongAnswer1 === correctAnswer);

    do {
        wrongAnswer2 = Math.floor(Math.random() * range) + 1;
    } while (wrongAnswer2 === correctAnswer || wrongAnswer2 === wrongAnswer1);

    const answers = [correctAnswer, wrongAnswer1, wrongAnswer2];
    answers.sort(() => Math.random() - 0.5);

    answerBtns.forEach((btn, index) => {
        const val = answers[index];
        const answerImage = `<img src="${imageFolder}${val.toString().padStart(2, '0')}.png" alt="${val}" class="sum-image">`;
        btn.innerHTML = answerImage;  
        btn.onclick = () => checkAnswer(val, correctAnswer);
    });
};

const checkAnswer = (selectedAnswer, correctAnswer) => {
    answerBtns.forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        correctCount++;
        correctSpan.textContent = correctCount;
    } else {
        incorrectCount++;
        incorrectSpan.textContent = incorrectCount;
    }

    totalOperations++;

    // Pequeña pausa para que el niño vea si acertó antes de cambiar o terminar
    setTimeout(() => {
        answerBtns.forEach(btn => btn.disabled = false);
        
        if (totalOperations >= 20) {
            showFinalScore();
        } else {
            generateSum();
        }
    }, 500);
};

const showFinalScore = () => {
    gameArea.style.display = 'none'; // OCULTA las sumas al terminar
    finalScore.style.display = 'block';
    
    if (correctCount === 20) {
        finalMessage.textContent = "¡Excelente! ¡Obtuviste todas las respuestas correctas!";
        medal.src = "imagenes/medal_gold.png"; 
        medal.style.display = 'block';
    } else {
        finalMessage.textContent = `Tu puntaje final: ${correctCount} de 20 respuestas correctas.`;
        medal.style.display = 'none';
    }
    
    restartBtn.style.display = 'block';
};

const restartGame = () => {
    correctCount = 0;
    incorrectCount = 0;
    totalOperations = 0;
    correctSpan.textContent = "0";
    incorrectSpan.textContent = "0";
    finalScore.style.display = 'none';
    gameArea.style.display = 'none'; 

    btn10.style.display = 'inline-block';
    btn20.style.display = 'inline-block'; 
};

const hideRangeButtons = () => {
    btn10.style.display = 'none';
    btn20.style.display = 'none';
};

const startGame = () => {
    gameArea.style.display = 'block'; 
    finalScore.style.display = 'none'; 
    loadImages();  
    generateSum(); 
};