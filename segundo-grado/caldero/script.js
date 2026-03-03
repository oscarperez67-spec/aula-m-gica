// script.js

let buenas = 0;
let malas = 0;
let respuestaCorrecta = 0;
const metaBuenas = 20; // ¡Aumentado a 20!
let nivelSubido = false; // Variable para saber si ya mostramos el letrero

const sonidoAcierto = new Audio('acierto.mp3');
const sonidoError = new Audio('error.mp3');

function reproducirSonido(audio) {
    audio.currentTime = 0; 
    audio.play().catch(e => console.log("Audio bloqueado temporalmente."));
}

const scoreBuenasEl = document.getElementById('score-buenas');
const scoreMalasEl = document.getElementById('score-malas');
const instruccionEl = document.getElementById('instruccion');
const frascosContainer = document.getElementById('frascos-container');
const calderoEl = document.getElementById('caldero');
const playArea = document.getElementById('play-area');
const endScreen = document.getElementById('end-screen');
const alertaNivelEl = document.getElementById('alerta-nivel'); // Referencia a la alerta
const btnReinicio = document.getElementById('btn-reinicio');
const btnMenu = document.getElementById('btn-menu');

function inicializarJuego() {
    buenas = 0;
    malas = 0;
    nivelSubido = false; // Reiniciamos el nivel
    actualizarMarcador();
    
    calderoEl.className = 'caldero-normal';
    playArea.classList.remove('oculto');
    endScreen.classList.add('oculto');
    alertaNivelEl.classList.add('oculto'); // Ocultamos la alerta al iniciar
    
    generarProblema();
}

function generarProblema() {
    frascosContainer.innerHTML = ''; 
    
    const esSuma = Math.random() < 0.5; 
    let numeroBase, objetivo;

    if (esSuma) {
        if (buenas < 10) { // Dificultad sube al llegar a 10
            objetivo = Math.floor(Math.random() * 15) + 6; 
            numeroBase = Math.floor(Math.random() * (objetivo - 1)) + 1;
        } else {
            objetivo = Math.floor(Math.random() * 51) + 50; 
            numeroBase = Math.floor(Math.random() * (objetivo - 10)) + 10; 
        }
        respuestaCorrecta = objetivo - numeroBase;
        instruccionEl.innerHTML = `¡Poción de <strong>${objetivo}</strong>!<br>Tienes <strong>${numeroBase}</strong>, suma la poción correcta:`;
    } else {
        if (buenas < 10) { // Dificultad sube al llegar a 10
            numeroBase = Math.floor(Math.random() * 15) + 6; 
            objetivo = Math.floor(Math.random() * (numeroBase - 1)) + 1;
        } else {
            numeroBase = Math.floor(Math.random() * 51) + 50; 
            objetivo = Math.floor(Math.random() * (numeroBase - 10)) + 10; 
        }
        respuestaCorrecta = numeroBase - objetivo;
        instruccionEl.innerHTML = `¡Poción de <strong>${objetivo}</strong>!<br>Tienes <strong>${numeroBase}</strong>, resta la poción correcta:`;
    }

    let opciones = [respuestaCorrecta];
    while (opciones.length < 3) {
        // La variación cambia también a partir de 10
        let variacion = buenas < 10 ? (Math.floor(Math.random() * 5) - 2) : (Math.floor(Math.random() * 21) - 10);
        let opcionFalsa = respuestaCorrecta + variacion;
        
        if (opcionFalsa !== respuestaCorrecta && opcionFalsa > 0 && !opciones.includes(opcionFalsa)) {
            opciones.push(opcionFalsa);
        }
    }

    opciones.sort(() => Math.random() - 0.5);

    opciones.forEach(valor => {
        const btn = document.createElement('button');
        btn.className = 'btn-frasco';
        btn.innerHTML = `🧪 ${valor}`;
        btn.onclick = () => verificarRespuesta(valor);
        frascosContainer.appendChild(btn);
    });
}

function verificarRespuesta(valorSeleccionado) {
    if (valorSeleccionado === respuestaCorrecta) {
        reproducirSonido(sonidoAcierto);
        buenas++;
        actualizarMarcador();
        
        // --- LÓGICA DE SUBIDA DE NIVEL ---
        if (buenas === 10 && !nivelSubido) {
            nivelSubido = true;
            mostrarAlertaNivel();
        }

        if (buenas >= metaBuenas) {
            finalizarJuego();
        } else {
            generarProblema(); 
        }
    } else {
        reproducirSonido(sonidoError);
        malas++;
        actualizarMarcador();
        animarExplosion();
        
        setTimeout(() => {
            generarProblema();
        }, 500);
    }
}

// Función para mostrar el cartel de nivel por 3 segundos
function mostrarAlertaNivel() {
    alertaNivelEl.classList.remove('oculto');
    setTimeout(() => {
        alertaNivelEl.classList.add('oculto');
    }, 3000); // 3000 milisegundos = 3 segundos
}

function animarExplosion() {
    calderoEl.classList.add('explosion');
    setTimeout(() => {
        calderoEl.classList.remove('explosion');
    }, 400); 
}

function actualizarMarcador() {
    scoreBuenasEl.innerText = buenas;
    scoreMalasEl.innerText = malas;
}

function finalizarJuego() {
    playArea.classList.add('oculto');
    endScreen.classList.remove('oculto');
    calderoEl.className = 'caldero-ganador'; 
    document.getElementById('mensaje-final').innerText = `¡Completaste las 20 pociones!\nObtuviste ${buenas} buenas y ${malas} malas.`;
    endScreen.insertBefore(calderoEl, endScreen.childNodes[2]);
}

btnReinicio.onclick = () => {
    document.getElementById('caldero-container').appendChild(calderoEl);
    inicializarJuego();
};

btnMenu.onclick = () => {
    alert("../matematicas.html");
};

window.onload = inicializarJuego;