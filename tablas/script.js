// script.js

let modoJuego = 'tiempo';
let totalOperaciones = 20;
let operaciones = [];
let indiceActual = 0;
let buenas = 0;
let malas = 0;
let listaDeErrores = []; 

let temporizador;
let tiempoRestante = 0;

const configPanel = document.getElementById('panel-configuracion');
const juegoPanel = document.getElementById('panel-juego');
const resultadosPanel = document.getElementById('panel-resultados');
const seccionTiempo = document.getElementById('seccion-tiempo');
const modalPdf = document.getElementById('modal-pdf');

// Alternar vista del tiempo
document.querySelectorAll('input[name="modo"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        modoJuego = e.target.value;
        if (modoJuego === 'tiempo') seccionTiempo.classList.remove('oculto');
        else seccionTiempo.classList.add('oculto');
    });
});

// Empezar el Juego
document.getElementById('btn-empezar').onclick = () => {
    let tablaInicio = parseInt(document.getElementById('tabla-inicio').value);
    let tablaFin = parseInt(document.getElementById('tabla-fin').value);
    totalOperaciones = parseInt(document.getElementById('cantidad-ops').value);
    
    if (tablaInicio > tablaFin) { let temp = tablaInicio; tablaInicio = tablaFin; tablaFin = temp; }

    operaciones = [];
    for (let i = 0; i < totalOperaciones; i++) {
        let f1, f2;
        let esValida = false;
        let intentos = 0;

        while (!esValida && intentos < 100) {
            f1 = Math.floor(Math.random() * (tablaFin - tablaInicio + 1)) + tablaInicio;
            f2 = Math.floor(Math.random() * 10) + 1;
            
            let repetida = false;
            let inicioBloque = Math.floor(i / 5) * 5; 
            for(let j = inicioBloque; j < i; j++){
                if(operaciones[j].f1 === f1 && operaciones[j].f2 === f2) {
                    repetida = true; break;
                }
            }
            if(!repetida) esValida = true;
            intentos++;
        }
        
        operaciones.push({ f1: f1, f2: f2, res: f1 * f2 });
    }

    indiceActual = 0; buenas = 0; malas = 0;
    listaDeErrores = []; 
    actualizarMarcadores();

    if (modoJuego === 'tiempo') {
        let minutos = parseInt(document.getElementById('tiempo-limite').value);
        tiempoRestante = minutos * 60;
        document.getElementById('caja-tiempo').classList.remove('oculto');
        actualizarReloj();
        temporizador = setInterval(relojTick, 1000);
    } else {
        document.getElementById('caja-tiempo').classList.add('oculto');
    }

    configPanel.classList.add('oculto');
    juegoPanel.classList.remove('oculto');
    mostrarOperaciones();
};

function mostrarOperaciones() {
    const contenedor = document.getElementById('contenedor-operaciones');
    contenedor.innerHTML = ''; 

    let limite = Math.min(indiceActual + 5, totalOperaciones);

    for (let i = indiceActual; i < limite; i++) {
        let op = operaciones[i];
        let div = document.createElement('div');
        div.className = 'operacion-fila';
        div.innerHTML = `
            <span>${op.f1}</span>
            <span style="color:#d946ef;">x</span>
            <span>${op.f2}</span>
            <span>=</span>
            <input type="text" inputmode="numeric" maxlength="3" class="operacion-input" data-index="${i}">
        `;
        contenedor.appendChild(div);
    }
    
    let porcentaje = (indiceActual / totalOperaciones) * 100;
    document.getElementById('barra-progreso').style.width = porcentaje + '%';
    document.getElementById('texto-progreso').innerText = `${indiceActual}/${totalOperaciones}`;

    setTimeout(() => {
        let primerInput = document.querySelector('.operacion-input');
        if(primerInput) primerInput.focus();
    }, 100);

    document.querySelectorAll('.operacion-input').forEach(input => {
        input.addEventListener('input', function() { this.value = this.value.replace(/[^0-9]/g, ''); });
    });
}

document.getElementById('btn-continuar').onclick = () => {
    let inputs = document.querySelectorAll('.operacion-input');
    
    let todosContestados = true;
    inputs.forEach(input => { if (input.value.trim() === '') todosContestados = false; });

    if (!todosContestados) {
        alert("¡Espera! Debes contestar las 5 operaciones antes de continuar.");
        return;
    }

    inputs.forEach(input => {
        let idx = input.getAttribute('data-index');
        let op = operaciones[idx];
        let respuestaCorrecta = op.res;
        let respuestaNino = parseInt(input.value);
        
        if (respuestaNino === respuestaCorrecta) {
            buenas++;
        } else {
            malas++;
            listaDeErrores.push(`${op.f1} x ${op.f2} = ${respuestaCorrecta} (Tú pusiste: ${isNaN(respuestaNino) ? 'Nada' : respuestaNino})`);
        }
    });

    actualizarMarcadores();
    indiceActual += 5;

    if (indiceActual >= totalOperaciones) finalizarJuego(true);
    else mostrarOperaciones();
};

function relojTick() {
    tiempoRestante--;
    actualizarReloj();
    if (tiempoRestante <= 0) {
        clearInterval(temporizador);
        alert("¡Se acabó el tiempo!");
        finalizarJuego(false);
    }
}

function actualizarReloj() {
    let m = Math.floor(tiempoRestante / 60);
    let s = tiempoRestante % 60;
    document.getElementById('vivo-tiempo').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
}

function actualizarMarcadores() {
    document.getElementById('vivo-buenas').innerText = buenas;
    document.getElementById('vivo-malas').innerText = malas;
}

function finalizarJuego(completado) {
    if (modoJuego === 'tiempo') clearInterval(temporizador);
    juegoPanel.classList.add('oculto');
    resultadosPanel.classList.remove('oculto');

    if (completado) {
        document.getElementById('titulo-resultado').innerText = "¡Reto Completado! 🎉";
        document.getElementById('titulo-resultado').style.color = "#16a34a"; 
    } else {
        document.getElementById('titulo-resultado').innerText = "¡Tiempo Agotado! ⏰";
        document.getElementById('titulo-resultado').style.color = "#dc2626"; 
    }

    let calificacion = (buenas / totalOperaciones) * 10;
    document.getElementById('res-buenas').innerText = buenas;
    document.getElementById('res-malas').innerText = malas;
    document.getElementById('res-calif').innerText = calificacion.toFixed(1);
    
    document.getElementById('barra-progreso').style.width = '100%';
    document.getElementById('texto-progreso').innerText = `${totalOperaciones}/${totalOperaciones}`;

    const divErrores = document.getElementById('contenedor-errores');
    const ulErrores = document.getElementById('lista-errores');
    ulErrores.innerHTML = ''; 

    if (listaDeErrores.length > 0) {
        divErrores.classList.remove('oculto');
        listaDeErrores.forEach(err => {
            let li = document.createElement('li');
            li.innerText = err;
            ulErrores.appendChild(li);
        });
    } else {
        divErrores.classList.add('oculto'); 
    }
}

document.getElementById('btn-reiniciar').onclick = () => {
    resultadosPanel.classList.add('oculto');
    configPanel.classList.remove('oculto');
};

document.getElementById('btn-menu').onclick = () => {
    if (!juegoPanel.classList.contains('oculto')) {
        if (!confirm("¿Seguro que quieres salir? Se perderá tu progreso actual.")) return;
    }
    window.location.href = "../index.html"; 
};

// ==========================================
// LÓGICA DEL PDF DE TABLAS (60 OPERACIONES)
// ==========================================
document.getElementById('btn-abrir-pdf').onclick = () => modalPdf.classList.remove('oculto');
document.getElementById('btn-cerrar-pdf').onclick = () => modalPdf.classList.add('oculto');

document.getElementById('btn-generar-pdf').onclick = () => {
    let tInicio = parseInt(document.getElementById('pdf-inicio').value);
    let tFin = parseInt(document.getElementById('pdf-fin').value);
    if (tInicio > tFin) { let temp = tInicio; tInicio = tFin; tFin = temp; }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'letter'); 
    
    // Encabezado
    doc.setFont("helvetica", "bold"); doc.setFontSize(22);
    doc.text("Ejercicios de Tablas de Multiplicar", 105, 20, { align: "center" });
    
    doc.setFontSize(12); doc.setFont("helvetica", "normal");
    doc.text("Escuela: __________________________________________", 20, 35);
    doc.text("Grado: _______    Grupo: _______", 135, 35);
    doc.text("Nombre del alumno: __________________________________________________", 20, 45);

    let txtRango = tInicio === tFin ? `Práctica de la Tabla del ${tInicio}` : `Práctica de Tablas mezcladas (del ${tInicio} al ${tFin})`;
    doc.setFont("helvetica", "italic"); doc.text(txtRango, 20, 55);

    // Generar 60 operaciones
    let opsPdf = [];
    for(let i=0; i<60; i++) {
        let f1, f2, repetida = true, intentos = 0;
        let combinacionesPosibles = (tFin - tInicio + 1) * 10;

        while(repetida && intentos < 100) {
            f1 = Math.floor(Math.random() * (tFin - tInicio + 1)) + tInicio;
            f2 = Math.floor(Math.random() * 10) + 1;
            
            repetida = opsPdf.some(o => o.f1 === f1 && o.f2 === f2);
            if(opsPdf.length >= combinacionesPosibles) repetida = false; 
            intentos++;
        }
        opsPdf.push({f1, f2});
    }
    
    // Dibujar 4 columnas x 15 filas
    doc.setFont("courier", "bold"); 
    doc.setFontSize(14); 
    
    let startY = 75; 
    let startX = 15; 
    let colWidth = 48; // Espacio amplio entre columnas para que no se vean amontonadas horizontalmente
    let rowHeight = 12.5; 
    
    for(let i=0; i<60; i++) {
        let col = i % 4; 
        let row = Math.floor(i / 4); 
        
        let x = startX + (col * colWidth);
        let y = startY + (row * rowHeight);
        
        // CORRECCIÓN: La rayita vuelve a estar pegada al igual (= ____)
        doc.text(`${opsPdf[i].f1} x ${opsPdf[i].f2} = ____`, x, y);
    }
    
    doc.save("Tablas_Multiplicar_60.pdf");
    modalPdf.classList.add('oculto');
};