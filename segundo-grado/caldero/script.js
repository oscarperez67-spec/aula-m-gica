// script.js

let nivelActual = 1;
let retoActual = 1;
let buenasNivel = 0;
let malasNivel = 0;
let respuestaCorrecta = 0;

const sonidoAcierto = new Audio('acierto.mp3');
const sonidoError = new Audio('error.mp3');

function reproducirSonido(audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

// Elementos del DOM
const elNivel = document.getElementById('nivel-actual');
const elReto = document.getElementById('reto-actual');
const elBuenas = document.getElementById('score-buenas');
const elMalas = document.getElementById('score-malas');
const elInstruccion = document.getElementById('instruccion');
const elVNum1 = document.getElementById('v-num1');
const elVNum2 = document.getElementById('v-num2');
const elFrascos = document.getElementById('frascos-container');
const elCaldero = document.getElementById('caldero');
const areaJuego = document.getElementById('play-area');
const pantallaNivel = document.getElementById('level-screen');
const modalPdf = document.getElementById('modal-pdf');

// Lógica de validación (Sin llevadas)
function checarSumaSinLlevada(a, b) {
    let sA = a.toString().split('').reverse();
    let sB = b.toString().split('').reverse();
    for(let i=0; i < Math.max(sA.length, sB.length); i++) {
        if (parseInt(sA[i] || 0) + parseInt(sB[i] || 0) > 9) return false;
    }
    return true;
}

function checarRestaSinPrestada(a, b) {
    let sA = a.toString().split('').reverse();
    let sB = b.toString().split('').reverse();
    for(let i=0; i < sB.length; i++) {
        if (parseInt(sA[i] || 0) < parseInt(sB[i])) return false;
    }
    return true;
}

// FORMATOS VISUALES
function pintarVertical(num, esSegundoNum = false, operador = '') {
    let str = num.toString();
    let html = esSegundoNum ? `<span class="operador-v">${operador}</span>` : '';
    let clases = ['pos-u', 'pos-d', 'pos-c'];
    let len = str.length;
    for(let i=0; i<len; i++) {
        let clase = clases[len - 1 - i];
        html += `<span class="${clase}">${str[i]}</span>`;
    }
    return html;
}

// --- GENERADOR MATEMÁTICO CENTRALIZADO ---
// Esta función es usada tanto por el juego como por el PDF
function generarNumerosPorNivel(nivel) {
    let a, b, esSuma;
    let valido = false;

    while(!valido) {
        esSuma = Math.random() < 0.5;
        if(nivel === 1) { // 1 a 10
            a = Math.floor(Math.random() * 9) + 1;
            b = esSuma ? Math.floor(Math.random() * (10 - a)) + 1 : Math.floor(Math.random() * a) + 1;
            if(esSuma || a >= b) valido = true;
        } else if(nivel === 2) { // 11 a 50
            a = Math.floor(Math.random() * 40) + 10;
            b = Math.floor(Math.random() * 30) + 1;
            if(esSuma && a+b <= 50 && checarSumaSinLlevada(a,b)) valido = true;
            if(!esSuma && a-b >= 10 && checarRestaSinPrestada(a,b)) valido = true;
        } else if(nivel === 3) { // 51 a 100
            a = Math.floor(Math.random() * 50) + 40;
            b = Math.floor(Math.random() * 40) + 10;
            if(esSuma && a+b > 50 && a+b <= 100 && checarSumaSinLlevada(a,b)) valido = true;
            if(!esSuma && a-b >= 10 && checarRestaSinPrestada(a,b)) valido = true;
        } else if(nivel === 4) { // 101 a 999
            a = Math.floor(Math.random() * 700) + 100;
            b = Math.floor(Math.random() * 200) + 10;
            if(esSuma && a+b <= 999 && checarSumaSinLlevada(a,b)) valido = true;
            if(!esSuma && a-b >= 100 && checarRestaSinPrestada(a,b)) valido = true;
        }
    }
    return { a: a, b: b, esSuma: esSuma, res: esSuma ? a + b : a - b };
}

// --- FLUJO DEL JUEGO ---
function iniciarNivel() {
    retoActual = 1; buenasNivel = 0; malasNivel = 0;
    elNivel.innerText = nivelActual;
    actualizarMarcador();
    pantallaNivel.classList.add('oculto');
    areaJuego.classList.remove('oculto');
    generarProblemaJuego();
}

function generarProblemaJuego() {
    elFrascos.innerHTML = ''; elReto.innerText = retoActual;
    
    // Usamos el motor matemático
    const problema = generarNumerosPorNivel(nivelActual);
    let a = problema.a; let b = problema.b;
    let esSuma = problema.esSuma;
    respuestaCorrecta = problema.res;

    // Actualizar UI del juego
    elInstruccion.innerHTML = esSuma ? 
        `Mi poción es de <strong>${a}</strong> y si le sumo <strong>${b}</strong>, ¿de cuánto será?` :
        `Mi poción es de <strong>${a}</strong> y si le quito <strong>${b}</strong>, ¿cuánto quedará?`;
    
    elVNum1.innerHTML = pintarVertical(a);
    elVNum2.innerHTML = pintarVertical(b, true, esSuma ? '+' : '-');

    // Botones falsos
    let opciones = [respuestaCorrecta];
    while(opciones.length < 3) {
        let nFalso = respuestaCorrecta + (Math.floor(Math.random() * 11) - 5);
        if(nFalso > 0 && !opciones.includes(nFalso)) opciones.push(nFalso);
    }
    opciones.sort(() => Math.random() - 0.5).forEach(v => {
        const btn = document.createElement('button');
        btn.className = 'btn-frasco'; btn.innerText = "🧪 " + v;
        btn.onclick = () => verificar(v); elFrascos.appendChild(btn);
    });
}

function verificar(v) {
    if(v === respuestaCorrecta) { reproducirSonido(sonidoAcierto); buenasNivel++; } 
    else {
        reproducirSonido(sonidoError); malasNivel++;
        elCaldero.classList.add('explosion');
        setTimeout(() => elCaldero.classList.remove('explosion'), 400);
    }
    actualizarMarcador();
    if(retoActual >= 10) setTimeout(evaluar, 600);
    else { retoActual++; setTimeout(generarProblemaJuego, 500); }
}

function actualizarMarcador() { elBuenas.innerText = buenasNivel; elMalas.innerText = malasNivel; }

function evaluar() {
    areaJuego.classList.add('oculto'); pantallaNivel.classList.remove('oculto');
    const res = document.getElementById('resumen-nivel');
    const btns = document.getElementById('botones-nivel');
    btns.innerHTML = '';

    if(buenasNivel > 8) {
        res.innerHTML = `¡Genial! Tuviste <b>${buenasNivel}</b> aciertos.`;
        if(nivelActual < 4) {
            const b = document.createElement('button'); b.className = "btn-accion btn-verde";
            b.innerText = "Siguiente Nivel"; b.onclick = () => { nivelActual++; iniciarNivel(); };
            btns.appendChild(b);
        } else { res.innerHTML += "<br>¡Eres un Maestro Alquimista!"; }
    } else {
        res.innerHTML = `Tuviste <b>${buenasNivel}</b>. ¡Intenta de nuevo!`;
        const b1 = document.createElement('button'); b1.className = "btn-accion btn-verde"; b1.innerText = "Reintentar Nivel"; b1.onclick = iniciarNivel;
        const b2 = document.createElement('button'); b2.className = "btn-accion btn-rojo"; b2.innerText = "Reiniciar todo"; b2.onclick = () => { nivelActual = 1; iniciarNivel(); };
        btns.appendChild(b1); btns.appendChild(b2);
    }
}

// --- FUNCIONES DEL PDF ---
document.getElementById('btn-abrir-modal-pdf').onclick = () => {
    modalPdf.classList.remove('oculto');
};

function cerrarModalPDF() {
    modalPdf.classList.add('oculto');
}

// --- FUNCIONES DEL PDF (LABORATORIO DE POCIONES) ---
function descargarPDF(nivelSeleccionado) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título principal
    doc.setFont("helvetica", "bold"); 
    doc.setFontSize(22);
    doc.text("Laboratorio de Pociones - Ejercicios", 105, 20, { align: "center" });
    
    // --- NUEVO: Datos de la Escuela y Alumno ---
    doc.setFontSize(12); 
    doc.setFont("helvetica", "normal");
    
    doc.text("Escuela: __________________________________________", 20, 35);
    doc.text("Grado: _______    Grupo: _______", 135, 35);
    doc.text("Nombre del alumno: __________________________________________________", 20, 45);

    // Nivel de dificultad
    doc.setFontSize(12); 
    doc.setFont("helvetica", "italic");
    doc.text(`Nivel de dificultad: ${nivelSeleccionado}`, 20, 55);

    // Coordenadas iniciales desplazadas hacia abajo para dar espacio al encabezado
    let y = 75; 
    let x = 40; 
    
    doc.setFont("courier", "bold"); 
    doc.setFontSize(18);

    // Generar 12 problemas garantizados para ese nivel exacto
    for (let i = 1; i <= 12; i++) {
        let problema = generarNumerosPorNivel(nivelSeleccionado);
        let operador = problema.esSuma ? "+" : "-";

        doc.text(`${problema.a}`, x, y, { align: "right" });
        doc.text(`${operador} ${problema.b}`, x, y + 8, { align: "right" });
        doc.text("____", x, y + 9, { align: "right" }); 
        
        x += 60; 
        if (i % 3 === 0) { 
            x = 40; 
            y += 40; 
        }
    }

    doc.setFont("helvetica", "italic"); 
    doc.setFontSize(10);
    doc.text("¡Sigue practicando para ser un Maestro Alquimista!", 105, 280, { align: "center" });

    doc.save(`Ejercicios_Pociones_Nivel_${nivelSeleccionado}.pdf`);
    cerrarModalPDF(); // Cerramos el menú
}

// Enlace al menú principal
document.getElementById('btn-salir-header').onclick = () => {
    window.location.href = "../matematicas.html"; 
};

window.onload = iniciarNivel;