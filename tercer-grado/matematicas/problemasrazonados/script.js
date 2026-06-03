const problems = [
    {
    "pregunta": "Juanita tenía 250 manzanas. Compró 150 más y dio 120 a su hermana. ¿Cuántas manzanas le quedan?",
    "opciones": ["260", "270", "280", "300"],
    "respuesta": "280"
  },
  {
    "pregunta": "Carlos tenía 500 chocolates. Comió 100 y luego compró 200 más. ¿Cuántos chocolates tiene ahora?",
    "opciones": ["500", "450", "550", "600"],
    "respuesta": "600"
  },
  {
    "pregunta": "Marta tenía 300 boletos para el cine. Vendió 120 y luego compró 50 más. ¿Cuántos boletos tiene ahora?",
    "opciones": ["200", "220", "230", "240"],
    "respuesta": "230"
  },
  {
    "pregunta": "Si un libro tiene 400 páginas y ya leíste 100, ¿cuántas páginas te faltan si lees 50 diarias durante 3 días?",
    "opciones": ["150", "160", "170", "180"],
    "respuesta": "150"
  },
  {
    "pregunta": "Un grupo de estudiantes tiene 60 alumnos. 20 se fueron y luego llegaron 10 más. ¿Cuántos estudiantes hay ahora?",
    "opciones": ["40", "45", "50", "55"],
    "respuesta": "50"
  },
  {
    "pregunta": "María tenía 250 naranjas. Compró 100 más y le dio 50 a su amiga. ¿Cuántas naranjas le quedan?",
    "opciones": ["240", "280", "300", "350"],
    "respuesta": "300"
  },
  {
    "pregunta": "Si tienes 400 pesos, compras una barra de chocolate por 100 pesos y una bebida por 50 pesos, ¿cuánto dinero te queda?",
    "opciones": ["150", "200", "220", "250"],
    "respuesta": "250"
  },
  {
    "pregunta": "Si un paquete contiene 100 cartas y un niño compra 4 paquetes, pero pierde 10 cartas, ¿cuántas cartas tiene ahora?",
    "opciones": ["370", "380", "390", "400"],
    "respuesta": "390"
  },
  {
    "pregunta": "En una tienda hay 200 camisetas. Se vendieron 50 y luego llegaron 30 más. ¿Cuántas camisetas hay ahora en la tienda?",
    "opciones": ["180", "190", "200", "220"],
    "respuesta": "180"
  },
  {
    "pregunta": "En una granja hay 300 vacas. Si venden 100 vacas y luego nacen 20 terneros, ¿cuántas vacas hay en total ahora?",
    "opciones": ["210", "220", "230", "230"],
    "respuesta": "220"
  },
  {
    "pregunta": "Un hombre tenía 200 monedas. Compró 50 boletos para un sorteo y luego gastó 30 monedas más en una tienda. ¿Cuántas monedas le quedan?",
    "opciones": ["120", "140", "130", "100"],
    "respuesta": "120"
  },
  {
    "pregunta": "Si un supermercado tiene 500 manzanas y vende 150, luego compra 100 más, ¿cuántas manzanas tiene ahora?",
    "opciones": ["450", "500", "600", "550"],
    "respuesta": "450"
  },
  {
    "pregunta": "En un torneo, Juan ganó 30 puntos en la primera ronda y 20 en la segunda. Luego perdió 10 puntos. ¿Cuántos puntos tiene ahora?",
    "opciones": ["35", "40", "45", "50"],
    "respuesta": "40"
  },
  {
    "pregunta": "Una tienda vendió 100 camisetas en la mañana y 80 en la tarde. Si en total tenía 300 camisetas ¿cuántas camisetas le quedan?",
    "opciones": ["130", "100", "90", "120"],
    "respuesta": "120"
  },
  {
    "pregunta": "Si en un jardín hay 500 flores y se plantan 200 más, pero 50 se marchitaron, ¿cuántas flores quedan?",
    "opciones": ["500", "550", "600", "650"],
    "respuesta": "650"
  },
  {
    "pregunta": "Si en una caja hay 300 pelotas, 120 son rojas y el resto son azules, ¿cuántas pelotas azules hay en la caja?",
    "opciones": ["180", "200", "220", "250"],
    "respuesta": "180"
  },
  {
    "pregunta": "Pedro tenía 150 monedas. Si gastó 50 en un juego y luego ahorró 30, ¿cuánto dinero tiene ahora?",
    "opciones": ["100", "110", "120", "130"],
    "respuesta": "130"
  },
  {
    "pregunta": "María tenía 200 boletos para una rifa. Vendió 70 y luego compró 30 más. ¿Cuántos boletos tiene ahora?",
    "opciones": ["150", "160", "170", "180"],
    "respuesta": "160"
  },
  {
    "pregunta": "Un camión tenía 100 paquetes. Si descargaron 40 y luego llegaron 20 más, ¿cuántos paquetes hay en el camión?",
    "opciones": ["60", "70", "75", "80"],
    "respuesta": "80"
  },
  {
    "pregunta": "Un grupo de 150 niños fue al parque. 50 de ellos se fueron antes de la hora y luego llegaron 20 más. ¿Cuántos niños quedaron en el parque?",
    "opciones": ["100", "110", "130", "120"],
    "respuesta": "120"
  },
  {
    "pregunta": "En una tienda de ropa había 250 prendas. Se vendieron 80 y luego llegaron 30 más. ¿Cuántas prendas hay ahora en la tienda?",
    "opciones": ["180", "190", "200", "210"],
    "respuesta": "200"
  },
  {
    "pregunta": "Un grupo de 500 personas viajó en un autobús. 150 se bajaron en la primera parada y luego 50 más se bajaron en la siguiente. ¿Cuántas personas quedan en el autobús?",
    "opciones": ["400", "300", "350", "250"],
    "respuesta": "300"
  },
  {
    "pregunta": "Si una granja tiene 200 gallinas y compran 50 más, pero 30 de ellas se escapan, ¿cuántas gallinas quedan?",
    "opciones": ["200", "230", "220", "250"],
    "respuesta": "220"
  },
  {
    "pregunta": "Si tienes 1000 pesos y compras un artículo que cuesta 400 y otro que cuesta 250, ¿cuánto dinero te queda?",
    "opciones": ["250", "400", "300", "350"],
    "respuesta": "350"
  },
  {
    "pregunta": "En una fábrica de juguetes, se produjeron 600 juguetes. Se vendieron 200, pero luego llegaron 50 más. ¿Cuántos juguetes hay ahora en la fábrica?",
    "opciones": ["450", "400", "500", "550"],
    "respuesta": "450"
  },
{
    "pregunta": "En una caja hay 400 bolas rojas. Compraron 200 más y regalaron 100. ¿Cuántas bolas rojas hay ahora?",
    "opciones": ["600", "500", "400", "300"],
    "respuesta": "500"
},
{
    "pregunta": "María tenía 320 lápices. Compró 150 más y perdió 50. ¿Cuántos lápices le quedan?",
    "opciones": ["300", "400", "350", "420"],
    "respuesta": "420"
},
{
    "pregunta": "Un agricultor tenía 500 manzanas. Vendió 200 y luego compró 150 más. ¿Cuántas manzanas tiene ahora?",
    "opciones": ["400", "450", "300", "350"],
    "respuesta": "450"
},
{
    "pregunta": "Juan tiene 360 galletas. Le dio 120 a su amiga y compró 200 más. ¿Cuántas galletas tiene ahora?",
    "opciones": ["420", "460", "440", "480"],
    "respuesta": "440"
},
{
    "pregunta": "Un caracol subió 30 metros cada día durante 10 días. ¿Cuántos metros subió en total?",
    "opciones": ["300", "400", "350", "500"],
    "respuesta": "300"
},
{
    "pregunta": "Sofía compró 120 entradas para el cine. Vendió 70 y luego compró 150 más. ¿Cuántas entradas tiene ahora?",
    "opciones": ["220", "250", "300", "200"],
    "respuesta": "200"
},
{
    "pregunta": "En una escuela hay 450 alumnos. Se inscribieron 250 más y se dieron de baja 100. ¿Cuántos alumnos hay ahora?",
    "opciones": ["500", "550", "600", "450"],
    "respuesta": "600"
},
{
    "pregunta": "Pedro tenía 600 monedas. Compró 200 más y gastó 150. ¿Cuántas monedas tiene ahora?",
    "opciones": ["700", "650", "550", "500"],
    "respuesta": "650"
},
{
    "pregunta": "Un jardín tiene 200 plantas. Plantaron 100 más y regalaron 50. ¿Cuántas plantas quedan?",
    "opciones": ["250", "300", "270", "280"],
    "respuesta": "250"
},
{
    "pregunta": "Un paquete tiene 150 cajas. Cada caja contiene 20 productos. ¿Cuántos productos hay en total?",
    "opciones": ["4000", "2500", "3000", "3500"],
    "respuesta": "3000"
},
{
    "pregunta": "En una biblioteca hay 400 libros. Se compraron 300 más y se vendieron 200. ¿Cuántos libros hay ahora?",
    "opciones": ["600", "550", "450", "500"],
    "respuesta": "500"
},
{
    "pregunta": "Un tren tiene 50 vagones. Cada vagón tiene 30 pasajeros. ¿Cuántos pasajeros viajan en total?",
    "opciones": ["1300", "1400", "1600", "1500"],
    "respuesta": "1500"
},
{
    "pregunta": "Pedro tenía 500 pesos. Compró 200 más y gastó 150. ¿Cuántos pesos tiene ahora?",
    "opciones": ["450", "550", "600", "500"],
    "respuesta": "550"
},
{
    "pregunta": "En una tienda hay 300 camisetas. Vendieron 150 y luego llegaron 100 más. ¿Cuántas camisetas hay ahora?",
    "opciones": ["350", "300", "250", "400"],
    "respuesta": "250"
},
{
    "pregunta": "Un agricultor cultivó 80 hectáreas de maíz. En cada hectárea cultivó 40 plantas. ¿Cuántas plantas cultivó en total?",
    "opciones": ["300", "3200", "3500", "4000"],
    "respuesta": "3200"
},
{
    "pregunta": "En una clase hay 150 estudiantes. Se inscribieron 200 más y luego salieron 50. ¿Cuántos estudiantes hay ahora?",
    "opciones": ["200", "250", "300", "400"],
    "respuesta": "300"
},
{
    "pregunta": "En un supermercado hay 300 productos. Se compraron 400 más y se vendieron 150. ¿Cuántos productos hay ahora?",
    "opciones": ["650", "550", "500", "600"],
    "respuesta": "550"
},
{
    "pregunta": "José tenía 500 pesos. Ahorro 150 más y gastó 100. ¿Cuántos pesos tiene ahora?",
    "opciones": ["450", "500", "600", "550"],
    "respuesta": "550"
},
{
    "pregunta": "Un autobús transporta 40 personas. Si viajan en 12 autobuses, ¿cuántas personas viajan en total?",
    "opciones": ["400", "500", "480", "450"],
    "respuesta": "480"
},
{
    "pregunta": "Una fábrica produce 1200 piezas al día. ¿Cuántas piezas produce en 10 días?",
    "opciones": ["11000", "12000", "13000", "14000"],
    "respuesta": "12000"
},
{
    "pregunta": "Un colegio tiene 300 estudiantes. Se inscribieron 400 más y luego se fueron 200. ¿Cuántos estudiantes hay ahora?",
    "opciones": ["400", "450", "500", "600"],
    "respuesta": "500"
},
{
    "pregunta": "El gimnasio tiene 600 miembros. Se inscribieron 150 más y se dieron de baja 100. ¿Cuántos miembros hay ahora?",
    "opciones": ["500", "700", "650", "600"],
    "respuesta": "650"
},
{
    "pregunta": "Juan tiene 150 estampillas. Compró 100 más y regaló 50. ¿Cuántas estampillas tiene ahora?",
    "opciones": ["200", "250", "300", "150"],
    "respuesta": "200"
},
{
    "pregunta": "En una tienda se vendieron 300 pares de zapatos. Luego llegaron 200 más y se vendieron otros 150. ¿Cuántos zapatos vendieron en total?",
    "opciones": ["550", "600", "500", "650"],
    "respuesta": "650"
},
{
    "pregunta": "El edificio tiene 15 pisos. Cada piso tiene 10 apartamentos. ¿Cuántos apartamentos hay en total?",
    "opciones": ["100", "150", "200", "120"],
    "respuesta": "150"
}

];

let selectedAnswers = [];
let currentProblemIndex = 0;
let problemCount = 5;

// Esta función genera los problemas
// Esta función genera los problemas en pantalla
function generateProblems() {
    selectedAnswers = [];
    currentProblemIndex = 0;
    let problemHtml = '';
    
    // Mezclamos aleatoriamente los problemas
    shuffleArray(problems);

    // Seleccionamos el número adecuado de problemas (5 o 10)
    for (let i = 0; i < problemCount; i++) {
        const problem = problems[i];
        
        // Estructuramos las opciones en formato 2x2
        let optionsHtml = '<div class="options-grid">';
        problem.opciones.forEach((option, index) => {
            optionsHtml += `
                <div>
                    <input type="radio" name="question-${i}" value="${option}" id="q${i}a${index}">
                    <label for="q${i}a${index}">${option}</label>
                </div>
            `;
        });
        optionsHtml += '</div>';

        problemHtml += `
            <div class="problem">
                <p><strong>${i + 1}.</strong> ${problem.pregunta}</p>
                ${optionsHtml}
            </div>
        `;
    }
    document.getElementById('problems').innerHTML = problemHtml;
    document.getElementById('problem-count').style.display = 'none';
    document.getElementById('generate-btn').style.display = 'none';
    document.getElementById('grade-btn').style.display = 'inline';
    document.getElementById('download-pdf-btn').style.display = 'inline'; // Mostrar botón PDF
}

// Esta función verifica las respuestas y muestra los resultados
function gradeProblems() {
    let score = 0;
    let incorrectAnswers = []; // Array para almacenar las respuestas incorrectas

    for (let i = 0; i < problemCount; i++) {
        const selectedOption = document.querySelector(`input[name="question-${i}"]:checked`);
        if (selectedOption && selectedOption.value === problems[i].respuesta) {
            score++;
        } else {
            // Almacena las respuestas incorrectas
            incorrectAnswers.push({
                pregunta: problems[i].pregunta,
                respuestaCorrecta: problems[i].respuesta,
                respuestaUsuario: selectedOption ? selectedOption.value : "No respondida"
            });
        }
    }

    // Mostrar los resultados
    const resultElement = document.getElementById('result');
    if (score === problemCount) {
        resultElement.innerHTML = `<span class="congratulations">¡Felicidades! Obtuviste todas las respuestas correctas. 🏆</span>`;
    } else {
        resultElement.innerHTML = `<span class="error">Obtuviste ${score} de ${problemCount} correctas. Sigue practicando.</span>`;
    }

    // Mostrar las respuestas incorrectas
    if (incorrectAnswers.length > 0) {
        let incorrectHtml = '<h3>Problemas Incorrectos:</h3><ul>';
        incorrectAnswers.forEach(incorrect => {
            incorrectHtml += `
                <li>
                    <p><strong>Pregunta:</strong> ${incorrect.pregunta}</p>
                    <p><strong>Tu respuesta:</strong> ${incorrect.respuestaUsuario}</p>
                    <p><strong>Respuesta correcta:</strong> ${incorrect.respuestaCorrecta}</p>
                </li>
            `;
        });
        incorrectHtml += '</ul>';
        document.getElementById('incorrect-answers').innerHTML = incorrectHtml;
    }

    document.getElementById('back-btn').style.display = 'inline'; // Muestra el botón "Regresar"
}

// Función para mezclar aleatoriamente los problemas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos
    }
}

// Eventos para los botones
// Actualizamos el botón de regresar para ocultar también el botón de PDF
document.getElementById('back-btn').addEventListener('click', function () {
    document.getElementById('problem-count').style.display = 'block'; 
    document.getElementById('generate-btn').style.display = 'none'; 
    document.getElementById('back-btn').style.display = 'none'; 
    document.getElementById('grade-btn').style.display = 'none'; 
    document.getElementById('download-pdf-btn').style.display = 'none'; // Ocultar PDF
    document.getElementById('result').innerHTML = ''; 
    document.getElementById('incorrect-answers').innerHTML = ''; 
    document.getElementById('problems').innerHTML = ''; 
});

// Eventos de selección de problemas
document.getElementById('five-problems').addEventListener('click', function() {
    problemCount = 5;
    generateProblems();
});

document.getElementById('ten-problems').addEventListener('click', function() {
    problemCount = 10;
    generateProblems();
});

// FUNCIÓN PARA GENERAR EL ARCHIVO PDF
document.getElementById('download-pdf-btn').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'letter'); // Documento vertical, tamaño carta
    
    // Título
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Problemas Razonados", 105, 15, { align: "center" });
    
    // Encabezados con espacios en blanco
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Escuela: ___________________________________________________", 15, 25);
    doc.text("Nombre: ___________________________________________________", 15, 33);
    doc.text("Grado: ______   Grupo: _______   Fecha: ________________________", 15, 41);
    
    let y = 55; // Posición Y de inicio
    
    // Aumentamos el espacio para operaciones. 60mm para 5 problemas, 35mm para 10 problemas.
    const spacingForOperations = (problemCount === 5) ? 60 : 35; 
    
    for (let i = 0; i < problemCount; i++) {
        const problem = problems[i];
        
        // Dividir el texto de la pregunta para que no se desborde
        const splitTitle = doc.splitTextToSize(`${i + 1}. ${problem.pregunta}`, 180);
        
        // Comprobar si cabe en la página, considerando el texto, el espacio de operaciones y la línea de respuesta
        if (y + (splitTitle.length * 6) + spacingForOperations > 270) {
            doc.addPage();
            y = 20; // Reiniciar Y en la nueva hoja
        }
        
        // Imprimir pregunta
        doc.setFont("helvetica", "bold");
        doc.text(splitTitle, 15, y);
        
        // Damos el salto calculando el texto de la pregunta más el espacio amplio para que el alumno escriba
        y += (splitTitle.length * 6) + spacingForOperations; 
        
        // Imprimir solo la línea de respuesta alineada a la derecha
        doc.setFont("helvetica", "normal");
        doc.text("R: ________________", 140, y); 
        
        // Margen extra antes del siguiente problema
        y += 15; 
    }
    
    // Guardar el documento
    doc.save(`Problemas_Razonados_${problemCount}.pdf`);
});