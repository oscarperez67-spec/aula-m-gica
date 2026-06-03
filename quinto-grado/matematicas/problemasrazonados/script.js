const problems = [
    {
        pregunta: "En una papelería hay 15 cajas con 24 colores cada una. Si se venden 130 colores en un día, ¿cuántos colores quedan en la papelería?",
        opciones: ["210", "220", "230", "240"],
        respuesta: "230"
    },
    {
        pregunta: "Un camión transporta 45 cajas de manzanas. Cada caja pesa 18 kg. Al llegar a la tienda, descargan 250 kg. ¿Cuántos kilogramos quedan en el camión?",
        opciones: ["550", "560", "570", "580"],
        respuesta: "560"
    },
    {
        pregunta: "Mariana tenía 5 billetes de $200 y 3 billetes de $50. Si compró un suéter de $680, ¿cuánto dinero le sobró?",
        opciones: ["$450", "$460", "$470", "$480"],
        respuesta: "470"
    },
    {
        pregunta: "En una escuela compraron 12 paquetes de 50 libretas. Si tienen que repartirlas en partes iguales entre 300 alumnos, ¿cuántas libretas le tocan a cada alumno?",
        opciones: ["2", "3", "4", "5"],
        respuesta: "2"
    },
    {
        pregunta: "Don Pepe cosechó 1250 naranjas. Las empacó en bolsas de 25 naranjas cada una. Si vendió 30 bolsas, ¿cuántas bolsas le faltan por vender?",
        opciones: ["15", "20", "25", "30"],
        respuesta: "20"
    },
    {
        pregunta: "Una fábrica produce 350 juguetes diarios. ¿Cuántos juguetes producirá en 14 días si descansa 2 días por mantenimiento?",
        opciones: ["4100", "4200", "4500", "4900"],
        respuesta: "4200"
    },
    {
        pregunta: "Roberto ahorró $150 semanales durante 8 semanas. Después, gastó $420 en unos zapatos y $150 en un pantalón. ¿Cuánto dinero le queda?",
        opciones: ["$610", "$620", "$630", "$640"],
        respuesta: "630"
    },
    {
        pregunta: "En un teatro caben 450 personas. Si hay 4 funciones llenas el fin de semana y la entrada cuesta $60, ¿cuánto dinero se recaudó en total?",
        opciones: ["$105000", "$106000", "$108000", "$110000"],
        respuesta: "108000"
    },
    {
        pregunta: "Para una fiesta se compraron 8 pizzas de 12 rebanadas cada una. Si asistieron 25 personas y cada una se comió 3 rebanadas, ¿cuántas rebanadas sobraron?",
        opciones: ["18", "19", "20", "21"],
        respuesta: "21"
    },
    {
        pregunta: "Un ciclista recorre 18 km cada hora. Si viaja durante 4 horas diarias por 5 días, ¿cuántos kilómetros recorrerá en total?",
        opciones: ["340", "350", "360", "370"],
        respuesta: "360"
    },
    {
        pregunta: "En una bodega hay 3250 litros de aceite. Se envasan en botellas de 2 litros. Si se venden 1100 botellas, ¿cuántas botellas quedan en la bodega?",
        opciones: ["500", "515", "525", "550"],
        respuesta: "525"
    },
    {
        pregunta: "Lucía compró 4 blusas de $230 cada una y 2 faldas de $350 cada una. Pagó con dos billetes de $1000. ¿Cuánto le dieron de cambio?",
        opciones: ["$370", "$380", "$390", "$400"],
        respuesta: "380"
    },
    {
        pregunta: "Una pastelería hace 45 pasteles al día. Cada pastel se vende en $150. Si un día se les echaron a perder 5 pasteles y vendieron el resto, ¿cuánto ganaron?",
        opciones: ["$5800", "$5900", "$6000", "$6100"],
        respuesta: "6000"
    },
    {
        pregunta: "Luis tiene 450 estampas. Le regaló a su hermano la tercera parte de sus estampas y luego compró 80 más. ¿Cuántas estampas tiene ahora Luis?",
        opciones: ["360", "370", "380", "390"],
        respuesta: "380"
    },
    {
        pregunta: "Un tanque de agua tiene 5000 litros. Se saca agua para regar 8 huertos, usando 350 litros por huerto. ¿Cuánta agua queda en el tanque?",
        opciones: ["2100", "2200", "2300", "2400"],
        respuesta: "2200"
    },
    {
        pregunta: "Un carpintero hace 6 sillas a la semana. ¿Cuántas sillas hará en un año entero (52 semanas) si toma 4 semanas de vacaciones?",
        opciones: ["278", "288", "298", "308"],
        respuesta: "288"
    },
    {
        pregunta: "Carlos compró una televisión en $4500. Dio un enganche de $1500 y el resto lo pagará en 6 mensualidades iguales. ¿De cuánto será cada mensualidad?",
        opciones: ["$450", "$500", "$550", "$600"],
        respuesta: "500"
    },
    {
        pregunta: "En un estacionamiento caben 15 filas de 24 autos cada una. Si actualmente hay 215 autos estacionados, ¿cuántos lugares están vacíos?",
        opciones: ["135", "145", "155", "165"],
        respuesta: "145"
    },
    {
        pregunta: "Andrea lee 15 páginas de un libro al día. Si el libro tiene 340 páginas, ¿cuántas páginas le faltarán por leer después de 12 días?",
        opciones: ["150", "160", "170", "180"],
        respuesta: "160"
    },
    {
        pregunta: "Un tren viaja a 85 km por hora. Si viaja durante 6 horas, descansa 1 hora, y luego viaja otras 3 horas a la misma velocidad, ¿cuál fue su distancia total?",
        opciones: ["750", "765", "780", "795"],
        respuesta: "765"
    },
    {
        pregunta: "Sofía hizo 8 collares usando 45 cuentas cada uno. Si tenía una bolsa con 500 cuentas, ¿cuántas cuentas le sobraron?",
        opciones: ["120", "130", "140", "150"],
        respuesta: "140"
    },
    {
        pregunta: "Un agricultor tiene 1200 gallinas. Cada gallina pone un huevo al día. Si guarda los huevos en cartones de 30, ¿cuántos cartones llena en 5 días?",
        opciones: ["190", "200", "210", "220"],
        respuesta: "200"
    },
    {
        pregunta: "En una carrera de relevos hay 15 equipos. Cada equipo tiene 4 corredores y cada corredor corre 400 metros. ¿Cuántos metros se corren en total en el evento?",
        opciones: ["23000", "24000", "25000", "26000"],
        respuesta: "24000"
    },
    {
        pregunta: "Para pintar una barda de 120 metros, un pintor cobra $85 por metro. Si ya le adelantaron $4500, ¿cuánto dinero le falta cobrar al terminar?",
        opciones: ["$5500", "$5600", "$5700", "$5800"],
        respuesta: "5700"
    },
    {
        pregunta: "Diego tiene 3 álbumes con 125 fotos cada uno. Si decide reorganizarlas en 5 álbumes nuevos, ¿cuántas fotos deberá poner en cada uno para que tengan la misma cantidad?",
        opciones: ["65", "70", "75", "80"],
        respuesta: "75"
    },
    {
        pregunta: "En la tienda escolar se vendieron 45 jugos a $12 cada uno y 38 sándwiches a $18 cada uno. ¿Cuánto dinero entró en total a la caja?",
        opciones: ["$1214", "$1224", "$1234", "$1244"],
        respuesta: "1224"
    },
    {
        pregunta: "Un costal de harina pesa 40 kg. El panadero compra 8 costales para la semana. Si cada día de lunes a viernes usa 55 kg, ¿cuánta harina le sobra para el fin de semana?",
        opciones: ["35", "40", "45", "50"],
        respuesta: "45"
    },
    {
        pregunta: "En un vuelo internacional caben 280 pasajeros. El pasaje cuesta $4500. Si hay 45 asientos vacíos, ¿cuánto dinero recaudó la aerolínea?",
        opciones: ["$1,047,500", "$1,057,500", "$1,067,500", "$1,077,500"],
        respuesta: "$1,057,500"
    },
    {
        pregunta: "Mateo quiere comprar un celular de $6800. Tiene ahorrados $2300. Si decide ahorrar $450 a la semana, ¿cuántas semanas tardará en juntar lo que le falta?",
        opciones: ["8", "9", "10", "11"],
        respuesta: "10"
    },
    {
        pregunta: "Una cancha mide 30 metros de largo por 15 metros de ancho. Si un atleta da 12 vueltas completas alrededor de la cancha, ¿cuántos metros recorre en total?",
        opciones: ["1060", "1070", "1080", "1090"],
        respuesta: "1080"
    },
    {
        pregunta: "Para arreglar una calle, 4 obreros pavimentan 25 metros cada uno en un día. Si trabajan durante 8 días, ¿cuántos metros pavimentaron en total?",
        opciones: ["750", "800", "850", "900"],
        respuesta: "800"
    },
    {
        pregunta: "Un paquete de 6 refrescos cuesta $85. Si para un festival compraron 24 paquetes y entregaron 5 billetes de $500, ¿cuánto cambio recibieron?",
        opciones: ["$440", "$450", "$460", "$470"],
        respuesta: "460"
    },
    {
        pregunta: "En un hotel hay 8 pisos, y en cada piso hay 16 habitaciones. Si cobran $900 la noche por habitación y el hotel está a la mitad de su capacidad, ¿cuánto se recauda?",
        opciones: ["$56,400", "$57,600", "$58,800", "$59,000"],
        respuesta: "57600"
    },
    {
        pregunta: "Mónica hace galletas. Con 1 kg de harina hace 45 galletas. Compró 6 kg de harina, pero se le tiró medio kilo. ¿Cuántas galletas logró hacer con la harina restante?",
        opciones: ["237.5", "247.5", "257.5", "267.5"],
        respuesta: "247.5"
    },
    {
        pregunta: "El recibo de luz de la escuela llegó de $4350 bimestral. Si lo pagarán usando fondos de 5 salones en partes iguales, ¿cuánto tiene que aportar cada salón por mes?",
        opciones: ["$415", "$425", "$435", "$445"],
        respuesta: "435"
    },
    {
        pregunta: "Una impresora gasta un cartucho de tinta por cada 350 páginas. Si en la oficina imprimen 75 páginas diarias de lunes a viernes, ¿cuántos cartuchos usarán en 4 semanas?",
        opciones: ["2", "3", "4", "5"],
        respuesta: "4"
    },
    {
        pregunta: "Una familia de 5 personas va al cine. El boleto cuesta $85, compran un combo de palomitas de $250 y cada quien un refresco de $35. Si pagan con un billete de $1000, ¿les alcanza?",
        opciones: ["Faltan $150", "Faltan $50", "Sobran $150", "Sobran $50"],
        respuesta: "Sobran $150"
    },
    {
        pregunta: "Javier debe empacar 3600 huevos. Utiliza cajas grandes donde caben 12 docenas cada una. ¿Cuántas cajas completas logrará llenar?",
        opciones: ["20", "25", "30", "35"],
        respuesta: "25"
    },
    {
        pregunta: "Una máquina embotelladora llena 120 botellas por minuto. ¿Cuántas botellas llenará en 2 horas y cuarto si nunca se detiene?",
        opciones: ["15200", "15800", "16200", "16800"],
        respuesta: "16200"
    },
    {
        pregunta: "En una librería hay 12 estantes. Cada estante tiene 5 repisas y en cada repisa caben 45 libros. Si ya hay 2100 libros acomodados, ¿cuántos libros más caben?",
        opciones: ["500", "600", "700", "800"],
        respuesta: "600"
    },
    {
        pregunta: "Don Arturo gana $450 diarios. Trabaja 6 días a la semana. Si gasta $1200 semanales en despensa, ¿cuánto dinero le queda libre al mes (4 semanas)?",
        opciones: ["$5500", "$6000", "$6500", "$7000"],
        respuesta: "6000"
    },
    {
        pregunta: "De un bloque de queso de 5 kg se cortaron 12 pedazos de 250 gramos cada uno para vender. ¿Cuántos gramos de queso sobraron en el bloque original?",
        opciones: ["1500", "2000", "2500", "3000"],
        respuesta: "2000"
    },
    {
        pregunta: "Una tienda deportiva compró 30 balones de fútbol a $250 cada uno. Si regalan 5 balones en una promoción y venden el resto en $350, ¿cuál fue su ganancia o pérdida?",
        opciones: ["Ganó $1000", "Ganó $1250", "Perdió $1000", "Perdió $1250"],
        respuesta: "Ganó $1250"
    },
    {
        pregunta: "Una pipa transporta 10,000 litros de gasolina. Descargó 2450 litros en la primera gasolinera, 3800 en la segunda y el resto en la tercera. ¿Cuánto descargó en la tercera?",
        opciones: ["3650", "3750", "3850", "3950"],
        respuesta: "3750"
    },
    {
        pregunta: "En una kermés se hicieron 600 tamales. Si el costo de producción de cada tamal fue de $8 y se vendieron en $15, ¿cuál fue la ganancia total si sobraron 40 tamales que no se vendieron?",
        opciones: ["$3500", "$3600", "$3700", "$3800"],
        respuesta: "3600"
    },
    {
        pregunta: "Fernando camina 1250 metros de su casa a la escuela. Si hace el mismo recorrido de ida y vuelta de lunes a viernes, ¿cuántos kilómetros camina en la semana?",
        opciones: ["11.5", "12", "12.5", "13"],
        respuesta: "12.5"
    },
    {
        pregunta: "Un paquete de hojas tiene 500 piezas. Si una maestra gasta 35 hojas al día, ¿para cuántos días completos le alcanza el paquete y cuántas hojas le sobran?",
        opciones: ["13 días y sobran 15", "14 días y sobran 10", "14 días y sobran 15", "15 días y sobran 10"],
        respuesta: "14 días y sobran 10"
    },
    {
        pregunta: "Una alberca se llena con 8 mangueras. Cada manguera arroja 25 litros por minuto. Si necesitan 12,000 litros para llenarla, ¿cuántos minutos deben estar encendidas?",
        opciones: ["50", "55", "60", "65"],
        respuesta: "60"
    },
    {
        pregunta: "En una papelería compraron 15 docenas de lápices a $40 la docena. Si venden cada lápiz suelto a $5, ¿de cuánto será su ganancia si venden todos?",
        opciones: ["$250", "$300", "$350", "$400"],
        respuesta: "300"
    },
    {
        pregunta: "Para instalar un piso se compraron 45 cajas con 12 mosaicos cada una. Si para el área se necesitan 510 mosaicos, ¿cuántos mosaicos sobrarán?",
        opciones: ["20", "30", "40", "50"],
        respuesta: "30"
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