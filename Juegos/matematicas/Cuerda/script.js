let turn = 'blue'; 
let gradeBlue = 1;
let gradeRed = 1;
let ropePosition = 50; // El centro
let currentAnswer = 0;
let questionStartTime = 0;
let gameActive = false;

// --- NUEVOS LÍMITES DE VICTORIA (Para terminar antes) ---
// El pañuelo nunca pasará visualmente de estos límites.
const AZUL_WIN_LIMIT = 20; // Si cruza el 20%, Azul gana
const ROJO_WIN_LIMIT = 80; // Si cruza el 80%, Rojo gana

// Referencia al área de juego para cambiar la imagen
const gameArea = document.getElementById('game-area');
const turnIndicator = document.getElementById('turn-indicator');
const mathQuestion = document.getElementById('math-question');
const answerInput = document.getElementById('answer-input');
const handkerchief = document.getElementById('handkerchief');
const feedbackMessage = document.getElementById('feedback-message');
const btnRestart = document.getElementById('btn-restart');
const readyContainer = document.getElementById('ready-container');
const questionContainer = document.getElementById('question-container');

answerInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        verificarRespuesta();
    }
});

function iniciarJuego() {
    gradeBlue = parseInt(document.getElementById('grade-blue').value);
    gradeRed = parseInt(document.getElementById('grade-red').value);
    
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    reiniciarVariables();
    siguienteTurno();
}

function reiniciarVariables() {
    ropePosition = 50;
    actualizarPañuelo();
    turn = 'blue';
    gameActive = true;
    btnRestart.classList.add('hidden');
    feedbackMessage.innerText = '';
    
    // 1. Asegurar la imagen de fondo original
    gameArea.style.backgroundImage = 'var(--main-bg-image)';
    
    // 2. NUEVO: Quitar la clase de "Game Over" para volver a la visualización de juego
    gameArea.classList.remove('game-over-state');
    
    // 3. Asegurar que el pañuelo vuelva a ser visible
    handkerchief.style.display = 'block';
}

// ACTUALIZADO: Limita la posición visual para que el pañuelo no llegue a los niños
function actualizarPañuelo() {
    // El pañuelo visualmente no puede pasar del 20% o 80%
    if (ropePosition <= AZUL_WIN_LIMIT) {
        handkerchief.style.left = AZUL_WIN_LIMIT + '%';
    } else if (ropePosition >= ROJO_WIN_LIMIT) {
        handkerchief.style.left = ROJO_WIN_LIMIT + '%';
    } else {
        handkerchief.style.left = ropePosition + '%';
    }
}

function generarPregunta(grado) {
    let num1, num2, operador, respuesta;
    let valid = false;

    // Ciclo para asegurar que las reglas matemáticas de balance se cumplan
    while (!valid) {
        let tipoOperacion;
        
        // De 1ro a 2do solo sumas y restas. De 3ro en adelante: +, -, x
        if (grado === 1 || grado === 2) {
            tipoOperacion = Math.random() > 0.5 ? '+' : '-';
        } else {
            // Un 33% de probabilidad para cada operación
            let rand = Math.random();
            if (rand < 0.33) tipoOperacion = '+';
            else if (rand < 0.66) tipoOperacion = '-';
            else tipoOperacion = 'x';
        }

        operador = tipoOperacion;

        // Generamos los números dependiendo de la operación y el grado
        if (tipoOperacion === '+') {
            if (grado <= 2) {
                let max = grado === 1 ? 9 : 20; 
                num1 = Math.floor(Math.random() * max) + 1;
                num2 = Math.floor(Math.random() * max) + 1;
            } else if (grado >= 3 && grado <= 5) {
                num1 = Math.floor(Math.random() * 50) + 11;
                num2 = Math.floor(Math.random() * 50) + 11;
            } else if (grado === 6) {
                num1 = Math.floor(Math.random() * 150) + 50;
                num2 = Math.floor(Math.random() * 150) + 50;
            }
        } 
        else if (tipoOperacion === '-') {
            if (grado <= 2) {
                let max = grado === 1 ? 9 : 20; 
                num1 = Math.floor(Math.random() * max) + 1;
                num2 = Math.floor(Math.random() * max) + 1;
            } else if (grado >= 3 && grado <= 5) {
                num1 = Math.floor(Math.random() * 80) + 20;
                num2 = Math.floor(Math.random() * 40) + 5;
            } else if (grado === 6) {
                num1 = Math.floor(Math.random() * 200) + 100;
                num2 = Math.floor(Math.random() * 90) + 15;
            }
            
            // Evitamos resultados negativos invirtiendo los números si el segundo es mayor
            if (num1 < num2) {
                let temp = num1;
                num1 = num2;
                num2 = temp;
            }
        } 
        else if (tipoOperacion === 'x') {
            if (grado >= 3 && grado <= 5) {
                num1 = Math.floor(Math.random() * 9) + 1; 
                num2 = Math.floor(Math.random() * 9) + 1;
            } else if (grado === 6) {
                num1 = Math.floor(Math.random() * 89) + 11; // De 11 a 99
                num2 = Math.floor(Math.random() * 8) + 2;   // De 2 a 9
            }
        }

        // Filtramos para que no salga el número 10 en las operaciones
        if (num1 === 10 || num2 === 10) continue; 
        
        respuesta = operador === '+' ? num1 + num2 :
                    operador === '-' ? num1 - num2 :
                    num1 * num2; 

        // Filtramos para que el resultado no sea 10, ni sumas que den 2
        if (respuesta === 10) continue; 
        if (operador === '+' && respuesta === 2) continue;

        valid = true; 
        return { texto: `${num1} ${operador} ${num2}`, respuesta: respuesta };
    }
}

function siguienteTurno() {
    if (!gameActive) return;

    answerInput.value = '';
    feedbackMessage.innerText = '';
    
    // Ocultar pregunta y mostrar el botón de Listo
    questionContainer.classList.add('hidden');
    readyContainer.classList.remove('hidden');
    
    if (turn === 'blue') {
        turnIndicator.innerText = "Turno del Jugador Azul";
        turnIndicator.style.backgroundColor = 'var(--blue-color)';
    } else {
        turnIndicator.innerText = "Turno del Jugador Rojo";
        turnIndicator.style.backgroundColor = 'var(--red-color)';
    }

    let gradoActual = turn === 'blue' ? gradeBlue : gradeRed;
    let pregunta = generarPregunta(gradoActual);
    
    currentAnswer = pregunta.respuesta;
    mathQuestion.innerText = `¿Cuánto es ${pregunta.texto}?`;
}

// Se dispara cuando el jugador presiona "¡Estoy Listo!"
function mostrarPregunta() {
    readyContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    
    answerInput.focus();
    questionStartTime = Date.now(); // El reloj empieza AHORA
}

// ACTUALIZADO: El error ahora es más costoso lógicamente.
function verificarRespuesta() {
    if (!gameActive || answerInput.value === '') return;

    let userAnswer = parseInt(answerInput.value);
    let timeTaken = (Date.now() - questionStartTime) / 1000; 

    if (userAnswer === currentAnswer) {
        // AJUSTE DE BALANCE: Como la distancia total es menor (30% vs 50%),
        // reducimos la fuerza del jalón a Máx 5%, Mín 2% para mantener las 10 preguntas.
        let pullPower = Math.max(2, 6 - timeTaken); 
        
        feedbackMessage.style.color = '#2ecc71';
        feedbackMessage.innerText = `¡Correcto! Tardaste ${timeTaken.toFixed(1)}s`;

        if (turn === 'blue') {
            ropePosition -= pullPower; 
        } else {
            ropePosition += pullPower; 
        }
    } else {
        // AJUSTE: El error del jugador ahora le da 6% de ventaja al contrario (antes era 5%)
        feedbackMessage.style.color = '#e74c3c';
        feedbackMessage.innerText = `¡Incorrecto! Era ${currentAnswer}. El contrario jala un poco.`;
        
        if (turn === 'blue') {
            ropePosition += 6; 
        } else {
            ropePosition -= 6; 
        }
    }

    actualizarPañuelo();
    checarGanador();

    if (gameActive) {
        turn = turn === 'blue' ? 'red' : 'blue';
        setTimeout(siguienteTurno, 2000); 
    }
}

// ACTUALIZADO: Verificamos los nuevos límites AZUL_WIN_LIMIT y ROJO_WIN_LIMIT
function checarGanador() {
    if (ropePosition <= AZUL_WIN_LIMIT) {
        gameActive = false;
        
        // 1. NUEVO: Aplicar clase CSS para ajustar visualización de victoria
        gameArea.classList.add('game-over-state');
        
        // 2. Cambiar imagen de fondo a victoria azul
        gameArea.style.backgroundImage = "url('image_win_blue.png')";
        
        mathQuestion.innerText = "¡EL JUGADOR AZUL GANA!";
        turnIndicator.innerText = "¡Fin del Juego!";
        btnRestart.classList.remove('hidden');
        
    } else if (ropePosition >= ROJO_WIN_LIMIT) {
        gameActive = false;
        
        // 1. NUEVO: Aplicar clase CSS para ajustar visualización de victoria
        gameArea.classList.add('game-over-state');
        
        // 2. Cambiar imagen de fondo a victoria roja
        gameArea.style.backgroundImage = "url('image_win_red.png')";
        
        mathQuestion.innerText = "¡EL JUGADOR ROJO GANA!";
        turnIndicator.innerText = "¡Fin del Juego!";
        btnRestart.classList.remove('hidden');
    }
}

function reiniciarJuego() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.remove('hidden');
    // Asegurar que el pañuelo vuelva a ser visible
    handkerchief.style.display = 'block';
}