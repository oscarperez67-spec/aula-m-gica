// script.js

let ejerciciosGenerados = [];
const panelConfig = document.getElementById('panel-configuracion');
const panelAccion = document.getElementById('panel-accion');
const areaEjercicios = document.getElementById('area-ejercicios');
const panelResultados = document.getElementById('panel-resultados');

const nivelesBase = ['U', 'D', 'C', 'UM', 'DM'];

function generarNumero(dificultad) {
    if (dificultad === 'U') return Math.floor(Math.random() * 9) + 1;
    if (dificultad === 'D') return Math.floor(Math.random() * 90) + 10;
    if (dificultad === 'C') return Math.floor(Math.random() * 900) + 100;
    if (dificultad === 'UM') return Math.floor(Math.random() * 9000) + 1000;
    if (dificultad === 'DM') return Math.floor(Math.random() * 90000) + 10000;
    return 1;
}

document.getElementById('btn-generar').onclick = () => {
    let cant = parseInt(document.getElementById('cantidad').value);
    
    let operacionesActivas = [];
    if (document.getElementById('chk-suma').checked) operacionesActivas.push('suma');
    if (document.getElementById('chk-resta').checked) operacionesActivas.push('resta');
    if (document.getElementById('chk-multi').checked) operacionesActivas.push('multi');
    // CORRECCIÓN: Se cambió 'division' por 'div' para que coincida con el ID del HTML
    if (document.getElementById('chk-div').checked) operacionesActivas.push('div');

    if (operacionesActivas.length === 0) {
        alert("Por favor selecciona al menos una operación para empezar.");
        return;
    }

    areaEjercicios.innerHTML = '';
    ejerciciosGenerados = [];
    panelResultados.classList.add('oculto'); 

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
    let pos = ['U', 'D', 'C', 'UM', 'DM', 'CM']; 
    // Colores: U(Azul), D(Rojo), C(Verde), UM(Amarillo), DM(Rojo)
    let colores = ['color-u', 'color-d', 'color-c', 'color-um', 'color-dm', 'color-cm'];
    
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
    let a, b;
    let contenedor = document.createElement('div');
    contenedor.className = 'ejercicio-caja';
    contenedor.dataset.index = index;
    let html = '';

    if (tipo === 'suma' || tipo === 'resta') {
        a = generarNumero(dif);
        let maxIndex = nivelesBase.indexOf(dif);
        let minIndex = Math.max(0, maxIndex - 2); 
        let difBIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
        b = generarNumero(nivelesBase[difBIndex]);
        
        if (tipo === 'resta' && a < b) { let temp = a; a = b; b = temp; }

        let resCorrecto = tipo === 'suma' ? a + b : a - b;
        ejerciciosGenerados.push({ res: resCorrecto, tipo: tipo });
        let numCols = Math.max(a.toString().length, b.toString().length, resCorrecto.toString().length);
        
        if (numCols >= 5) contenedor.classList.add('compacto');

        html += armarEncabezadoUDC(numCols);
        html += armarFilaCeldas(a.toString(), numCols);
        html += armarFilaCeldas(b.toString(), numCols, tipo === 'suma' ? '+' : '-');
        html += `<div class="linea-res"></div>`;
        html += armarFilaInputs(resCorrecto.toString().length, 0, numCols, 'in-final', index);
    } 
    else if (tipo === 'multi') {
        a = generarNumero(dif);
        b = dif === 'D' ? (Math.floor(Math.random() * 99) + 1) : generarNumero(dif);
        let resCorrecto = a * b;
        ejerciciosGenerados.push({ res: resCorrecto, tipo: tipo });
        let strB = b.toString();
        let lenB = strB.length;
        let numCols = Math.max(a.toString().length, b.toString().length, resCorrecto.toString().length);

        if (numCols >= 5) contenedor.classList.add('compacto');

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
    // CORRECCIÓN: Se cambió 'division' por 'div' aquí también
    else if (tipo === 'div') {
        // Lógica de División Exacta
        let divisor = Math.floor(Math.random() * 8) + 2; // Divisor de 1 dígito (2 al 9)
        let cociente = generarNumero(dif); // Generar cociente según dificultad seleccionada
        let dividendo = divisor * cociente; // Asegura división exacta
        
        ejerciciosGenerados.push({ res: cociente, tipo: tipo });
        
        let strDivisor = divisor.toString();
        let strDividendo = dividendo.toString();
        let strCociente = cociente.toString();

        let numCols = strDividendo.length + strDivisor.length;

        if (numCols >= 5) contenedor.classList.add('compacto');

        // Fila 1: Cuadros de texto para el Cociente (arriba de la galera)
        let htmlInputs = `<div class="fila-grid" id="resp-${index}">`;
        htmlInputs += `<div class="celda"></div>`; // Espacio vacío sobre el divisor
        let paddingRes = strDividendo.length - strCociente.length;
        for(let i=0; i<paddingRes; i++) htmlInputs += `<div class="celda"></div>`;
        for(let i=0; i<strCociente.length; i++) {
            htmlInputs += `<div class="celda"><input type="text" maxlength="1" class="caja-input in-final" oninput="validarNumero(this)"></div>`;
        }
        htmlInputs += `</div>`;
        html += htmlInputs;

        // Fila 2: Casita de División (Galera) y Dividendo
        let htmlBracket = `<div class="fila-grid">`;
        htmlBracket += `<div class="celda borde-div-izq">${strDivisor}</div>`; // Divisor afuera
        for(let i=0; i<strDividendo.length; i++) {
            htmlBracket += `<div class="celda borde-div-sup">${strDividendo[i]}</div>`; // Dividendo adentro
        }
        htmlBracket += `</div>`;
        html += htmlBracket;
    }

    contenedor.innerHTML = html;
    areaEjercicios.appendChild(contenedor);
}

function validarNumero(input) { input.value = input.value.replace(/[^0-9]/g, ''); }

// BOTONES
document.getElementById('btn-calificar').onclick = () => {
    let cajas = document.querySelectorAll('.ejercicio-caja');
    let buenas = 0; let malas = 0;

    cajas.forEach((caja, index) => {
        let resCorrecta = ejerciciosGenerados[index].res.toString();
        let inputs = caja.querySelectorAll('.in-final');
        let resUsuario = '';
        inputs.forEach(i => resUsuario += i.value);
        
        if (resUsuario === resCorrecta) {
            inputs.forEach(i => { i.classList.remove('incorrecto'); i.classList.add('correcto'); });
            buenas++;
        } else {
            inputs.forEach(i => { i.classList.remove('correcto'); i.classList.add('incorrecto'); });
            malas++;
        }
    });

    let total = buenas + malas;
    let calificacion = (buenas / total) * 10;
    
    document.getElementById('calif-final').innerText = calificacion.toFixed(1);
    document.getElementById('buenas-final').innerText = buenas;
    document.getElementById('malas-final').innerText = malas;
    panelResultados.classList.remove('oculto');
};

document.getElementById('btn-reiniciar').onclick = () => {
    document.querySelectorAll('.caja-input').forEach(input => {
        input.value = ''; input.classList.remove('correcto', 'incorrecto');
    });
    panelResultados.classList.add('oculto');
};

document.getElementById('btn-nueva-seleccion').onclick = () => {
    panelAccion.classList.add('oculto');
    panelConfig.classList.remove('oculto');
    panelResultados.classList.add('oculto');
};

// --- DESCARGA PDF AUTO-AJUSTABLE ---
document.getElementById('btn-descargar-pdf').onclick = async () => {
    
    let inputsTotales = document.querySelectorAll('.caja-input');
    let estadoGuardado = [];
    inputsTotales.forEach(input => {
        estadoGuardado.push({ valor: input.value, corr: input.classList.contains('correcto'), incorr: input.classList.contains('incorrecto') });
        input.value = ''; input.classList.remove('correcto', 'incorrecto');
    });

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'letter');
    const cajas = Array.from(document.querySelectorAll('.ejercicio-caja'));
    
    for (let i = 0; i < cajas.length; i += 20) {
        if (i > 0) pdf.addPage(); 
        
        const chunk = cajas.slice(i, i + 20);
        
        const pdfContainer = document.createElement('div');
        pdfContainer.style.position = 'fixed';
        pdfContainer.style.left = '-9999px';
        pdfContainer.style.top = '0';
        pdfContainer.style.width = '780px'; 
        pdfContainer.style.backgroundColor = 'white';
        pdfContainer.style.padding = '10px'; 

        // ENCABEZADO (Solo en la hoja 1)
        if (i === 0) {
            const headerInfo = document.createElement('div');
            headerInfo.innerHTML = `
                <div style="font-family: Arial, sans-serif; font-size: 16px; margin-bottom: 10px;">
                    <h1 style="text-align: center; color: #1e3a8a; margin-top: 0; margin-bottom: 15px; font-size: 26px;">Ejercicios de Matemáticas</h1>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                        <div style="width: 60%;"><strong>Escuela:</strong> ____________________________________________</div>
                        <div style="width: 40%;"><strong>Grado:</strong> _______ &nbsp;&nbsp;&nbsp; <strong>Grupo:</strong> _______</div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <strong>Nombre del alumno:</strong> __________________________________________________________________
                    </div>
                </div>
            `;
            pdfContainer.appendChild(headerInfo);
        } else {
             const title = document.createElement('h2');
             title.innerText = "Ejercicios de Matemáticas (Continuación)";
             title.style.textAlign = 'center'; title.style.color = '#1e3a8a'; title.style.marginBottom = '15px'; title.style.marginTop = '0';
             pdfContainer.appendChild(title);
        }

        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
        grid.style.gap = '8px'; 

        chunk.forEach(caja => {
            let clone = caja.cloneNode(true);
            clone.style.padding = '5px 2px'; 
            clone.style.border = '1px solid #ccc';
            clone.querySelectorAll('.fila-grid').forEach(f => f.style.marginBottom = '0px');
            clone.querySelectorAll('.linea-res').forEach(l => l.style.margin = '2px 0');
            grid.appendChild(clone);
        });

        pdfContainer.appendChild(grid);
        document.body.appendChild(pdfContainer); 

        const canvas = await html2canvas(pdfContainer, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
        
        // CÁLCULO DE AUTOESCALADO
        const pageWidth = pdf.internal.pageSize.getWidth() - 20; 
        const pageHeight = pdf.internal.pageSize.getHeight() - 20; 
        const imgProps = pdf.getImageProperties(imgData);
        
        let finalWidth = pageWidth;
        let finalHeight = (imgProps.height * finalWidth) / imgProps.width;

        if (finalHeight > pageHeight) {
            let ratio = pageHeight / finalHeight;
            finalHeight = pageHeight;
            finalWidth = finalWidth * ratio;
        }

        let xOffset = 10 + (pageWidth - finalWidth) / 2;

        pdf.addImage(imgData, 'PNG', xOffset, 10, finalWidth, finalHeight);
        document.body.removeChild(pdfContainer);
    }

    pdf.save("Ejercicios_Matematicas.pdf");

    inputsTotales.forEach((input, index) => {
        input.value = estadoGuardado[index].valor;
        if (estadoGuardado[index].corr) input.classList.add('correcto');
        if (estadoGuardado[index].incorr) input.classList.add('incorrecto');
    });
};

document.getElementById('btn-menu').onclick = () => { window.location.href = "../matematicas.html"; };