// script.js

let ejerciciosGenerados = [];
const panelConfig = document.getElementById('panel-configuracion');
const panelAccion = document.getElementById('panel-accion');
const areaEjercicios = document.getElementById('area-ejercicios');

function generarNumero(dificultad) {
    if (dificultad === 'U') return Math.floor(Math.random() * 9) + 1;
    if (dificultad === 'D') return Math.floor(Math.random() * 90) + 10;
    if (dificultad === 'C') return Math.floor(Math.random() * 900) + 100;
}

document.getElementById('btn-generar').onclick = () => {
    let cant = parseInt(document.getElementById('cantidad').value);
    if (cant < 10) cant = 10;
    if (cant > 20) cant = 20;

    let operacionesActivas = [];
    if (document.getElementById('chk-suma').checked) operacionesActivas.push('suma');
    if (document.getElementById('chk-resta').checked) operacionesActivas.push('resta');
    if (document.getElementById('chk-multi').checked) operacionesActivas.push('multi');

    if (operacionesActivas.length === 0) {
        alert("Por favor selecciona al menos una operación para empezar.");
        return;
    }

    areaEjercicios.innerHTML = '';
    ejerciciosGenerados = [];

    for (let i = 0; i < cant; i++) {
        let tipo = operacionesActivas[Math.floor(Math.random() * operacionesActivas.length)];
        let dif = document.getElementById(`dif-${tipo}`).value;
        generarHTML(tipo, dif, i);
    }

    panelConfig.classList.add('oculto');
    panelAccion.classList.remove('oculto');
};

function armarEncabezadoUDC(columnasTotales) {
    let html = `<div class="fila-grid">`;
    let pos = ['U', 'D', 'C', 'UM', 'DM']; 
    let colores = ['color-u', 'color-d', 'color-c', 'color-um', 'color-d'];
    
    for(let i = columnasTotales - 1; i >= 0; i--) {
        let letra = pos[i] || '';
        let color = colores[i] || '';
        html += `<div class="celda encabezado ${color}">${letra}</div>`;
    }
    html += `</div>`;
    return html;
}

function armarFilaCeldas(numeroStr, columnasTotales, operador = '') {
    let html = `<div class="fila-grid">`;
    if (operador) html += `<div class="operador-pos">${operador}</div>`;
    
    let espaciosVacios = columnasTotales - numeroStr.length;
    for(let i=0; i<espaciosVacios; i++) html += `<div class="celda"></div>`;
    for(let i=0; i<numeroStr.length; i++) html += `<div class="celda">${numeroStr[i]}</div>`;
    
    html += `</div>`;
    return html;
}

function armarFilaInputs(numCajas, paddingDerecho, columnasTotales, claseFinal = '', idIndex = null) {
    let idStr = idIndex !== null ? `id="resp-${idIndex}"` : '';
    let html = `<div class="fila-grid" ${idStr}>`;
    
    let paddingIzquierdo = columnasTotales - numCajas - paddingDerecho;
    for(let i=0; i<paddingIzquierdo; i++) html += `<div class="celda"></div>`;
    for(let i=0; i<numCajas; i++) html += `<div class="celda"><input type="text" maxlength="1" class="caja-input ${claseFinal}" oninput="validarNumero(this)"></div>`;
    for(let i=0; i<paddingDerecho; i++) html += `<div class="celda"></div>`;
    
    html += `</div>`;
    return html;
}

function generarHTML(tipo, dif, index) {
    let a = generarNumero(dif);
    let b = generarNumero(dif);
    
    if (tipo === 'resta' && a < b) { let temp = a; a = b; b = temp; }

    let contenedor = document.createElement('div');
    contenedor.className = 'ejercicio-caja';
    contenedor.dataset.index = index;
    let html = '';

    if (tipo === 'suma' || tipo === 'resta') {
        let resCorrecto = tipo === 'suma' ? a + b : a - b;
        ejerciciosGenerados.push({ res: resCorrecto, tipo: tipo });
        let numCols = Math.max(a.toString().length, b.toString().length, resCorrecto.toString().length);

        html += armarEncabezadoUDC(numCols);
        html += armarFilaCeldas(a.toString(), numCols);
        html += armarFilaCeldas(b.toString(), numCols, tipo === 'suma' ? '+' : '-');
        html += `<div class="linea-res"></div>`;
        html += armarFilaInputs(resCorrecto.toString().length, 0, numCols, 'in-final', index);
    } 
    else if (tipo === 'multi') {
        let resCorrecto = a * b;
        ejerciciosGenerados.push({ res: resCorrecto, tipo: tipo });
        let strB = b.toString();
        let lenB = strB.length;
        let numCols = Math.max(a.toString().length, b.toString().length, resCorrecto.toString().length);

        html += armarEncabezadoUDC(numCols);
        html += armarFilaCeldas(a.toString(), numCols);
        html += armarFilaCeldas(b.toString(), numCols, 'x');
        html += `<div class="linea-res"></div>`;
        
        if (lenB > 1) {
            for(let i=0; i<lenB; i++) {
                let digitoMultiplicador = parseInt(strB[lenB - 1 - i]);
                let pasoParcial = a * digitoMultiplicador;
                html += armarFilaInputs(pasoParcial.toString().length, i, numCols, ''); 
            }
            html += `<div class="linea-res"></div>`;
        }
        
        html += armarFilaInputs(resCorrecto.toString().length, 0, numCols, 'in-final', index);
    }

    contenedor.innerHTML = html;
    areaEjercicios.appendChild(contenedor);
}

function validarNumero(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

// BOTONES
document.getElementById('btn-calificar').onclick = () => {
    let cajas = document.querySelectorAll('.ejercicio-caja');
    cajas.forEach((caja, index) => {
        let resCorrecta = ejerciciosGenerados[index].res.toString();
        let inputs = caja.querySelectorAll('.in-final');
        let resUsuario = '';
        inputs.forEach(i => resUsuario += i.value);
        
        if (resUsuario === resCorrecta) {
            inputs.forEach(i => { i.classList.remove('incorrecto'); i.classList.add('correcto'); });
        } else {
            inputs.forEach(i => { i.classList.remove('correcto'); i.classList.add('incorrecto'); });
        }
    });
};

document.getElementById('btn-reiniciar').onclick = () => {
    document.querySelectorAll('.caja-input').forEach(input => {
        input.value = '';
        input.classList.remove('correcto', 'incorrecto');
    });
};

document.getElementById('btn-nueva-seleccion').onclick = () => {
    panelAccion.classList.add('oculto');
    panelConfig.classList.remove('oculto');
};

// --- FUNCIÓN DE DESCARGA PDF TAMAÑO CARTA (4 por fila) ---
document.getElementById('btn-descargar-pdf').onclick = () => {
    
    // 1. Creamos un contenedor virtual oculto con proporciones exactas para Tamaño Carta
    const pdfContainer = document.createElement('div');
    pdfContainer.style.position = 'fixed';
    pdfContainer.style.left = '-9999px'; // Oculto fuera de la pantalla
    pdfContainer.style.top = '0';
    pdfContainer.style.width = '850px'; // Ancho ideal para tamaño carta
    pdfContainer.style.backgroundColor = 'white';
    pdfContainer.style.padding = '30px';

    // 2. Agregamos el título al PDF
    const title = document.createElement('h1');
    title.innerText = "Ejercicios de Matemáticas";
    title.style.textAlign = 'center';
    title.style.color = '#1e3a8a';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.marginBottom = '40px';
    pdfContainer.appendChild(title);

    // 3. Creamos una cuadrícula estricta de 4 columnas
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Exactamente 4 por línea
    grid.style.gap = '25px';

    // 4. Clonamos los ejercicios actuales y limpiamos sus respuestas
    const cajas = document.querySelectorAll('.ejercicio-caja');
    cajas.forEach(caja => {
        let clone = caja.cloneNode(true);
        // Limpiamos los cuadros de entrada para que el PDF salga en blanco
        clone.querySelectorAll('.caja-input').forEach(input => {
            input.value = '';
            input.classList.remove('correcto', 'incorrecto');
        });
        grid.appendChild(clone);
    });

    pdfContainer.appendChild(grid);
    document.body.appendChild(pdfContainer); // Lo pegamos al body para que html2canvas lo lea

    // 5. Generamos el PDF
    const { jsPDF } = window.jspdf;
    html2canvas(pdfContainer, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'letter'); // "letter" = Tamaño Carta
        const pdfWidth = pdf.internal.pageSize.getWidth() - 20; // Márgenes de 10mm
        const imgProps = pdf.getImageProperties(imgData);
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth, pdfHeight);
        pdf.save("Ejercicios_Matematicas.pdf");

        // 6. Destruimos el contenedor virtual para no dejar basura en la página
        document.body.removeChild(pdfContainer);
    });
};

// Enlace al menú principal
document.getElementById('btn-menu').onclick = () => {
    window.location.href = "../matematicas.html"; 
};