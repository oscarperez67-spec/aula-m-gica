let range = 10; // Default to 10
let correctCount = 0;
let incorrectCount = 0;
let totalOperations = 0;

// Select buttons for 10 and 20
const btn10 = document.getElementById('btn10');
const btn20 = document.getElementById('btn20');

// Select elements for sum and answers
const sumContainer = document.getElementById('sum');
const answerBtns = document.querySelectorAll('.answer-btn');
const correctSpan = document.getElementById('correct');
const incorrectSpan = document.getElementById('incorrect');

// Select final score elements
const finalScore = document.getElementById('final-score');
const finalMessage = document.getElementById('final-message');
const medal = document.getElementById('medal');
const restartBtn = document.getElementById('restartBtn');

// Array to store images
const imageFolder = "imagenes/"; // Change this to your images path
let sumImages = [];

// Event listeners for selecting the range
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

// Function to load sum images
const loadImages = () => {
    for (let i = 1; i <= range; i++) {
        sumImages.push(`${imageFolder}${i.toString().padStart(2, '0')}.png`);
    }
};

// Generate sum and answers
const generateSum = () => {
    if (totalOperations >= 20) {
        showFinalScore();
        return; // Stop the game after 20 operations
    }

    const num1 = Math.floor(Math.random() * range) + 1;
    const num2 = Math.floor(Math.random() * range) + 1;
    
    // Ensure sum does not exceed the selected range
    if (num1 + num2 > range) {
        return generateSum(); // Retry if sum is greater than the range
    }

    const sum = num1 + num2;
    
    // Create sum image layout
    const sumImage1 = `<img src="${sumImages[num1 - 1]}" alt="Number ${num1}" class="sum-image">`;
    const sumImage2 = `<img src="${sumImages[num2 - 1]}" alt="Number ${num2}" class="sum-image">`;
    const plusImage = `<img src="${imageFolder}plus.png" alt="Plus" class="sum-image">`;
    const equalsImage = `<img src="${imageFolder}equals.png" alt="Equals" class="sum-image">`;
    
    // Display sum in a single row
    sumContainer.innerHTML = `${sumImage1} ${plusImage} ${sumImage2} ${equalsImage}`;
    
    // Generate answers
    generateAnswers(sum);
};

// Generate random answers and place the correct one randomly
const generateAnswers = (correctAnswer) => {
    // Aseguramos que las respuestas incorrectas sean únicas
    let wrongAnswer1, wrongAnswer2;

    // Generamos dos respuestas incorrectas diferentes
    do {
        wrongAnswer1 = Math.floor(Math.random() * range) + 1;
    } while (wrongAnswer1 === correctAnswer); // Aseguramos que no sea igual a la respuesta correcta

    do {
        wrongAnswer2 = Math.floor(Math.random() * range) + 1;
    } while (wrongAnswer2 === correctAnswer || wrongAnswer2 === wrongAnswer1); // Aseguramos que no sea igual a la correcta ni a la primera incorrecta

    const answers = [correctAnswer, wrongAnswer1, wrongAnswer2];
    answers.sort(() => Math.random() - 0.5); // Randomize answers

    // Set answers in buttons with images
    answerBtns.forEach((btn, index) => {
        const answerImage = `<img src="${imageFolder}${answers[index].toString().padStart(2, '0')}.png" alt="Answer ${answers[index]}" class="sum-image">`;
        btn.innerHTML = answerImage;  // Set image as button content
        btn.onclick = () => checkAnswer(answers[index], correctAnswer, btn);
    });
};


// Check selected answer
const checkAnswer = (selectedAnswer, correctAnswer, btnClicked) => {
    // Disable buttons after selection
    answerBtns.forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        correctCount++;
        correctSpan.textContent = correctCount;
    } else {
        incorrectCount++;
        incorrectSpan.textContent = incorrectCount;
    }

    // Wait for 2 seconds before generating new sum
    totalOperations++;
    setTimeout(() => {
        answerBtns.forEach(btn => btn.disabled = false); // Re-enable buttons for the next sum
        generateSum(); // Generate new sum
    }, 500);
};

// Show final score and restart button
const showFinalScore = () => {
    finalScore.style.display = 'block';
    if (correctCount === 20) {
        finalMessage.textContent = "¡Excelente! ¡Obtuviste todas las respuestas correctas!";
        medal.src = "imagenes/medal_gold.png"; // Path to your gold medal image
        medal.style.display = 'block';
    } else {
        finalMessage.textContent = `Tu puntaje final: ${correctCount} respuestas correctas.`;
    }
    
    // Show restart button
    restartBtn.style.display = 'block';
};

// Restart game
const restartGame = () => {
    correctCount = 0;
    incorrectCount = 0;
    totalOperations = 0;
    correctSpan.textContent = correctCount;
    incorrectSpan.textContent = incorrectCount;
    finalScore.style.display = 'none';
    restartBtn.style.display = 'none'; // Hide restart button

    // Hide game content
    document.getElementById('game').style.display = 'none'; 

    // Show the range selection buttons again
    btn10.style.display = 'inline-block';
    btn20.style.display = 'inline-block'; 

    // Reset the game
    sumImages = []; // Reset images array
};

// Hide the range selection buttons after the game starts
const hideRangeButtons = () => {
    btn10.style.display = 'none';
    btn20.style.display = 'none';
};

// Start game
const startGame = () => {
    document.getElementById('game').style.display = 'block'; // Show game area
    finalScore.style.display = 'none'; // Hide final score area
    loadImages();  // Load images based on the selected range
    generateSum(); // Generate first sum
};
