// Variables de estado del juego
let examenActual = '';
let bloqueActual = 0;

// === BASE DE DATOS DE PREGUNTAS ===
// Aquí es donde vas a capturar toda tu información.
const baseDeDatos = {
    'K': {
        // Bloque 1: Preguntas 1 a 11
        1: [
            {
                // PREGUNTA 1
                // Si no hay imagen, deja las comillas vacías: imagen: ""
                imagen: "imagenes/1-2.png", 
                pregunta: "¿Qué conclusión se deriva del debate?",
                opciones: [
                    "A) El trastorno de la conducta alimentaria depende de la imagen que el adolescente percibe de sí mismo", // Índice 0
                    "B) Los adolescentes que padecen un trastorno de conducta alimentaria tienen que someterse a un tratamiento médico", // Índice 1
                    "C) La familia es responsable de los problemas conductuales que presentan sus hijos e hijas adolescentes", // Índice 2
                    "D)	El trastorno de conducta alimentaria en el adolescente se corrige con un tratamiento psicológico y el apoyo familiar" // Índice 3
                ],
                respuestaCorrecta: 3 // El índice de la respuesta correcta (0 es la primera, 1 la segunda...)
            },
            {
                // PREGUNTA 2 
                imagen: "", 
                pregunta: "¿En qué fragmento del debate los participantes están de acuerdo?",
                opciones: [
                    "A) 3",
                    "B) 5",
                    "C) 7",
                    "D) 8"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 3 
                imagen: "imagenes/3-4-5.png", 
                pregunta: "De acuerdo con el texto, ¿cómo se volvió famoso el personaje principal?",
                opciones: [
                    "A)	Dedicándose a la química y entrando al espectáculo como bailarín",
                    "B)	Gracias a su personaje de Cantinflas que se volvió un ícono de su época",
                    "C)	Grabando un repertorio de 20 películas en color y 35 en blanco y negro",
                    "D)	Gracias al publicista Santiago Reachi Fayad, quien invirtió en sus filmes"
                ],
                respuestaCorrecta: 1
            },
	    {
                // PREGUNTA 4 
                imagen: "", 
                pregunta: "¿Quién narra el texto?",
                opciones: [
                    "A) Mario Moreno",
                    "B) Fortino Alfonso",
                    "C) Santiago Reachi Fayad",
                    "D) Rodrigo Ocegueda"
                ],
                respuestaCorrecta: 3
            },
	    {
                // PREGUNTA 5 
                imagen: "", 
                pregunta: "En el texto aparecen cuatro palabras en negritas, elige la manera correcta de dividirlas en sílabas",
                opciones: [
                    "A)	(bai-la-rín) (de-sa-rro-lla-do)  (pu-bli-cis-ta)   (re-per-to-rio)",
                    "B)	(ba-ila-rín) (des-arro-lla-do)   (publi-cista)     (re-per-to-rio)",
                    "C)	bai-la-rín)  (des-arro-lla-do)   (publi-cista)     (reper-to-ri-o)",
                    "D)	ba-ila-rín)  (de-sa-rro-lla-do)  (pu-bli-cis-ta)   (reper-to-ri-o)"
                ],
                respuestaCorrecta: 0
            },
	  {
                // PREGUNTA 6 
                imagen: "imagenes/6-7-8.png", 
                pregunta: "¿Por qué Rocío se quiere ir en taxi?",
                opciones: [
                    "A)	Para ir a comer",
                    "B)	Para llegar pronto",
                    "C) Porque va lejos",
                    "D) Para tardar más"
                ],
                respuestaCorrecta: 1
            },
  	   {
                // PREGUNTA 7 
                imagen: "", 
                pregunta: "¿Qué opción muestra las palabras correctamente escritas?",
                opciones: [
                    "A) futbol – seva",
                    "B) conmigo – poreso",
                    "C) porque – también",
                    "D) loque – porfavor"
                ],
                respuestaCorrecta: 2
            },
	  {
                // PREGUNTA 8 
                imagen: "", 
                pregunta: "¿Cuáles palabras del mensaje deben escribirse con acento ortográfico?",
                opciones: [
                    "A) papa – albondigas",
                    "B) iremos – deprisa",
                    "C) hizo – bicicleta",
                    "D) buscarte – dijo"
                ],
                respuestaCorrecta: 0
            },
	  {
                // PREGUNTA 9 
                imagen: "imagenes/9-10-11.png", 
                pregunta: "¿Qué función cumple el título del texto?",
                opciones: [
                    "A) Profundiza la información",
                    "B) Opina sobre los ecosistemas",
                    "C) Resume el contenido del texto",
                    "D) Concluye la importancia del tema"
                ],
                respuestaCorrecta: 2
            },
	  {
                // PREGUNTA 10 
                imagen: "", 
                pregunta: "¿Qué categoría falta en el cuadro sinóptico conforme a la información presentada?",
                opciones: [
                    "A) Físicos",
                    "B) Biológicos",
                    "C) Terrenos",
                    "D) Mixtos"
                ],
                respuestaCorrecta: 3
            },
  	  {
                // PREGUNTA 11
                // Si no hay imagen, deja las comillas vacías: imagen: ""
                imagen: "", 
                pregunta: "¿Cómo se escribe la acción de guardar líquidos o sólidos en un recipiente?",
                opciones: [
                    "A) Enbazar", // Índice 0
                    "B) Envasar", // Índice 1
                    "C) Embasar", // Índice 2
                    "D)	Envasar" // Índice 3
                ],
                respuestaCorrecta: 1 // El índice de la respuesta correcta (0 es la primera, 1 la segunda...)
            },

        ],

        // Bloque 2: Preguntas 12 a 21
        2: [
	
            {
                // PREGUNTA 12 
                imagen: "imagenes/12.png", 
                pregunta: "Con base en el texto, ¿cuál opción muestra la organización de la entrevista realizada a António Guterres [sic]?",
                opciones: [
                    "A) Introducción, sensibilización sobre el problema, compromisos para el 2030, costos de intervención",
                    "B) Inicio, compromisos para el 2023, sensibilización sobre el problema, costos de intervención",
                    "C) Introducción, costos de intervención, sensibilización sobre el problema, cierre y agradecimiento",
                    "D) Inicio, costos de intervención, compromisos para el 2030, sensibilización sobre el problema"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 13 
                imagen: "imagenes/13.png", 
                pregunta: "¿Cuál es el propósito del texto siguiente?",
                opciones: [
                    "A)	Describir la desigualdad de género",
                    "B)	Informar sobre la violencia contra las mujeres",
                    "C)	Evidenciar las diferencias económicas de la mujer",
                    "D)	Mostrar la inequidad en la salud pública"
                ],
                respuestaCorrecta: 1
            },
	    {
                // PREGUNTA 14 
                imagen: "imagenes/14.png", 
                pregunta: "¿Cuál es el tema principal del siguiente texto?",
                opciones: [
                    "A) Los beneficios de utilizar la inteligencia artificial",
                    "B) Las películas de ciencia ficción sobre la inteligencia artificial",
                    "C) La tecnología de inteligencia artificial en las empresas",
                    "D) La importancia de regular la inteligencia artificial"
                ],
                respuestaCorrecta: 3
            },
	    {
                // PREGUNTA 15 
                imagen: "imagenes/15.png", 
                pregunta: "Con base en el texto, completa los espacios vacíos.",
                opciones: [
                    "A)	1.Recursos naturales 2.Tipo energético como los combustibles",
                    "B)	1.Recursos naturales 2.Tipo nuclear como el uranio",
                    "C)	1.Recursos renovables 2.Tipo geológico como los minerales, además del carbón y el gas natural",
                    "D)	1.Recursos renovables 2.Tipo de fuente inagotable como el viento"
                ],
                respuestaCorrecta: 0
            },
	  {
                // PREGUNTA 16 
                imagen: "imagenes/16-17-18.png", 
                pregunta: "El hombre de gris tuvo miedo cuando:",
                opciones: [
                    "A)	un cuervo con ojos rojos lo miraba",
                    "B)	las luces comenzaban a parpadear",
                    "C) se encontraba completamente solo",
                    "D) se vio a sí mismo sentado sin vida"
                ],
                respuestaCorrecta: 3
            },
  	   {
                // PREGUNTA 17 
                imagen: "", 
                pregunta: "¿En qué párrafo del cuento hay mayor tensión?",
                opciones: [
                    "A) 2",
                    "B) 3",
                    "C) 4",
                    "D) 5"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 18 
                imagen: "", 
                pregunta: "¿Qué nexo sustituye el espacio en blanco en el texto, para expresar causa − efecto?",
                opciones: [
                    "A) Sin embargo",
                    "B) En consecuencia",
                    "C) Asimismo",
                    "D) Aunque"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 19 
                imagen: "imagenes/19-20-21.png", 
                pregunta: "¿Cuál es el título adecuado para la nota periodística?",
                opciones: [
                    "A) Choque de trenes en Estados Unidos",
                    "B) Consecuencias del accidente en Ohio",
                    "C) Devastadores incendios en Ohio",
                    "D) Explosiones de gas en Estados Unidos"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 20 
                imagen: "", 
                pregunta: "¿Cuál opción representa una opinión?",
                opciones: [
                    "A) James Figley, vecino del lugar, dijo que había una serie de explosiones continuas",
                    "B) Otro lugareño, menciona que ha tenido fuertes dolores de cabeza, los ojos rojos y por las noches no puede dormir",
                    "C) Los vecinos del área consideran que ya no es un lugar seguro para vivir después del accidente ocurrido",
                    "D) La Agencia de Protección Ambiental ha estado evaluando las casas cercanas al descarrilamiento por problemas de calidad del aire"
                ],
                respuestaCorrecta: 2
            },
           {
                // PREGUNTA 21 
                imagen: "", 
                pregunta: "¿Cuál opción hace referencia a un hecho?",
                opciones: [
                    "A) Se sugiere a los residentes con pozos privados cerca usar agua embotellada hasta que puedan analizar sus pozos",
                    "B) Los habitantes cercanos al descarrilamiento sospechan que sus casas están contaminadas",
                    "C) El gobernador del estado expresó que han muerto 3 500 peces en los arroyos debido a los productos químicos",
                    "D) La EPA (Agencia de Protección Ambiental de EE. UU.) supone que las cenizas son peligrosas para la salud"
                ],
                respuestaCorrecta: 2
            },
        ],
       
	// Bloque 3: Preguntas 22 a 31
        3: [
	
            {
                // PREGUNTA 22 
                imagen: "imagenes/22-23-24.png", 
                pregunta: "¿Cuál es el efecto que producen las ratas y los ratones silvestres en el ecosistema?",
                opciones: [
                    "A) Consumen semillas y granos de desecho",
                    "B) Evitan que la maleza crezca en los cultivos",
                    "C) Deterioran la calidad de los cultivos",
                    "D) Siguen a los humanos para sobrevivir"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 23 
                imagen: "", 
                pregunta: "¿Qué nexo completa el espacio en blanco en el texto?",
                opciones: [
                    "A)	debido a que",
                    "B)	del mismo modo",
                    "C)	por otro lado",
                    "D)	sin embargo"
                ],
                respuestaCorrecta: 0
            },
	    {
                // PREGUNTA 24 
                imagen: "", 
                pregunta: "¿Cuál opción es adecuada como pie de imagen de la figura 1?",
                opciones: [
                    "A) Rata café (Rattus norvegicus) de ciudad",
                    "B) Ratón (Peromyscus) comiendo semillas",
                    "C) Rata negra (Rattus rattus) de alcantarilla",
                    "D) Ratón doméstico (Mus musculus) comiendo frutas"
                ],
                respuestaCorrecta: 1
            },
	    {
                // PREGUNTA 25 
                imagen: "imagenes/25.png", 
                pregunta: "De acuerdo con el índice, ¿en cuál página hay información sobre las causas de la Independencia de México?",
                opciones: [
                    "A)	5",
                    "B)	32",
                    "C)	38",
                    "D)	44"
                ],
                respuestaCorrecta: 0
            },
	  {
                // PREGUNTA 26 
                imagen: "imagenes/26-27-28.png", 
                pregunta: "¿Cuál pregunta hace referencia a la información esencial del último párrafo?",
                opciones: [
                    "A)	¿Cómo beneficia el reciclaje al medio ambiente?",
                    "B)	¿Cuál es la principal razón para reciclar el vidrio?",
                    "C) ¿Cómo beneficia el reciclaje a la economía?",
                    "D) ¿Cuál es el motivo para reciclar papel?"
                ],
                respuestaCorrecta: 2
            },
  	   {
                // PREGUNTA 27 
                imagen: "", 
                pregunta: "¿Qué palabras completan los tres espacios en blanco que se presentan en el texto?",
                opciones: [
                    "A) insignificante – desde – oportunamente",
                    "B) desmedido – con – rápidamente",
                    "C) grande – de – difícilmente",
                    "D) enorme – para – fácilmente"
                ],
                respuestaCorrecta: 3
            },
	  {
                // PREGUNTA 28 
                imagen: "", 
                pregunta: "¿Qué significa la palabra vertidos que aparece en el segundo párrafo?",
                opciones: [
                    "A) Cuando pasa un líquido o una materia de un recipiente a otro",
                    "B) Conjunto de materiales de desecho que se vacían en algún lugar",
                    "C) El derrame de un líquido fuera del recipiente en que está contenido",
                    "D) Cantidad de agua de una corriente que desemboca en otra"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 29 
                imagen: "imagenes/19-20-21.png", 
                pregunta: "¿Cómo se sintió el hombre durante la noche?",
                opciones: [
                    "A) Temeroso, al escuchar un sonido que no comprendía",
                    "B) Inquieto, al ver a su perro gruñendo en la noche",
                    "C) Valiente, por enfrentarse a un monstruo nocturno",
                    "D) Molesto, porque le dieron una habitación con goteras"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 30 
                imagen: "", 
                pregunta: "¿Cuál de los siguientes hechos ocurre primero en el texto?",
                opciones: [
                    "A) El hombre saltó de la cama y se dirigió al centro de la habitación",
                    "B) El hombre corrió hacia la cama y se escondió bajo el cobertor",
                    "C) El posadero preparó una habitación grande y muy agradable",
                    "D) El posadero revisó todo sin encontrar la causa del espantoso sonido"
                ],
                respuestaCorrecta: 2
            },
           {
                // PREGUNTA 31 
                imagen: "", 
                pregunta: "Elige la opción que muestra la adaptación del enunciado subrayado a obra de teatro.",
                opciones: [
                    "A) — ¡Hay un fantasma en la posada! Pero no diga nada...",
                    "B) POSADERO (asustado): ¡Regresó! Creí que se había ido esa presencia.",
                    "C) — ¡Es muy extraño! Desde hace casi un año no se oyen ruidos.",
                    "D) POSADERO (nervioso): Por favor, no comente nada de lo sucedido."
                ],
                respuestaCorrecta: 1
            },
        ]

    },

    'L': {
        // Bloque 1 del Examen L
        1: [
            // AQUI: Preguntas del bloque 1 del examen L
        ]
        // AQUI: Agrega los demás bloques del examen L
    }
};

// Generar los 9 bloques de opciones
const generarBotonesBloques = () => {
    const contenedor = document.getElementById('lista-bloques');
    contenedor.innerHTML = '';
    
    let numeroPreguntaInicio = 1;
    
    // Obtenemos los bloques disponibles (1, 2, 3...) y los ordenamos
    const bloques = Object.keys(baseDeDatos[examenActual]).sort((a, b) => a - b);
    
    bloques.forEach((bloqueId) => {
        const cantidadPreguntas = baseDeDatos[examenActual][bloqueId].length;
        
        // Solo crea el botón si el bloque tiene preguntas adentro
        if (cantidadPreguntas > 0) {
            const numeroPreguntaFin = numeroPreguntaInicio + cantidadPreguntas - 1;
            
            const btn = document.createElement('button');
            btn.className = 'btn-bloque';
            btn.textContent = `Opción ${bloqueId}: Preguntas ${numeroPreguntaInicio} - ${numeroPreguntaFin}`;
            btn.onclick = () => iniciarCuestionario(parseInt(bloqueId));
            contenedor.appendChild(btn);
            
            // Actualizamos el número de inicio para el siguiente botón
            numeroPreguntaInicio = numeroPreguntaFin + 1;
        }
    });
};

// Navegación entre pantallas
const mostrarPantalla = (idPantalla) => {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    document.getElementById(idPantalla).classList.add('activa');
};

const seleccionarExamen = (tipo) => {
    examenActual = tipo;
    document.getElementById('titulo-bloques').textContent = `Bloques del Examen ${tipo}`;
    generarBotonesBloques();
    mostrarPantalla('pantalla-bloques');
};

const iniciarCuestionario = (bloque) => {
    bloqueActual = bloque;
    
    if (!baseDeDatos[examenActual][bloqueActual] || baseDeDatos[examenActual][bloqueActual].length === 0) {
        alert("Aún no has capturado las preguntas para este bloque en el código.");
        return;
    }

    construirPreguntasHTML();
    
    // === NUEVO: Reiniciar la barra de progreso al iniciar el bloque ===
    actualizarProgreso(); 
    
    document.getElementById('btn-calificar').style.display = 'block';
    document.getElementById('zona-resultados').style.display = 'none';
    mostrarPantalla('pantalla-preguntas');
};

const construirPreguntasHTML = () => {
    const contenedor = document.getElementById('contenedor-preguntas');
    contenedor.innerHTML = ''; 
    
    const preguntas = baseDeDatos[examenActual][bloqueActual];

    let numeroPreguntaGlobal = 1;
    const bloques = Object.keys(baseDeDatos[examenActual]).sort((a, b) => a - b);
    for (let i = 0; i < bloques.length; i++) {
        const bId = parseInt(bloques[i]);
        if (bId < bloqueActual) {
            numeroPreguntaGlobal += baseDeDatos[examenActual][bId].length;
        } else {
            break; 
        }
    }

    preguntas.forEach((item, index) => {
        const divPregunta = document.createElement('div');
        divPregunta.className = 'pregunta-card';

        let htmlImagen = '';
        if (item.imagen !== "") {
            htmlImagen = `<img src="${item.imagen}" class="imagen-pregunta" alt="Imagen de apoyo">`;
        }

        let htmlOpciones = '<div class="opciones">';
        item.opciones.forEach((opcion, i) => {
            // === NUEVO: Se agregó onchange="actualizarProgreso()" al input ===
            htmlOpciones += `
                <label class="opcion-label" id="label-p${index}-o${i}">
                    <input type="radio" name="pregunta${index}" value="${i}" onchange="actualizarProgreso()">
                    ${opcion}
                </label>
            `;
        });
        htmlOpciones += '</div>';

        divPregunta.innerHTML = `
            ${htmlImagen}
            <div class="texto-pregunta">${numeroPreguntaGlobal + index}. ${item.pregunta}</div>
            ${htmlOpciones}
        `;
        
        contenedor.appendChild(divPregunta);
    });
};

const calificarExamen = () => {
    const preguntas = baseDeDatos[examenActual][bloqueActual];
    let aciertos = 0;
    let todasRespondidas = true;

    preguntas.forEach((item, index) => {
        const opcionesRadio = document.getElementsByName(`pregunta${index}`);
        let respondida = false;
        let valorSeleccionado = null;

        opcionesRadio.forEach(radio => {
            radio.disabled = true;
            if (radio.checked) {
                respondida = true;
                valorSeleccionado = parseInt(radio.value);
            }
        });

        if (!respondida) {
            todasRespondidas = false;
        }

        const labelCorrecto = document.getElementById(`label-p${index}-o${item.respuestaCorrecta}`);
        labelCorrecto.classList.add('opcion-correcta'); 

        if (respondida && valorSeleccionado !== item.respuestaCorrecta) {
            const labelIncorrecto = document.getElementById(`label-p${index}-o${valorSeleccionado}`);
            labelIncorrecto.classList.add('opcion-incorrecta');
        }

        if (valorSeleccionado === item.respuestaCorrecta) {
            aciertos++;
        }
    });

    if (!todasRespondidas) {
        alert("Hay preguntas sin responder, pero te calificaré lo que contestaste.");
    }

    const calificacion = (aciertos / preguntas.length) * 10;
    const textoFinal = document.getElementById('texto-calificacion');
    textoFinal.textContent = `Obtuviste ${aciertos} de ${preguntas.length} aciertos. Tu calificación es: ${calificacion.toFixed(1)}`;
    
    document.getElementById('btn-calificar').style.display = 'none';
    document.getElementById('zona-resultados').style.display = 'block';

    // === NUEVO: Saber cuál es el último bloque dinámicamente ===
    const bloques = Object.keys(baseDeDatos[examenActual]).map(Number);
    const maxBloque = Math.max(...bloques);

    const btnSiguiente = document.getElementById('btn-siguiente-bloque');
    if (bloqueActual >= maxBloque) {
        btnSiguiente.style.display = 'none'; // Ocultar si es el último bloque
    } else {
        btnSiguiente.style.display = 'inline-block';
    }
};

const siguienteBloque = () => {
    // === NUEVO: Buscar el límite máximo de bloques ===
    const bloques = Object.keys(baseDeDatos[examenActual]).map(Number);
    const maxBloque = Math.max(...bloques);
    
    if (bloqueActual < maxBloque) {
        iniciarCuestionario(bloqueActual + 1);
        window.scrollTo(0, 0); 
    }
};

// === NUEVO: Función para actualizar la barra de progreso ===
const actualizarProgreso = () => {
    const preguntas = baseDeDatos[examenActual][bloqueActual];
    const totalPreguntas = preguntas.length;
    let respondidas = 0;

    // Revisar cuántas preguntas ya tienen una opción seleccionada
    for (let i = 0; i < totalPreguntas; i++) {
        const opciones = document.getElementsByName(`pregunta${i}`);
        for (let radio of opciones) {
            if (radio.checked) {
                respondidas++;
                break; 
            }
        }
    }

    // Calcular porcentaje y actualizar el HTML
    const porcentaje = (respondidas / totalPreguntas) * 100;
    document.getElementById('barra-progreso').style.width = `${porcentaje}%`;
    document.getElementById('texto-progreso').textContent = `${respondidas} de ${totalPreguntas} respondidas`;
};