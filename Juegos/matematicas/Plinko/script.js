// Alias para Matter.js
const { Engine, Render, World, Bodies, Events, Runner } = Matter;

// Variable global simple para resolver la caída de la pelota
let globalBallDropResolver = null;
let currentBall = null; 

// Control de cooldown para el sonido de rebote (mantenemos esto)
let isHitSoundReady = true;

document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DEL DOM Y AUDIO ---
    const configSection = document.getElementById('config-section');
    const startGameBtn = document.getElementById('start-game-btn');
    const gameSection = document.getElementById('game-section');
    const plinkoCanvasContainer = document.getElementById('plinko-canvas-container');
    const problemArea = document.getElementById('problem-area');
    const plinkoNum1Span = document.getElementById('plinko-num1');
    const plinkoNum2Span = document.getElementById('plinko-num2');
    const plinkoOpSignSpan = document = document.getElementById('plinko-op-sign');
    const selectedOperatorSpan = document.getElementById('selected-operator');
    const userAnswerInput = document.getElementById('user-answer');
    const checkAnswerBtn = document.getElementById('check-answer-btn');
    const feedbackMessage = document.getElementById('feedback-message');
    const nextRoundBtn = document.getElementById('next-round-btn');
    const resultsSection = document.getElementById('results-section');
    const finalScoreP = document.getElementById('final-score');
    const trophyArea = document.getElementById('trophy-area');
    const restartGameBtn = document.getElementById('restart-game-btn');
    const roundCountSpan = document.getElementById('round-count');
    const correctCountSpan = document.getElementById('correct-count');
    const incorrectCountSpan = document.getElementById('incorrect-count');
    const timerDisplay = document.getElementById('timer-display');
    const countdownSpan = document.getElementById('countdown');
    const slots = document.querySelectorAll('.slot');
    const NUM_SLOTS = slots.length;

    // Elementos de Audio
    const audioHit = document.getElementById('audio-hit');
    const audioCorrect = document.getElementById('audio-correct');
    const audioIncorrect = document.getElementById('audio-incorrect');
    
    // MEJORA CLAVE: Reproducción más eficiente sin clonación infinita
    function playSound(audioElement) {
        if (audioElement === audioHit) {
            if (!isHitSoundReady) return; 
            isHitSoundReady = false; 
            setTimeout(() => {
                isHitSoundReady = true;
            }, 100); // 100ms de "enfriamiento"
            
            // Reutilizar el mismo elemento de audio para el "hit"
            audioElement.currentTime = 0;
            audioElement.play().catch(e => console.error("Error al reproducir audio:", e));
            
        } else {
            // Para sonidos únicos (correct/incorrect), podemos usar la clonación 
            // o simplemente pausar y reiniciar, ya que no son tan frecuentes.
            audioElement.currentTime = 0;
            audioElement.play().catch(e => console.error("Error al reproducir audio:", e));
        }
    }


    // --- VARIABLES DEL JUEGO Y FÍSICA ---
    const MAX_ROUNDS = 10;
    let currentRound = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let currentProblem = {}; 
    let timeLimit = 0;
    let countdownInterval;
    let numbersInSlots = []; 

    // Variables de Matter.js
    let engine;
    let render;
    let boardWidth;
    let boardHeight;
    const BALL_RADIUS = 10;
    const PIN_RADIUS = 5; 
    const BALL_OPTIONS = {
        restitution: 0.8, 
        friction: 0.001,
        density: 1
    };
    let slotWallHeight = 0;
    let slotWidth = 0;

    const DIFFICULTIES = [
        { label: 'Unidades (1-9)', min: 1, max: 9 },
        { label: 'Decenas (10-99)', min: 10, max: 99 },
        { label: 'Centenas (100-999)', min: 100, max: 999 },
        { label: 'Millares (1000-9999)', min: 1000, max: 9999 }
    ];

    // ----------------------------------------------------
    // --- LÓGICA DE FÍSICA REAL (MATTER.JS) ---
    // ----------------------------------------------------

    /** 🧱 Configura el motor de Matter.js y crea el tablero de Plinko. */
    function setupPhysicsBoard() {
        boardWidth = plinkoCanvasContainer.clientWidth;
        boardHeight = plinkoCanvasContainer.clientHeight;
        
        if (boardWidth === 0 || boardHeight === 0) {
            setTimeout(setupPhysicsBoard, 100);
            return;
        }

        if (render) Render.stop(render); 
        plinkoCanvasContainer.innerHTML = '';
        
        engine = Engine.create();
        engine.gravity.y = 1;

        render = Render.create({
            element: plinkoCanvasContainer,
            engine: engine,
            options: {
                width: boardWidth,
                height: boardHeight,
                wireframes: false,
                background: 'transparent'
            }
        });

        Render.run(render);
        Runner.run(Runner.create(), engine);

        const world = engine.world;
        const WALL_THICKNESS = 20;

        // 1. Crear Paredes
        const wallOptions = { isStatic: true, render: { fillStyle: '#4682b4' } }; 
        World.add(world, [
            Bodies.rectangle(-WALL_THICKNESS / 2, boardHeight / 2, WALL_THICKNESS, boardHeight, wallOptions),
            Bodies.rectangle(boardWidth + WALL_THICKNESS / 2, boardHeight / 2, WALL_THICKNESS, boardHeight, wallOptions)
        ]);

        // 2. Crear Clavos (Pins)
        const PIN_FILL_STYLE = '#3cb371'; 
        const pinOptions = { 
            isStatic: true, 
            restitution: 0.5,
            render: { fillStyle: PIN_FILL_STYLE } 
        };
        const pinBodies = [];
        const rows = 8;
        slotWidth = boardWidth / NUM_SLOTS;
        const colSpacing = slotWidth;
        const rowSpacing = boardHeight / rows;

        for (let row = 0; row < rows; row++) {
            const y = row * rowSpacing + rowSpacing / 2 + 10;
            const xOffset = row % 2 === 0 ? 0 : colSpacing / 2;

            for (let col = 0; col < (row % 2 === 0 ? NUM_SLOTS : NUM_SLOTS - 1); col++) {
                const x = col * colSpacing + xOffset + colSpacing / 2;
                if (x > PIN_RADIUS * 2 && x < boardWidth - PIN_RADIUS * 2) { 
                    pinBodies.push(Bodies.circle(x, y, PIN_RADIUS, pinOptions));
                }
            }
        }
        World.add(world, pinBodies);

        // 3. Crear Paredes de Ranuras (Separadores)
        const slotContainer = document.querySelector('.slot-container');
        slotWallHeight = slotContainer.clientHeight + 10; 
        const slotWallOptions = { isStatic: true, render: { fillStyle: '#2e8b57' } }; 
        
        for (let i = 0; i <= NUM_SLOTS; i++) {
            const x = i * slotWidth;
            const y = boardHeight - slotWallHeight / 2;
            World.add(world, Bodies.rectangle(x, y, 2, slotWallHeight, slotWallOptions));
        }
        
        // Detección de Colisión (limitada por Cooldown en playSound)
        Events.on(engine, 'collisionStart', (event) => {
            const pairs = event.pairs;
            for (let i = 0; i < pairs.length; i++) {
                const bodyA = pairs[i].bodyA;
                const bodyB = pairs[i].bodyB;

                // Detectar si una pelota golpea un clavo (PIN_FILL_STYLE)
                if (
                    (bodyA.label === 'Circle Body' && bodyB.render.fillStyle === PIN_FILL_STYLE) ||
                    (bodyB.label === 'Circle Body' && bodyA.render.fillStyle === PIN_FILL_STYLE)
                ) {
                    // Solo si estamos en fase de simulación (currentBall existe)
                    if (currentBall && globalBallDropResolver) {
                         playSound(audioHit);
                    }
                }
            }
        });


        Events.on(engine, 'afterUpdate', () => {
            if (currentBall && globalBallDropResolver) {
                if (currentBall.position.y > boardHeight * 0.85) {
                    const slotIndex = Math.floor(currentBall.position.x / slotWidth);
                    
                    if (slotIndex >= 0 && slotIndex < NUM_SLOTS) {
                        resolveBallDrop(slotIndex, currentBall);
                    }
                }
            }
        });
    }

    /** Lanza una pelota y espera a que aterrice */
    function dropBall(className) {
        return new Promise(resolve => {
            if (!engine) {
                resolve(-1);
                return;
            }
            
            globalBallDropResolver = resolve;
            
            const startX = boardWidth / 2 + (Math.random() - 0.5) * boardWidth * 0.2; 
            
            const newBall = Bodies.circle(startX, -50, BALL_RADIUS, { 
                ...BALL_OPTIONS,
                isSoundPlaying: false, 
                render: { 
                    fillStyle: className === 'ball-1' ? '#ff6347' : '#ffd700' 
                }
            });
            
            World.add(engine.world, newBall);
            currentBall = newBall;
        });
    }

    /** Se llama para resolver la promesa */
    function resolveBallDrop(index, ball) {
        if (!globalBallDropResolver || ball !== currentBall) return;

        World.remove(engine.world, ball);
        
        const resolveFunc = globalBallDropResolver;
        
        globalBallDropResolver = null;
        currentBall = null;
        
        resolveFunc(index);
    }

    // ----------------------------------------------------
    // --- LÓGICA DE JUEGO Y CONFIGURACIÓN ---
    // ----------------------------------------------------

    /** Crea el elemento <select> para la dificultad en cada contenedor de operación. */
    function createDifficultySelects() {
        const operations = [
            { id: 'sum', op: '+' },
            { id: 'sub', op: '-' },
            { id: 'mul', op: '*' }
        ];

        operations.forEach(opData => {
            const selectorDiv = document.getElementById(`difficulty-${opData.id}`);
            
            if (selectorDiv && selectorDiv.childElementCount === 0) {
                const select = document.createElement('select');
                select.name = `difficulty-${opData.id}`;
                select.id = `select-difficulty-${opData.id}`;
                
                DIFFICULTIES.forEach(diff => {
                    const option = document.createElement('option');
                    option.value = diff.min; 
                    option.textContent = diff.label;
                    select.appendChild(option);
                });
                selectorDiv.appendChild(select);
            }
        });
    }

    /** Obtiene la dificultad seleccionada para CADA operación ACTIVA. */
    function getGameSettings() { 
        const settings = {
            operations: [], 
            difficulties: {}, 
            time: parseInt(document.querySelector('input[name="time-limit"]:checked').value)
        };
        
        const opCheckboxes = document.querySelectorAll('#config-section input[type="checkbox"]');
        opCheckboxes.forEach(cb => {
            if (cb.checked && cb.id.startsWith('op-')) {
                const op = cb.value; 
                const opId = (op === '+') ? 'sum' : (op === '-') ? 'sub' : 'mul';
                
                const selectElement = document.getElementById(`select-difficulty-${opId}`);
                
                if (selectElement) {
                    const selectedDifficultyMin = parseInt(selectElement.value); 
                    settings.difficulties[op] = [selectedDifficultyMin]; 
                    settings.operations.push(op);
                }
            }
        });

        return settings;
    }

    /** Genera un número aleatorio basado en la dificultad específica de la OPERACIÓN actual. */
    function generateNumberForOperation(operator, settings) { 
        const difficultyMin = settings.difficulties[operator] ? settings.difficulties[operator][0] : 1;
        const diff = DIFFICULTIES.find(d => d.min === difficultyMin);
        const maxRange = diff ? diff.max : 9;
        
        return Math.floor(Math.random() * (maxRange - difficultyMin + 1)) + difficultyMin;
    }
    
    function setupProblem(settings, num1, num2, operator) { 
        let answer;

        if (operator === '-' && num1 < num2) {
            [num1, num2] = [num2, num1]; 
        }
        
        switch (operator) {
            case '+': answer = num1 + num2; break;
            case '-': answer = num1 - num2; break;
            case '*': answer = num1 * num2; break;
            default: answer = 0;
        }
        
        currentProblem = { num1, num2, operator, answer };
        const operatorDisplay = (operator === '*') ? 'x' : operator;

        selectedOperatorSpan.textContent = (operator === '+') ? 'SUMA' : (operator === '-') ? 'RESTA' : 'MULTIPLICACIÓN';
        plinkoNum1Span.textContent = num1;
        plinkoOpSignSpan.textContent = operatorDisplay;
        plinkoNum2Span.textContent = num2;
        
        problemArea.classList.remove('hidden');
        userAnswerInput.disabled = false;
        checkAnswerBtn.disabled = false;
        userAnswerInput.focus();
        
        if (timeLimit > 0) {
            startTimer();
        }
    }


    async function dropBallsSimulation() {
        const settings = getGameSettings();
        const activeOperators = settings.operations;
        
        if (activeOperators.length === 0) {
            feedbackMessage.textContent = 'ERROR: No hay operaciones seleccionadas.';
            feedbackMessage.className = 'message incorrect';
            endRound(); 
            return;
        }

        const selectedOperator = activeOperators[Math.floor(Math.random() * activeOperators.length)];

        feedbackMessage.textContent = '¡Cayendo las pelotas...!';
        feedbackMessage.className = 'message';
        
        numbersInSlots = Array.from({ length: NUM_SLOTS }, () => 
            generateNumberForOperation(selectedOperator, settings)
        );

        slots.forEach((slot, index) => {
            slot.textContent = numbersInSlots[index];
            slot.classList.remove('selected');
        });
        
        
        const index1 = await dropBall('ball-1');
        const num1 = numbersInSlots[index1];
        slots[index1].classList.add('selected');
        await new Promise(r => setTimeout(r, 700));

        const index2 = await dropBall('ball-2');
        const num2 = numbersInSlots[index2];
        slots[index2].classList.add('selected');

        feedbackMessage.textContent = '¡Resuelve la operación!';
        
        setupProblem(settings, num1, num2, selectedOperator);
    }
    
    // --- LÓGICA DE CONTROL ---

    function startTimer() { 
        clearInterval(countdownInterval);
        let timeLeft = timeLimit;
        timerDisplay.classList.remove('hidden');
        countdownSpan.textContent = timeLeft;

        countdownInterval = setInterval(() => {
            timeLeft--;
            countdownSpan.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                handleTimeUp();
            }
        }, 1000);
    }

    function handleTimeUp() { 
        if (currentProblem.answer !== undefined) {
            incorrectCount++;
            incorrectCountSpan.textContent = incorrectCount;
            feedbackMessage.textContent = `❌ ¡Tiempo! La respuesta correcta era ${currentProblem.answer}.`;
            feedbackMessage.className = 'message time-up';
            playSound(audioIncorrect);
            endRound();
        }
    }

    function stopTimer() {
        clearInterval(countdownInterval);
        timerDisplay.classList.add('hidden');
    }

    function endRound() {
        userAnswerInput.disabled = true;
        checkAnswerBtn.disabled = true;
        nextRoundBtn.classList.remove('hidden');
    }

    function checkAnswer() {
        if (currentProblem.answer === undefined) return;
        stopTimer();
        
        const userAnswer = parseInt(userAnswerInput.value);
        if (isNaN(userAnswer)) {
            feedbackMessage.textContent = 'Por favor, ingresa un número.';
            feedbackMessage.className = 'message incorrect';
            userAnswerInput.focus();
            return;
        }

        if (userAnswer === currentProblem.answer) {
            correctCount++;
            correctCountSpan.textContent = correctCount;
            feedbackMessage.textContent = '✅ ¡Correcto! ¡Bien hecho!';
            feedbackMessage.className = 'message correct';
            playSound(audioCorrect);
        } else {
            incorrectCount++;
            incorrectCountSpan.textContent = incorrectCount;
            feedbackMessage.textContent = `❌ ¡Incorrecto! La respuesta correcta era ${currentProblem.answer}.`;
            feedbackMessage.className = 'message incorrect';
            playSound(audioIncorrect);
        }
        endRound();
    }
    
    function startNewRound() {
        currentRound++;
        
        if (currentRound > MAX_ROUNDS) {
            showResults();
            return;
        }
        
        roundCountSpan.textContent = currentRound;
        userAnswerInput.value = '';
        problemArea.classList.add('hidden');
        plinkoNum1Span.textContent = '?';
        plinkoNum2Span.textContent = '?';
        plinkoOpSignSpan.textContent = '?';
        feedbackMessage.textContent = '';
        nextRoundBtn.classList.add('hidden');
        
        dropBallsSimulation(); 
    }

    function showResults() {
        gameSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        const finalScore = correctCount * 10 / MAX_ROUNDS;
        finalScoreP.textContent = `Tu calificación final es: ${finalScore.toFixed(1)} / 10`;
        if (correctCount === MAX_ROUNDS) {
            trophyArea.classList.remove('hidden');
        } else {
            trophyArea.classList.add('hidden');
        }
    }

    function resetGame() {
        currentRound = 0;
        correctCount = 0;
        incorrectCount = 0;
        timeLimit = 0;
        currentProblem = {};
        stopTimer();
        gameSection.classList.add('hidden');
        resultsSection.classList.add('hidden');
        configSection.classList.remove('hidden');
        roundCountSpan.textContent = '0';
        correctCountSpan.textContent = '0';
        incorrectCountSpan.textContent = '0';
        feedbackMessage.textContent = '';
        
        if (render) Render.stop(render); 
        plinkoCanvasContainer.innerHTML = ''; 

        // Restablecer la configuración predeterminada
        document.getElementById('op-suma').checked = true;
        document.getElementById('op-resta').checked = false;
        document.getElementById('op-multi').checked = false;
        document.querySelector('input[name="time-limit"][value="0"]').checked = true;
        
        // Asegurar que los selectores reflejen el estado inicial
        document.getElementById('difficulty-sum').classList.remove('hidden');
        document.getElementById('difficulty-sub').classList.add('hidden');
        document.getElementById('difficulty-mul').classList.add('hidden');
        
        slots.forEach(slot => {
            slot.textContent = '?';
            slot.classList.remove('selected');
        });
    }

    // --- MANEJO DE EVENTOS ---
    
    createDifficultySelects(); 

    document.getElementById('op-suma').addEventListener('change', (e) => {
        document.getElementById('difficulty-sum').classList.toggle('hidden', !e.target.checked);
    });
    document.getElementById('op-resta').addEventListener('change', (e) => {
        document.getElementById('difficulty-sub').classList.toggle('hidden', !e.target.checked);
    });
    document.getElementById('op-multi').addEventListener('change', (e) => {
        document.getElementById('difficulty-mul').classList.toggle('hidden', !e.target.checked);
    });


    startGameBtn.addEventListener('click', () => {
        const settings = getGameSettings();
        if (settings.operations.length === 0) {
            alert('Debes seleccionar al menos una operación para empezar.');
            return;
        }
        
        configSection.classList.add('hidden');
        gameSection.classList.remove('hidden');
        
        setupPhysicsBoard();
        
        timeLimit = settings.time;
        startNewRound();
    });

    checkAnswerBtn.addEventListener('click', checkAnswer);
    userAnswerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !userAnswerInput.disabled) {
            checkAnswer();
        }
    });
    
    nextRoundBtn.addEventListener('click', startNewRound);
    restartGameBtn.addEventListener('click', resetGame);
});