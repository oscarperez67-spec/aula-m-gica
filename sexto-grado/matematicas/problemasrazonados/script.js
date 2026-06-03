const problems = [
    {
        pregunta: "Don Manuel compró 4 llantas para su camioneta a $850 cada una y un litro de aceite de $320. Si pagó con un billete de $5000, ¿cuánto dinero le sobró?",
        opciones: ["$1280", "$1380", "$1480", "$1580"],
        respuesta: "$1280"
    },
    {
        pregunta: "Una frutería recibió 1250 kg de manzanas. Al revisarlas, 150 kg estaban en mal estado y se tiraron. El resto se empacó en bolsas de 5 kg. ¿Cuántas bolsas se llenaron?",
        opciones: ["210", "220", "230", "240"],
        respuesta: "220"
    },
    {
        pregunta: "La escuela compró 15 docenas de libretas para regalar. Si se van a repartir en partes iguales entre 45 alumnos, ¿cuántas libretas le tocan a cada uno?",
        opciones: ["3", "4", "5", "6"],
        respuesta: "4"
    },
    {
        pregunta: "Un tanque de agua tiene 5000 litros. Si 3 familias utilizan 850 litros cada una durante la semana, ¿cuántos litros de agua quedan en el tanque?",
        opciones: ["2350", "2450", "2550", "2650"],
        respuesta: "2450"
    },
    {
        pregunta: "Lucía trabaja 15 días y gana $450 diarios. Si de lo que ganó paga la mitad por el alquiler de su casa, ¿cuánto dinero le queda?",
        opciones: ["$3375", "$3475", "$3575", "$3675"],
        respuesta: "$3375"
    },
    {
        pregunta: "Un camión repartidor llevaba 480 cajas de refrescos. En la primera tienda dejó 125 cajas, y en la segunda dejó el doble de las que dejó en la primera. ¿Cuántas cajas le quedan en el camión?",
        opciones: ["100", "105", "110", "115"],
        respuesta: "105"
    },
    {
        pregunta: "Carlos ahorra $250 a la semana. Después de 12 semanas, decide comprar una bicicleta de $1800 y un casco de $450. ¿Cuánto dinero le falta o le sobra?",
        opciones: ["Le sobran $750", "Le sobran $850", "Le faltan $750", "Le faltan $850"],
        respuesta: "Le sobran $750"
    },
    {
        pregunta: "En una granja se recolectan 3600 huevos a la semana. Se empacan en cartones de 30 huevos. Si cada cartón se vende a $60, ¿cuánto dinero se obtiene al vender todos los cartones?",
        opciones: ["$7000", "$7200", "$7400", "$7600"],
        respuesta: "$7200"
    },
    {
        pregunta: "Sofía compró 3 camisas de $280 cada una y 2 pantalones de $450. Si le hicieron un descuento total de $150 al pagar, ¿cuánto pagó en total?",
        opciones: ["$1590", "$1690", "$1790", "$1890"],
        respuesta: "$1590"
    },
    {
        pregunta: "Un tren de pasajeros tiene 12 vagones. Cada vagón tiene 45 asientos. Si en un viaje el tren va lleno y el boleto cuesta $120, ¿cuánto dinero ingresó por ese viaje?",
        opciones: ["$62,800", "$63,800", "$64,800", "$65,800"],
        respuesta: "$64,800"
    },
    {
        pregunta: "Un panadero preparó 850 panes. Vendió 430 por la mañana y 280 por la tarde. Los panes que sobraron los repartió equitativamente en 5 bolsas. ¿Cuántos panes puso en cada bolsa?",
        opciones: ["26", "28", "30", "32"],
        respuesta: "28"
    },
    {
        pregunta: "Para una construcción se compraron 8 toneladas de cemento (1 tonelada = 1000 kg). Si se han utilizado 5400 kg, ¿cuántos sacos de 50 kg se pueden llenar con el cemento que sobra?",
        opciones: ["48", "50", "52", "54"],
        respuesta: "52"
    },
    {
        pregunta: "En un estacionamiento hay 14 filas. En cada fila caben 25 autos. Si al mediodía hay 285 autos estacionados, ¿cuántos espacios quedan libres?",
        opciones: ["55", "65", "75", "85"],
        respuesta: "65"
    },
    {
        pregunta: "Raúl tiene $8000. Compra una consola de videojuegos de $4500 y 3 juegos de $650 cada uno. ¿Cuánto dinero le queda al final?",
        opciones: ["$1450", "$1550", "$1650", "$1750"],
        respuesta: "$1550"
    },
    {
        pregunta: "Una fábrica de galletas produce 4500 paquetes al día. Los empaca en cajas que contienen 40 paquetes. ¿Cuántas cajas completas se llenan y cuántos paquetes sobran?",
        opciones: ["110 cajas y sobran 10", "111 cajas y sobran 20", "112 cajas y sobran 20", "112 cajas y sobran 10"],
        respuesta: "112 cajas y sobran 20"
    },
    {
        pregunta: "María corrió 15 kilómetros el lunes, el doble de esa distancia el miércoles, y el viernes corrió la mitad de lo que corrió el miércoles. ¿Cuántos kilómetros corrió en total en la semana?",
        opciones: ["50", "55", "60", "65"],
        respuesta: "60"
    },
    {
        pregunta: "Un paquete de 500 hojas cuesta $120. Si la escuela necesita 8000 hojas y tiene un presupuesto de $2000, ¿cuánto dinero le sobra después de comprar las hojas necesarias?",
        opciones: ["$60", "$70", "$80", "$90"],
        respuesta: "$80"
    },
    {
        pregunta: "De un rollo de alambre de 500 metros, un electricista cortó 12 pedazos de 15 metros cada uno y 8 pedazos de 20 metros. ¿Cuántos metros de alambre le quedan en el rollo?",
        opciones: ["140", "150", "160", "170"],
        respuesta: "160"
    },
    {
        pregunta: "Para una fiesta se compraron 8 cajas de refrescos. Cada caja trae 24 botellas. Si asistieron 60 personas y a cada una se le dieron 2 botellas, ¿cuántas botellas sobraron?",
        opciones: ["68", "70", "72", "74"],
        respuesta: "72"
    },
    {
        pregunta: "El maestro Luis compró 35 libros a $180 cada uno. Pagó con 7 billetes de $1000. ¿Cuánto dinero le dieron de cambio?",
        opciones: ["$500", "$600", "$700", "$800"],
        respuesta: "$700"
    },
    {
        pregunta: "En una huerta se cosecharon 3200 naranjas. Se empacaron en mallas de 15 naranjas. ¿Cuántas mallas completas se obtuvieron y cuántas naranjas sobraron?",
        opciones: ["210 mallas, sobran 10", "211 mallas, sobran 15", "213 mallas, sobran 5", "215 mallas, sobran 5"],
        respuesta: "213 mallas, sobran 5"
    },
    {
        pregunta: "Ana quiere comprar una sala que cuesta $12,500. Dio un anticipo de $3500 y el resto lo pagará en 15 mensualidades iguales. ¿Cuánto pagará cada mes?",
        opciones: ["$500", "$550", "$600", "$650"],
        respuesta: "$600"
    },
    {
        pregunta: "En un restaurante se usan 3 kilos de carne para hacer 12 hamburguesas. Si tienen un pedido de 80 hamburguesas, ¿cuántos kilos de carne necesitan?",
        opciones: ["18", "20", "22", "24"],
        respuesta: "20"
    },
    {
        pregunta: "Un estadio tiene capacidad para 45,000 personas. Si para un partido se vendieron 15,400 boletos de la zona sur y 21,800 boletos de la zona norte, ¿cuántos lugares quedaron vacíos?",
        opciones: ["7800", "8800", "9800", "10800"],
        respuesta: "7800"
    },
    {
        pregunta: "Para pintar 4 casas iguales se usaron 120 litros de pintura. Si cada litro cuesta $95, ¿cuánto dinero se gastó en pintura por una sola casa?",
        opciones: ["$2750", "$2850", "$2950", "$3050"],
        respuesta: "$2850"
    },
    {
        pregunta: "El lunes, un taxista ganó $850. El martes ganó $150 menos que el lunes. El miércoles ganó el doble que el martes. ¿Cuánto dinero juntó en los 3 días?",
        opciones: ["$2900", "$2950", "$3000", "$3050"],
        respuesta: "$2950"
    },
    {
        pregunta: "En la escuela hay 540 alumnos. La tercera parte se va caminando a su casa, y el resto se va en transporte escolar. Si cada autobús escolar lleva 40 alumnos, ¿cuántos autobuses se necesitan?",
        opciones: ["7", "8", "9", "10"],
        respuesta: "9"
    },
    {
        pregunta: "Se tienen 4 rollos de tela de 150 metros cada uno. Si para hacer un uniforme escolar se ocupan 3 metros de tela, ¿cuántos uniformes se pueden hacer con toda la tela?",
        opciones: ["180", "190", "200", "210"],
        respuesta: "200"
    },
    {
        pregunta: "Una imprenta imprimió 15,000 folletos. Los empaquetó en cajas de 500 folletos cada una. Si cada caja se vende en $250, ¿cuánto dinero recaudará al vender todas las cajas?",
        opciones: ["$7000", "$7500", "$8000", "$8500"],
        respuesta: "$7500"
    },
    {
        pregunta: "Un granjero tiene 180 vacas. Cada vaca da 15 litros de leche al día. Si vende el litro a $12, ¿cuánto dinero gana en un día de venta?",
        opciones: ["$31,400", "$32,400", "$33,400", "$34,400"],
        respuesta: "$32,400"
    },
    {
        pregunta: "Julia compró un automóvil en $180,000. Entregó un enganche de $45,000 y acordó pagar el resto en 36 mensualidades. ¿De cuánto será cada mensualidad?",
        opciones: ["$3250", "$3500", "$3750", "$4000"],
        respuesta: "$3750"
    },
    {
        pregunta: "Una papelería compró 25 paquetes de 100 plumas cada uno a $300 el paquete. Si venden cada pluma suelta a $5, ¿cuál será su ganancia total si venden todas?",
        opciones: ["$4500", "$5000", "$5500", "$6000"],
        respuesta: "$5000"
    },
    {
        pregunta: "Un ciclista profesional recorre 35 kilómetros en una hora. ¿Cuántos kilómetros recorrerá en 4 horas diarias durante 15 días?",
        opciones: ["2000", "2100", "2200", "2300"],
        respuesta: "2100"
    },
    {
        pregunta: "Para hacer 15 pasteles se necesitan 60 tazas de harina. Si un repostero tiene un saco con 180 tazas de harina, ¿cuántos pasteles puede hacer?",
        opciones: ["40", "45", "50", "55"],
        respuesta: "45"
    },
    {
        pregunta: "En una competencia deportiva participan 25 escuelas. Cada escuela lleva 18 atletas. Si se van a formar equipos mixtos de 15 personas para un juego, ¿cuántos equipos se podrán formar?",
        opciones: ["28", "30", "32", "34"],
        respuesta: "30"
    },
    {
        pregunta: "Roberto tiene un sueldo quincenal de $5400. Si gasta $1200 en despensa, $800 en servicios y $450 en pasajes, ¿cuánto dinero le queda para ahorrar al mes (2 quincenas)?",
        opciones: ["$5700", "$5800", "$5900", "$6000"],
        respuesta: "$5900"
    },
    {
        pregunta: "Una cisterna contiene 12,500 litros de agua. Una bomba extrae 250 litros por minuto. ¿Cuántos minutos tardará la bomba en vaciar toda la cisterna?",
        opciones: ["40", "45", "50", "55"],
        respuesta: "50"
    },
    {
        pregunta: "Un carpintero necesita 4 tornillos grandes y 6 pequeños por cada silla que arma. Si tiene que armar 45 sillas, ¿cuántos tornillos en total utilizará?",
        opciones: ["420", "430", "440", "450"],
        respuesta: "450"
    },
    {
        pregunta: "El comité escolar recaudó $18,400 en una kermés. Decidieron gastar $4000 en pintura para la escuela y el resto repartirlo equitativamente entre 12 salones para material. ¿Cuánto le tocó a cada salón?",
        opciones: ["$1100", "$1200", "$1300", "$1400"],
        respuesta: "$1200"
    },
    {
        pregunta: "En una librería hay 45 estantes con 85 libros cada uno. Si durante un mes venden 1250 libros, ¿cuántos libros quedan en la librería?",
        opciones: ["2475", "2575", "2675", "2775"],
        respuesta: "2575"
    },
    {
        pregunta: "Se tienen 480 rosas y 320 tulipanes. Si se quieren hacer ramos que contengan 12 rosas y 8 tulipanes cada uno, ¿cuántos ramos completos se pueden hacer?",
        opciones: ["30", "35", "40", "45"],
        respuesta: "40"
    },
    {
        pregunta: "Arturo compró 4 discos duros de 2000 GB cada uno. Si llenó 3200 GB con películas y 1500 GB con videojuegos, ¿cuántos GB libres le quedan en total?",
        opciones: ["3100", "3200", "3300", "3400"],
        respuesta: "3300"
    },
    {
        pregunta: "Un comerciante compró 15 televisiones a $3200 cada una. Al venderlas todas obtuvo un ingreso de $63,000. ¿Cuál fue su ganancia por cada televisión?",
        opciones: ["$900", "$1000", "$1100", "$1200"],
        respuesta: "$1000"
    },
    {
        pregunta: "Laura preparó 15 litros de agua de sabor. La vendió en vasos de 250 mililitros (0.25 litros) a $15 cada vaso. ¿Cuánto dinero obtuvo al vender toda el agua?",
        opciones: ["$800", "$850", "$900", "$950"],
        respuesta: "$900"
    },
    {
        pregunta: "Un granjero tiene suficiente alimento para dar de comer a sus 45 caballos durante 20 días. Si compra 15 caballos más y no aumenta la cantidad de comida, ¿para cuántos días le alcanzará el alimento?",
        opciones: ["12", "14", "15", "16"],
        respuesta: "15"
    },
    {
        pregunta: "En un cine hay 8 salas con capacidad de 150 personas cada una. Si en un día se proyectaron 4 funciones por sala y todas estuvieron al tope, y la entrada cuesta $65, ¿cuál fue el ingreso total del día?",
        opciones: ["$300,000", "$305,000", "$312,000", "$320,000"],
        respuesta: "$312,000"
    },
    {
        pregunta: "Una pista de atletismo mide 400 metros. Si Daniela da 12 vueltas diarias durante 5 días a la semana, ¿cuántos kilómetros corre en total durante esa semana?",
        opciones: ["22", "24", "26", "28"],
        respuesta: "24"
    },
    {
        pregunta: "Eduardo compró 3 cajas de clavos. Cada caja trae 250 piezas. Usó la mitad de todos los clavos en construir una cerca y 120 clavos en reparar una puerta. ¿Cuántos clavos le sobran?",
        opciones: ["245", "255", "265", "275"],
        respuesta: "255"
    },
    {
        pregunta: "La suma de tres números es 8500. El primero es 2450 y el segundo es el doble del primero. ¿Cuál es el valor del tercer número?",
        opciones: ["1050", "1150", "1250", "1350"],
        respuesta: "1150"
    },
    {
        pregunta: "En una bodega hay 14 pallets. Cada pallet contiene 35 cajas de mermelada, y cada caja contiene 24 frascos. Si tienen que enviar un pedido de 10,000 frascos, ¿cuántos frascos sobran o faltan en la bodega?",
        opciones: ["Sobran 1760", "Sobran 1860", "Faltan 1760", "Faltan 1860"],
        respuesta: "Sobran 1760"
    }
];

let selectedAnswers = [];
let currentProblemIndex = 0;
let problemCount = 5;

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
    document.getElementById('problem-count').style.display = 'none'; // Oculta botones
    document.getElementById('generate-btn').style.display = 'none'; // Oculta "Generar problemas"
    document.getElementById('grade-btn').style.display = 'inline'; // Muestra "Calificar"
    document.getElementById('download-pdf-btn').style.display = 'inline'; // Muestra "Descargar PDF"
}

// Esta función verifica las respuestas y muestra los resultados en la web
function gradeProblems() {
    let score = 0;
    let incorrectAnswers = [];

    for (let i = 0; i < problemCount; i++) {
        const selectedOption = document.querySelector(`input[name="question-${i}"]:checked`);
        if (selectedOption && selectedOption.value === problems[i].respuesta) {
            score++;
        } else {
            incorrectAnswers.push({
                pregunta: problems[i].pregunta,
                respuestaCorrecta: problems[i].respuesta,
                respuestaUsuario: selectedOption ? selectedOption.value : "No respondida"
            });
        }
    }

    const resultElement = document.getElementById('result');
    if (score === problemCount) {
        resultElement.innerHTML = `<span class="congratulations">¡Felicidades! Obtuviste todas las respuestas correctas. 🏆</span>`;
    } else {
        resultElement.innerHTML = `<span class="error">Obtuviste ${score} de ${problemCount} correctas. Sigue practicando.</span>`;
    }

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

    document.getElementById('back-btn').style.display = 'inline';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Eventos para los botones principales
document.getElementById('generate-btn').addEventListener('click', generateProblems);
document.getElementById('grade-btn').addEventListener('click', gradeProblems);

document.getElementById('back-btn').addEventListener('click', function () {
    document.getElementById('problem-count').style.display = 'block';
    document.getElementById('generate-btn').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
    document.getElementById('grade-btn').style.display = 'none';
    document.getElementById('download-pdf-btn').style.display = 'none'; // Oculta el botón PDF al regresar
    document.getElementById('result').innerHTML = '';
    document.getElementById('incorrect-answers').innerHTML = '';
    document.getElementById('problems').innerHTML = '';
});

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
    
    // Encabezados con espacios en blanco para el alumno
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
        
        // Dividir el texto de la pregunta para que no se desborde del margen derecho
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