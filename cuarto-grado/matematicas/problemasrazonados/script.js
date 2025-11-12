const problems = [
{
    pregunta: "En un parque hay 2140 árboles. Se plantaron 1200 más y luego se talaron 350. ¿Cuántos árboles quedan?",
opciones: ["2800", "2995", "3000", "2990"],
respuesta: "2990"
},
{
pregunta: "Pedro tenía 3450 libros. Compró 560 más y luego regaló 120. ¿Cuántos libros tiene ahora?",
opciones: ["3800", "3895", "3890", "3805"],
respuesta: "3890"
},
{
pregunta: "En una fábrica se produjeron 1250 piezas al día. ¿Cuántas piezas se producen en 15 días?",
opciones: ["18000", "18750", "19000", "20000"],
respuesta: "18750"
},
{
pregunta: "Carlos tenía 3200 pesos. Compró 850 más y luego gastó 320. ¿Cuántos pesos tiene ahora?",
opciones: ["3760", "3750", "3740", "3730"],
respuesta: "3730"
},
{
pregunta: "En una tienda hay 1850 galletas. Vendieron 720 y luego llegaron 300 más. ¿Cuántas galletas hay ahora?",
opciones: ["1405", "1430", "1435", "1440"],
respuesta: "1430"
},
{
pregunta: "Una granja tiene 2500 vacas. Compraron 900 más y luego vendieron 500. ¿Cuántas vacas hay ahora?",
opciones: ["2700", "2800", "2900", "3000"],
respuesta: "2900"
},
{
pregunta: "En una tienda hay 1125 manzanas. Compraron 520 más y luego vendieron 350. ¿Cuántas manzanas hay ahora?",
opciones: ["1285", "1275", "1295", "1300"],
respuesta: "1295"
},
{
pregunta: "Un coche viaja 150 km cada día. ¿Cuántos kilómetros recorre en 25 días?",
opciones: ["3500", "3750", "3800", "3600"],
respuesta: "3750"
},
{
pregunta: "En una biblioteca hay 3000 libros. Se vendieron 1200 y luego llegaron 600 más. ¿Cuántos libros hay ahora?",
opciones: ["2300", "2400", "2500", "2600"],
respuesta: "2400"
},
{
pregunta: "María tenía 1800 pesos. Compró 900 más y luego gastó 650. ¿Cuántos pesos tiene ahora?",
opciones: ["2000", "2050", "2100", "2200"],
respuesta: "2050"
},
{
pregunta: "En una fábrica de juguetes se producen 1200 juguetes cada semana. ¿Cuántos juguetes se producen en 16 semanas?",
opciones: ["19200", "20000", "18000", "19000"],
respuesta: "19200"
},
{
pregunta: "En una clase hay 650 estudiantes. Se inscribieron 200 más y luego se graduaron 100. ¿Cuántos estudiantes hay ahora?",
opciones: ["750", "780", "790", "800"],
respuesta: "750"
},
{
pregunta: "En una tienda de ropa hay 1200 camisetas. Se vendieron 450 y luego llegaron 300 más. ¿Cuántas camisetas hay ahora?",
opciones: ["1100", "1150", "1050", "1200"],
respuesta: "1050"
},
{
pregunta: "Un tren tiene 20 vagones. Cada vagón tiene 30 pasajeros. ¿Cuántos pasajeros viajan en total?",
opciones: ["700", "600", "650", "500"],
respuesta: "600"
},
{
pregunta: "José tenía 2100 pesos. Compró 500 más y luego gastó 300. ¿Cuántos pesos tiene ahora?",
opciones: ["2400", "2300", "2200", "2100"],
respuesta: "2300"
},
{
pregunta: "En una tienda hay 4000 productos. Se vendieron 1500 y luego llegaron 1000 más. ¿Cuántos productos hay ahora?",
opciones: ["3500", "3300", "3600", "3400"],
respuesta: "3500"
},
{
pregunta: "Una granja tenía 3800 ovejas. Se vendieron 1500 y luego llegaron 1000 más. ¿Cuántas ovejas hay ahora?",
opciones: ["3000", "3100", "3200", "3300"],
respuesta: "3300"
},
{
pregunta: "En una biblioteca había 2500 libros. Se prestaron 700 y luego llegaron 500 más. ¿Cuántos libros hay ahora?",
opciones: ["2200", "2300", "2400", "2500"],
respuesta: "2300"
},
{
pregunta: "En una tienda de bicicletas hay 1500 bicicletas. Se vendieron 600 y luego llegaron 300 más. ¿Cuántas bicicletas hay ahora?",
opciones: ["1250", "1100", "1200", "1150"],
respuesta: "1200"
},
{
pregunta: "Juanito tenía 1200 pelotas. Compró 250 más y luego perdió 100. ¿Cuántas pelotas tiene ahora?",
opciones: ["1450", "1400", "1350", "1300"],
respuesta: "1350"
},
{
pregunta: "En un taller hay 2000 piezas de metal. Se vendieron 500 y luego llegaron 800 más. ¿Cuántas piezas hay ahora?",
opciones: ["2500", "2400", "2300", "2200"],
respuesta: "2300"
},
{
pregunta: "En una fábrica se producen 850 piezas al día. ¿Cuántas piezas se producen en 25 días?",
opciones: ["21250", "21300", "21500", "22000"],
respuesta: "21250"
},
{
pregunta: "En una escuela hay 600 alumnos. Se inscribieron 200 más y luego se graduaron 100. ¿Cuántos alumnos hay ahora?",
opciones: ["850", "800", "750", "700"],
respuesta: "700"
},
{
pregunta: "Un agricultor plantó 625 árboles. Cada árbol produce 15 frutos. ¿Cuántos frutos en total produce?",
opciones: ["9375", "9300", "9350", "9200"],
respuesta: "9375"
},
{
pregunta: "Carlos tiene 6 cajas de 45 juguetes, luego compró 120 juguetes más. ¿Cuántos juguetes tiene en total?",
opciones: ["370", "380", "390", "400"],
respuesta: "390"
},
{
pregunta: "En una granja hay 8 parcelas de 60 plantas, luego plantaron 80 plantas más. ¿Cuántas plantas hay en total?",
opciones: ["540", "560", "570", "580"],
respuesta: "560"
},
{
pregunta: "Pedro tiene 5 cajas de 80 libros, luego encontró 60 libros más. ¿Cuántos libros tiene en total?",
opciones: ["440", "450", "460", "470"],
respuesta: "460"
},
{
pregunta: "Sofía tiene 3 cajas de 120 pelotas, luego encontró 65 pelotas más. ¿Cuántas pelotas tiene en total?",
opciones: ["415", "425", "435", "405"],
respuesta: "425"
},
{
pregunta: "En un gimnasio hay 12 grupos de 30 personas, luego se inscribieron 50 personas más. ¿Cuántas personas hay en total?",
opciones: ["400", "410", "420", "430"],
respuesta: "410"
},
{
pregunta: "Juan tiene 5 bolsas de 40 monedas, luego encontró 35 monedas más. ¿Cuántas monedas tiene en total?",
opciones: ["225", "230", "235", "240"],
respuesta: "235"
},
    // ... puedes seguir agregando más problemas aquí
];

let selectedAnswers = [];
let currentProblemIndex = 0;
let problemCount = 5;

// Esta función genera los problemas
function generateProblems() {
    selectedAnswers = [];
    currentProblemIndex = 0;
    let problemHtml = '';
    
    // Mezclamos aleatoriamente los problemas
    shuffleArray(problems);

    // Seleccionamos el número adecuado de problemas (5 o 10)
    for (let i = 0; i < problemCount; i++) {
        const problem = problems[i];
        problemHtml += `
            <div class="problem">
                <p>${problem.pregunta}</p>
                ${problem.opciones.map((option, index) => `
                    <input type="radio" name="question-${i}" value="${option}" id="q${i}a${index}">
                    <label for="q${i}a${index}">${option}</label><br>
                `).join('')}
            </div>
        `;
    }
    document.getElementById('problems').innerHTML = problemHtml;
    document.getElementById('problem-count').style.display = 'none'; // Oculta los botones para seleccionar el número de problemas
    document.getElementById('generate-btn').style.display = 'none'; // Oculta el botón "Generar problemas"
    document.getElementById('grade-btn').style.display = 'inline'; // Muestra el botón "Calificar"
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
document.getElementById('generate-btn').addEventListener('click', generateProblems);
document.getElementById('grade-btn').addEventListener('click', gradeProblems);
document.getElementById('back-btn').addEventListener('click', function () {
    document.getElementById('problem-count').style.display = 'block'; // Muestra los botones de selección nuevamente
    document.getElementById('generate-btn').style.display = 'none'; // Oculta el botón "Generar" al regresar
    document.getElementById('back-btn').style.display = 'none'; // Oculta el botón "Regresar" al regresar
    document.getElementById('grade-btn').style.display = 'none'; // Oculta el botón "Calificar" al regresar
    document.getElementById('result').innerHTML = ''; // Limpia los resultados
    document.getElementById('incorrect-answers').innerHTML = ''; // Limpia las respuestas incorrectas
    document.getElementById('problems').innerHTML = ''; // Limpia los problemas
});

document.getElementById('five-problems').addEventListener('click', function() {
    problemCount = 5;
    generateProblems();
});

document.getElementById('ten-problems').addEventListener('click', function() {
    problemCount = 10;
    generateProblems();
});
