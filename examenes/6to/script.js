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
                imagen: "imagenes/9-10.png", 
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
		posicionImagen: "abajo", 
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
		posicionImagen: "abajo", 
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
		posicionImagen: "abajo", 
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
		posicionImagen: "abajo", 
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
		posicionImagen: "abajo", 
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
        ],
	
	// Bloque 4: Preguntas 32 a 41
	4: [
	
            {
                // PREGUNTA 32 
                imagen: "imagenes/32.png",
		posicionImagen: "abajo", 
                pregunta: "De acuerdo con la información de la siguiente tabla, ¿cuál es el total de goles anotados por los clubes de futbol Balón y Caribe?",
                opciones: [
                    "A) 19",
                    "B) 17",
                    "C) 13",
                    "D) 16"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 33 
                imagen: "imagenes/33.png",
		posicionImagen: "abajo", 
                pregunta: "Este es el peso de algunos estudiantes de sexto grado. ¿Cuál es el valor de la mediana de los pesos de estos estudiantes?",
                opciones: [
                    "A) 52",
                    "B) 51",
                    "C) 46",
                    "D) 45"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 34 
                imagen: "imagenes/34.png",
		posicionImagen: "abajo", 
                pregunta: "Esta tabla muestra la cantidad de tortas que se vendieron en la cooperativa de la escuela durante tres días. ¿Qué tipo de torta representa la moda?",
                opciones: [
                    "A) Milanesa",
                    "B) Pollo",
                    "C) Queso",
                    "D) Jamón"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 35 
                imagen: "imagenes/35.png",
		posicionImagen: "abajo", 
                pregunta: "La siguiente gráfica muestra la cantidad de estudiantes que asistieron durante una semana a La Feria. ¿Cuál conjunto de datos originó esta gráfica?",
                opciones: [
                    "imagenes/35a.png",
                    "imagenes/35b.png",
                    "imagenes/35c.png",
                    "imagenes/35d.png"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 36 
                imagen: "", 
                pregunta: "En el mercado La Estrella, la venta de frijol suelto tiene diferentes precios. El frijol peruano cuesta $20.00 la bolsa con 400 gramos; el frijol pinto, $14.00 con 500 gramos; el frijol negro, $9.00 con 300 gramos, y el frijol bayo, $8.00 con 200 gramos. Considerando la relación entre el peso y el precio, ¿cuál bolsa de frijol conviene comprar?",
                opciones: [
                    "A) Peruano",
                    "B) Pinto",
                    "C) Negro",
                    "D) Bayo"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 37
                imagen: "imagenes/37.png",
		posicionImagen: "abajo", 
                pregunta: "El siguiente paquete de galletas te regala un 25% más de producto. ¿Qué fracción del total del producto original recibes de regalo?",
                opciones: [
                    "A) 1/6",
                    "B) 1/5",
                    "C) 1/4",
                    "D) 1/3"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 38 
                imagen: "", 
                pregunta: "En el juego “Número mayor”, al niño o la niña que le toque la cartulina con el número de mayor valor gana. ¿Quién ganó en la ronda conforme a las siguientes opciones?",
                opciones: [
                    "A) Mariana 0.42",
                    "B) Pepe 0.095",
                    "C) Laura 0.8",
                    "D) Antonio 0.308"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 39 
                imagen: "", 
                pregunta: "El papá de David compró mandado en el súper con un valor de $184. ¿Cómo se escribe ese número?",
                opciones: [
                    "A) Mil ochocientos cuatro",
                    "B) Diez y ochenta y cuatro",
                    "C) Ciento ocho cuatro",
                    "D) Ciento ochenta y cuatro"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 40 
                imagen: "", 
                pregunta: "¿Cuál de estos billetes de lotería tiene el número mayor?",
                opciones: [
                    "imagenes/40a.png",
                    "imagenes/40b.png",
                    "imagenes/40c.png",
                    "imagenes/40d.png"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 41 
                imagen: "", 
                pregunta: "¿En cuál de los siguientes corrales con animales las vacas representan 3/8 del total de ellos?",
                opciones: [
                    "imagenes/41a.png",
                    "imagenes/41b.png",
                    "imagenes/41c.png",
                    "imagenes/41d.png"
                ],
                respuestaCorrecta: 1
            },
        ],
	// Bloque 5: Preguntas 42 a 51
	5: [
	
            {
                // PREGUNTA 42 
                imagen: "", 
                pregunta: "La regla de una sucesión es: “El primer término de la sucesión es 6 y los siguientes términos se obtienen sumando cuatro a cada término anterior”. ¿Cuál es la sucesión que se obtiene de la regla anterior?",
                opciones: [
                    "A) 6, 9, 12, 15, 18",
                    "B) 6, 10, 14, 18, 22",
                    "C) 6, 11, 15, 19, 23",
                    "D) 6, 12, 18, 24, 30"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 43 
                imagen: "", 
                pregunta: " Para adornar el patio de la escuela, en las festividades de mayo, se juntaron dos tramos de cuerda con banderillas que midieron en total 9.452 m. Si uno de los tramos medía 3.57 m, ¿qué extensión tenía el otro tramo?",
                opciones: [
                    "A) 5.882 m",
                    "B) 9.095 m",
                    "C) 9.809 m",
                    "D) 6.982 m"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 44 
                imagen: "imagenes/44.png",
		posicionImagen: "abajo", 
                pregunta: "Tomando en cuenta la siguiente información, ¿cuántas toneladas de mandarina y naranja se produjeron en total en el año 2018?",
                opciones: [
                    "A) 393 699",
                    "B) 414 561",
                    "C) 101 556",
                    "D) 394 699"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 45 
                imagen: "", 
                pregunta: "Mónica fue al mercado y compró 3/4 de kilogramo de uvas rojas y 1/2 de kilogramo de uvas verdes sin semillas. ¿Qué cantidad de uvas compró en total?",
                opciones: [
                    "A) 4/6 kg",
                    "B) 4/4 kh",
                    "C) 5/5 kg",
                    "D) 5/4 kg"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 46 
                imagen: "", 
                pregunta: "Una fábrica de galletas tiene una producción de 18 547 galletas al día. Si las empaquetan en bolsas de 17 galletas cada una, ¿cuántas bolsas empaquetan en total?",
                opciones: [
                    "A) 1 191",
                    "B) 1 091",
                    "C) 1 081",
                    "D) 1 090"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 47
                imagen: "", 
                pregunta: "En la fiesta de Alicia se repartieron algunas pizzas entre sus 16 invitados. Si a cada uno le tocó 4/16 de pizza, ¿cuántas pizzas se repartieron?",
                opciones: [
                    "A) 2",
                    "B) 4",
                    "C) 8",
                    "D) 16"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 48 
                imagen: "", 
                pregunta: "Una pastelería compró 8 recipientes de leche con capacidad de 26.04 litros cada uno para la elaboración de sus pasteles. ¿Cuántos litros de leche compró en total?",
                opciones: [
                    "A) 208.02 L",
                    "B) 168.32 L",
                    "C) 348.32 L",
                    "D) 208.32 L"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 49 
                imagen: "", 
                pregunta: "En la colonia, se compraron 46 transformadores de corriente eléctrica nuevos a un costo de $84 980 cada uno para remplazar los dañados por una tormenta. ¿Cuál fue el pago total que se hizo por los transformadores?",
                opciones: [
                    "A) $3 908 080",
                    "B) $3 999 080",
                    "C) $3 909 080",
                    "D) $3 998 080"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 50 
                imagen: "imagenes/50.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuál es la regla que permite formar la secuencia de números de estos globos?",
                opciones: [
                    "A) Sumar 8 al número anterior",
                    "B) Sumar 9 al número anterior",
                    "C) Sumar 7 al número anterior",
                    "D) Sumar 6 al número anterior"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 51 
                imagen: "", 
                pregunta: "¿En cuál de los siguientes dibujos está marcado un ángulo recto?",
                opciones: [
                    "imagenes/51a.png",
                    "imagenes/51b.png",
                    "imagenes/51c.png",
                    "imagenes/51c.png"
                ],
                respuestaCorrecta: 2
            },
        ],
	// Bloque 6: Preguntas 52 a 62
	6: [
	
            {
                // PREGUNTA 52 
                imagen: "imagenes/52.png",
		posicionImagen: "abajo", 
                pregunta: "Elige tres características que describan esta figura geométrica.",
                opciones: [
                    "A) Un par de lados perpendiculares, un ángulo recto y tres ángulos agudos",
                    "B) Todos los lados iguales, dos ángulos rectos y un par de ángulos agudos que son iguales",
                    "C) Todos los lados desiguales, un ángulo recto y dos ángulos obtusos",
                    "D) Un par de lados paralelos, dos ángulos rectos y un ángulo obtuso"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 53 
                imagen: "", 
                pregunta: "Señala el cuerpo geométrico que tiene 5 caras, 8 aristas y 5 vértices.",
                opciones: [
                    "imagenes/53a.png",
                    "imagenes/53b.png",
                    "imagenes/53c.png",
                    "imagenes/53d.png"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 54 
                imagen: "imagenes/54.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuáles líneas son paralelas en el siguiente dibujo?",
                opciones: [
                    "A) 1 y 2",
                    "B) 3 y 4",
                    "C) 5 y 6",
                    "D) 7 y 8"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 55 
                imagen: "imagenes/55.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué opción señala un ángulo obtuso en el carrito del bebé?",
                opciones: [
                    "A) 1",
                    "B) 2",
                    "C) 3",
                    "D) 4"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 56 
                imagen: "", 
                pregunta: "En una competencia de atletismo, Ana recorrió 436 metros. ¿Qué distancia recorrió en kilómetros?",
                opciones: [
                    "A) 0.436 km",
                    "B) 4.36 km",
                    "C) 43.6 km",
                    "D) 436 km "
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 57
                imagen: "", 
                pregunta: "Mario horneó polvorones que pesan 73 gramos cada uno. ¿A cuántos miligramos equivale su peso?",
                opciones: [
                    "A) 730 mg",
                    "B) 7 300 mg",
                    "C) 73 000 mg",
                    "D) 730 000 mg"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 58 
                imagen: "", 
                pregunta: "Para las celebraciones de mayo, la escuela elaboró 4.5 litros de agua de limón. ¿A cuántos mililitros equivale?",
                opciones: [
                    "A) 45 ml",
                    "B) 450 ml",
                    "C) 4 500",
                    "D) 45 000"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 59 
                imagen: "imagenes/59.png",
		posicionImagen: "abajo", 
                pregunta: "Édgar se encuentra en la esquina de Ignacio López Rayón y Gral. Jerónimo Treviño. Quiere llegar a la iglesia El Rosario que se encuentra en la esquina de Ramón Corona y Albino Espinoza. ¿Qué ruta debe seguir para llegar a la iglesia?",
                opciones: [
                    "A) Caminar 8 cuadras sobre Jerónimo Treviño hacia el oeste y dar vuelta al sur y caminar 4 cuadras",
                    "B) Caminar 3 cuadras sobre Ignacio López Rayón hacia el sur y dar vuelta al oeste y caminar 8 cuadras",
                    "C) Caminar 4 cuadras sobre Ignacio López Rayón hacia el sur, dar vuelta al oeste y caminar 6 cuadras",
                    "D) Caminar 6 cuadras sobre Jerónimo Treviño hacia el oeste, dar vuelta al sur y caminar 4 cuadras"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 60 
                imagen: "imagenes/60.png",
		posicionImagen: "abajo", 
                pregunta: "En la siguiente figura, el punto Q se encuentra en las coordenadas (6, 3). ¿En qué coordenadas se encuentra el punto P?",
                opciones: [
                    "A) (6, 1)",
                    "B) (3, 3)",
                    "C) (8, 6)",
                    "D) (8, 1)"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 61 
                imagen: "imagenes/61.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué figura se encuentra en las coordenadas (4, 3)?",
                opciones: [
                    "imagenes/61a.png",
                    "imagenes/61b.png",
                    "imagenes/61c.png",
                    "imagenes/61d.png"
                ],
                respuestaCorrecta: 2
            },
	    {
	        // PREGUNTA 62 
                imagen: "imagenes/62.png",
		posicionImagen: "abajo", 
                pregunta: "La maestra de Deportes sale de la esquina de Hidalgo y Carranza a correr todos los días. Si corre tres calles al sur, cuatro hacia el oeste y una hacia el sur, ¿a qué esquina llega?",
                opciones: [
                    "A) Allende y Madero",
                    "B) Villa y Corregidora",
                    "C) Corregidora y Madero",
                    "D) Obregón y Corregidora"
                ],
                respuestaCorrecta: 2
            },
        ],

	// Bloque 7: Preguntas 63 a 72
	7: [
	
            {
                // PREGUNTA 63 
                imagen: "imagenes/63.png",
		posicionImagen: "abajo", 
                pregunta: "César realizó un experimento. Dejó 3 caracoles y 3 pequeños platos con diferentes alimentos como indica la tabla: Después de 3 días midió la masa de los alimentos que quedaba en cada plato. ¿Qué pregunta quería César resolver con este experimento?",
                opciones: [
                    "A) ¿Se pelean los caracoles por la comida de cada plato?",
                    "B) ¿Comen los tres caracoles el mismo tipo de alimento?",
                    "C) ¿Cuál de los alimentos utilizado es el preferido por los caracoles?",
                    "D) ¿Cuándo come un caracol de cada plato de alimento en el día?"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 64 
                imagen: "imagenes/64.png",
		posicionImagen: "abajo", 
                pregunta: "Elige las actividades que contaminan el suelo.",
                opciones: [
                    "A) 2, 5",
                    "B) 1, 3",
                    "C) 3, 4",
                    "D) 1, 4"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 65 
                imagen: "imagenes/65.png",
		posicionImagen: "abajo", 
                pregunta: "Selecciona los cambios físicos que experimentan las niñas en la pubertad.",
                opciones: [
                    "A) 1 y 4",
                    "B) 2 y 3",
                    "C) 1 y 3",
                    "D) 3 y 4"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 66 
                imagen: "", 
                pregunta: "Frente a un fenómeno natural extremo, ¿cuál es el mayor riesgo para las personas?",
                opciones: [
                    "A) Pérdida de la vida frente a los efectos de un fenómeno natural",
                    "B) Interrupción de servicios básicos, como electricidad y agua potable",
                    "C) Desplazamiento de personas a otros lugares por perder sus hogares",
                    "D) Daños económicos por la pérdida de casa, auto y pertenencias"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 67 
                imagen: "", 
                pregunta: "En la Tierra ocurren cambios estacionales, como primavera, verano, otoño e invierno. La causa de este fenómeno es el movimiento:",
                opciones: [
                    "A) oceánico",
                    "B) de rotación",
                    "C) tectónico",
                    "D) de traslación"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 68
                imagen: "", 
                pregunta: "Encima de dos casas y tres autos cayó gran cantidad de tierra y rocas de un cerro. ¿Qué sucedió?",
                opciones: [
                    "A) Una inundación",
                    "B) Un huracán",
                    "C) Un incendio",
                    "D) Un deslave"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 69 
                imagen: "imagenes/69.png",
		posicionImagen: "abajo", 
                pregunta: "La imagen muestra el sistema respiratorio y sus principales órganos. ¿Qué función cumplen los pulmones?",
                opciones: [
                    "A) Contraer y expandir la cavidad torácica",
                    "B) Intercambiar oxígeno y dióxido de carbono",
                    "C) Transportar oxígeno a todo el cuerpo",
                    "D) Proteger las vías respiratorias al comer"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 70 
                imagen: "imagenes/70.png",
		posicionImagen: "abajo", 
                pregunta: "Un estudio de cáncer de pulmón tuvo los resultados que se presentan en el gráfico. ¿Qué conclusión se obtiene?",
                opciones: [
                    "A) Las personas no fumadoras no tienen cáncer de pulmón",
                    "B) Los fumadores de cigarrillos sufren más cáncer de pulmón que los otros grupos",
                    "C) Las personas que fuman habanos no presentan cáncer de pulmón",
                    "D) Los fumadores de pipa padecen menos cáncer de pulmón que los fumadores de habanos"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 71 
                imagen: "", 
                pregunta: "Estos organismos pueden ser microscópicos o macroscópicos. Se alimentan de otros y viven en ambientes muy húmedos. Algunos viven en los bosques y son visibles en épocas de lluvia con formas y colores llamativos. Se encuentran unidos al suelo o en troncos de árboles. ¿A qué reino pertenecen los organismos descritos?",
                opciones: [
                    "A) Plantas",
                    "B) Hongos",
                    "C) Animales",
                    "D) Bacterias"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 72 
                imagen: "imagenes/72.png",
		posicionImagen: "abajo", 
                pregunta: "Ana tiene un calentador de agua en el techo de su casa, como el que se muestra en la imagen. Lo utiliza para bañarse y cocinar. No requiere gas ni electricidad para que funcione. ¿De dónde proviene la energía que calienta el agua?",
                opciones: [
                    "A) De la luna",
                    "B) Del sol",
                    "C) De la tierra",
                    "D) Del aire"
                ],
                respuestaCorrecta: 1
            },
        ],
	// Bloque 8: Preguntas 73 a 82
	8: [
	
            {
                // PREGUNTA 73 
                imagen: "", 
                pregunta: "La permeabilidad es una característica de algunos materiales que permite el paso de líquidos a través de ellos sin alterar su composición. ¿Cuál opción presenta solo objetos permeables?",
                opciones: [
                    "A) Espejo de cristal y traste de plástico",
                    "B) Trozo de tela y roca porosa",
                    "C) Charola de metal y trozo de tela",
                    "D) Roca porosa y espejo de cristal"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 74 
                imagen: "", 
                pregunta: "Una persona que presenta altos niveles de grasa en la sangre; que come muchas frituras, pan y refresco, y que pasa mucho tiempo sentado frente al televisor, fue al médico porque se siente muy cansado. ¿Qué recomendaciones le dará el doctor?",
                opciones: [
                    "A) Dormir por las tardes, comer más carne y ver documentales en el televisor",
                    "B) Correr por las noches, comer muchas frutas y ver más programas educativos",
                    "C) Realizar ejercicio físico, comer más verduras y reducir el consumo de azúcares",
                    "D) Bajar el consumo de azúcares, incrementar el consumo de grasas y dormir menos"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 75 
                imagen: "", 
                pregunta: "¿Qué hábito es indispensable para mantenerse limpio y evitar enfermedades en la piel y órganos externos?",
                opciones: [
                    "A) Hacer ejercicio todos los días",
                    "B) Bañarse diariamente",
                    "C) Comer frutas y verduras",
                    "D) Lavarse los dientes correctamente"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 76 
                imagen: "", 
                pregunta: "¿En qué situación podemos apreciar el movimiento de rotación de la Tierra?",
                opciones: [
                    "A) En la sucesión del día y la noche",
                    "B) En la sucesión de las estaciones",
                    "C) En la ocurrencia de las fases lunares",
                    "D) En la ocurrencia de eclipses"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 77 
                imagen: "imagenes/77.png",
		posicionImagen: "abajo", 
                pregunta: "La imagen muestra una planta de producción de energía eléctrica que es aprovechada en hogares y empresas. ¿Qué tipo de energía es la que se utiliza para producir la energía eléctrica?",
                opciones: [
                    "A) Solar",
                    "B) Nuclear",
                    "C) Magnética",
                    "D) Eólica"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 78
                imagen: "", 
                pregunta: "Observa el dibujo que representa el ciclo del agua. El orden de las etapas del ciclo del agua es:",
                opciones: [
                    "A) 2,1,4,3",
                    "B) 2,3,4,1",
                    "C) 1,2,3,4",
                    "D) 3,2,4,1"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 79 
                imagen: "imagenes/79.png",
		posicionImagen: "abajo", 
                pregunta: "En una ciudad inicia una campaña sobre el cuidado del agua. Dan a conocer los siguientes mensajes:",
                opciones: [
                    "A) promueven buenos hábitos de aseo del hogar y cuidado del cuerpo",
                    "B) evita la contaminación que se produce en el medioambiente",
                    "C) promueve el cuidado de un recurso que es escaso y fundamental",
                    "D) evita que las personas paguen cuentas de agua muy caras"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 80 
                imagen: "imagenes/80.png",
		posicionImagen: "abajo", 
                pregunta: "La imagen muestra una cadena alimenticia.",
                opciones: [
                    "A) La cantidad de águilas aumentaría",
                    "B) Las plantas dejarían de ser comidas por saltamontes",
                    "C) La cantidad de saltamontes aumentaría",
                    "D) Las águilas comenzarían a alimentarse de plantas"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 81 
                imagen: "", 
                pregunta: "En la clase de ciencias, el maestro pidió un tríptico sobre la contaminación del medioambiente; podían usar internet con la condición de que la fuente fuera confiable. ¿Qué fuente cumple con la condición?",
                opciones: [
                    "A) Gaceta virtual de la Universidad Nacional Autónoma de México",
                    "B) Video explicativo de la red social sobre el deterioro ambiental en el mundo",
                    "C) El deterioro ambiental y amigos de la naturaleza: Grupo de red social",
                    "D) Página web tareas.com, relacionada con gran cantidad de artículos"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 82 
                imagen: "", 
                pregunta: "¿Cuál de los siguientes modelos muestra por qué hay día y noche?",
                opciones: [
                    "imagenes/82a.png",
                    "imagenes/82b.png",
                    "imagenes/82c.png",
                    "imagenes/82d.png"
                ],
                respuestaCorrecta: 3
            },
        ],
	// Bloque 9: Preguntas 83 a 92
	9: [
	
            {
                // PREGUNTA 83 
                imagen: "", 
                pregunta: "Ivón quiere saber si los jaguares viven en todo el continente americano o solo en México. ¿En dónde puede obtener información confiable?",
                opciones: [
                    "A) En el puesto de revistas y periódicos de la colonia",
                    "B) En plataformas audiovisuales de alto impacto",
                    "C) En redes sociales y páginas de internet de libre acceso",
                    "D) En libros, páginas de instituciones y organizaciones formales"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 84 
                imagen: "imagenes/84.png",
		posicionImagen: "abajo", 
                pregunta: "La imagen muestra el aparato reproductor masculino",
                opciones: [
                    "imagenes/84a.png",
                    "imagenes/84b.png",
                    "imagenes/84c.png",
                    "imagenes/84d.png"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 85 
                imagen: "imagenes/85.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuál opción indica los nombres que faltan de los órganos del aparato reproductor femenino?",
                opciones: [
                    "imagenes/85a.png",
                    "imagenes/85b.png",
                    "imagenes/85c.png",
                    "imagenes/85d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 86 
                imagen: "", 
                pregunta: "¿Cuál de los siguientes modelos representa el movimiento de traslación de la Tierra?",
                opciones: [
                    "imagenes/86a.png",
                    "imagenes/86b.png",
                    "imagenes/86c.png",
                    "imagenes/86d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 87 
                imagen: "", 
                pregunta: "La madera es un recurso natural que se extrae de los bosques y es utilizada en diversos objetos y actividades cotidianas. Se usa, por ejemplo, para la:",
                opciones: [
                    "A) producción de energía eléctrica y la construcción",
                    "B) elaboración de muebles y la producción de carbón",
                    "C) producción alimentaria y la elaboración de muebles",
                    "D) elaboración de prendas y la construcción"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 88
                imagen: "imagenes/88.png",
		posicionImagen: "abajo", 
                pregunta: "Selecciona las formas de ahorrar energía eléctrica.",
                opciones: [
                    "A) 1,2,5",
                    "B) 2,3,4",
                    "C) 1,3,4",
                    "D) 2,4,5"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 89 
                imagen: "", 
                pregunta: "El agua es la única sustancia presente en la Tierra en sus tres estados. En este sentido, ¿cuál opción completa el texto? La encontramos en estado___________ en los ríos, lagos y mares; en estado ___________ en el vapor de las nubes y en estado___________ en hielo o glaciares.",
                opciones: [
                    "A) sólido, líquido y gaseoso",
                    "B) líquido, sólido y gaseoso",
                    "C) líquido, gaseoso y sólido",
                    "D) gaseoso, líquido y sólido"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 90 
                imagen: "imagenes/90.png",
		posicionImagen: "abajo", 
                pregunta: "Los cambios biológicos que experimentan los niños y las niñas en la pubertad señalan el inicio de la madurez sexual. Relaciona el sexo con el cambio biológico que le corresponde.",
                opciones: [
                    "imagenes/90a.png",
                    "imagenes/90b.png",
                    "imagenes/90c.png",
                    "imagenes/90d.png"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 91 
                imagen: "", 
                pregunta: "Para una alimentación equilibrada debe considerarse el aporte de nutrientes de distintos alimentos, así como conservar el buen funcionamiento del organismo. ¿Cuál de las opciones de alimentos provee un amplio aporte de nutrientes para una persona sana?",
                opciones: [
                    "A) Zanahoria, galletas, jugo de naranja",
                    "B) Pescado, frijoles, espinacas",
                    "C) Pescado, papas fritas, carne de res",
                    "D) Frijoles, manteca, pasteles"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 92 
                imagen: "", 
                pregunta: "Es la energía producida por el viento. Fue la primera que utilizó el hombre en los barcos de vela y los molinos. Es inagotable, limpia y no contamina.",
                opciones: [
                    "A) Geotérmica",
                    "B) Oceánica",
                    "C) Mecánica",
                    "D) Eólica"
                ],
                respuestaCorrecta: 3
            },
        ]

    },

    'L': {
         // Bloque 1: Preguntas 1 a 10
        1: [

	  {
                // PREGUNTA 1 
                imagen: "imagenes/l-1-2-3.png", 
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
                // PREGUNTA 2
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
                // PREGUNTA 3 
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
                // PREGUNTA 4 
                imagen: "imagenes/25.png",
		posicionImagen: "abajo", 
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
                // PREGUNTA 5 
                imagen: "imagenes/l-5-6-7.png", 
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
                // PREGUNTA 6 
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
                // PREGUNTA 7 
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
                // PREGUNTA 8 
                imagen: "imagenes/l-8-9-10.png", 
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
                // PREGUNTA 9 
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
                // PREGUNTA 10 
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

        ],

        // Bloque 2: Preguntas 11 a 20
        2: [

            {
                // PREGUNTA 11
                // Si no hay imagen, deja las comillas vacías: imagen: ""
                imagen: "imagenes/l-11-12.png",
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
                // PREGUNTA 12 
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
                // PREGUNTA 13 
                imagen: "imagenes/l-13-14-15.png", 
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
                // PREGUNTA 14 
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
                // PREGUNTA 15 
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
                // PREGUNTA 16 
                imagen: "imagenes/l-16-17-18.png", 
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
                // PREGUNTA 17 
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
                // PREGUNTA 18 
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
                // PREGUNTA 19 
                imagen: "imagenes/l-19-20.png", 
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
                // PREGUNTA 20 
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
                // PREGUNTA 21
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
       
	// Bloque 3: Preguntas 22 a 31
        3: [

            {
                // PREGUNTA 22 
                imagen: "imagenes/12.png",
		posicionImagen: "abajo", 
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
                // PREGUNTA 23 
                imagen: "imagenes/13.png",
		posicionImagen: "abajo", 
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
                // PREGUNTA 24 
                imagen: "imagenes/14.png",
		posicionImagen: "abajo", 
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
                // PREGUNTA 25
                imagen: "imagenes/15.png",
		posicionImagen: "abajo", 
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
                // PREGUNTA 26 
                imagen: "imagenes/l-26-27-28.png", 
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
                // PREGUNTA 27 
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
                // PREGUNTA 28 
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
                // PREGUNTA 29 
                imagen: "imagenes/l-29-30-31.png", 
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
                // PREGUNTA 30 
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
                // PREGUNTA 31 
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
	
	// Bloque 4: Preguntas 32 a 41
	4: [

            {
                // PREGUNTA 32 
                imagen: "imagenes/52.png",
		posicionImagen: "abajo", 
                pregunta: "Elige tres características que describan esta figura geométrica.",
                opciones: [
                    "A) Un par de lados perpendiculares, un ángulo recto y tres ángulos agudos",
                    "B) Todos los lados iguales, dos ángulos rectos y un par de ángulos agudos que son iguales",
                    "C) Todos los lados desiguales, un ángulo recto y dos ángulos obtusos",
                    "D) Un par de lados paralelos, dos ángulos rectos y un ángulo obtuso"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 33 
                imagen: "", 
                pregunta: "Señala el cuerpo geométrico que tiene 5 caras, 8 aristas y 5 vértices.",
                opciones: [
                    "imagenes/53a.png",
                    "imagenes/53b.png",
                    "imagenes/53c.png",
                    "imagenes/53d.png"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 34 
                imagen: "imagenes/54.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuáles líneas son paralelas en el siguiente dibujo?",
                opciones: [
                    "A) 1 y 2",
                    "B) 3 y 4",
                    "C) 5 y 6",
                    "D) 7 y 8"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 35 
                imagen: "imagenes/55.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué opción señala un ángulo obtuso en el carrito del bebé?",
                opciones: [
                    "A) 1",
                    "B) 2",
                    "C) 3",
                    "D) 4"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 36 
                imagen: "", 
                pregunta: "En una competencia de atletismo, Ana recorrió 436 metros. ¿Qué distancia recorrió en kilómetros?",
                opciones: [
                    "A) 0.436 km",
                    "B) 4.36 km",
                    "C) 43.6 km",
                    "D) 436 km "
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 37
                imagen: "", 
                pregunta: "Mario horneó polvorones que pesan 73 gramos cada uno. ¿A cuántos miligramos equivale su peso?",
                opciones: [
                    "A) 730 mg",
                    "B) 7 300 mg",
                    "C) 73 000 mg",
                    "D) 730 000 mg"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 38 
                imagen: "", 
                pregunta: "Para las celebraciones de mayo, la escuela elaboró 4.5 litros de agua de limón. ¿A cuántos mililitros equivale?",
                opciones: [
                    "A) 45 ml",
                    "B) 450 ml",
                    "C) 4 500",
                    "D) 45 000"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 39 
                imagen: "imagenes/59.png",
		posicionImagen: "abajo", 
                pregunta: "Édgar se encuentra en la esquina de Ignacio López Rayón y Gral. Jerónimo Treviño. Quiere llegar a la iglesia El Rosario que se encuentra en la esquina de Ramón Corona y Albino Espinoza. ¿Qué ruta debe seguir para llegar a la iglesia?",
                opciones: [
                    "A) Caminar 8 cuadras sobre Jerónimo Treviño hacia el oeste y dar vuelta al sur y caminar 4 cuadras",
                    "B) Caminar 3 cuadras sobre Ignacio López Rayón hacia el sur y dar vuelta al oeste y caminar 8 cuadras",
                    "C) Caminar 4 cuadras sobre Ignacio López Rayón hacia el sur, dar vuelta al oeste y caminar 6 cuadras",
                    "D) Caminar 6 cuadras sobre Jerónimo Treviño hacia el oeste, dar vuelta al sur y caminar 4 cuadras"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 40 
                imagen: "imagenes/60.png",
		posicionImagen: "abajo", 
                pregunta: "En la siguiente figura, el punto Q se encuentra en las coordenadas (6, 3). ¿En qué coordenadas se encuentra el punto P?",
                opciones: [
                    "A) (6, 1)",
                    "B) (3, 3)",
                    "C) (8, 6)",
                    "D) (8, 1)"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 41 
                imagen: "imagenes/61.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué figura se encuentra en las coordenadas (4, 3)?",
                opciones: [
                    "imagenes/61a.png",
                    "imagenes/61b.png",
                    "imagenes/61c.png",
                    "imagenes/61d.png"
                ],
                respuestaCorrecta: 2
            },	
        ],

	// Bloque 5: Preguntas 42 a 51
	5: [
	
	    {
	        // PREGUNTA 42 
                imagen: "imagenes/62.png",
		posicionImagen: "abajo", 
                pregunta: "La maestra de Deportes sale de la esquina de Hidalgo y Carranza a correr todos los días. Si corre tres calles al sur, cuatro hacia el oeste y una hacia el sur, ¿a qué esquina llega?",
                opciones: [
                    "A) Allende y Madero",
                    "B) Villa y Corregidora",
                    "C) Corregidora y Madero",
                    "D) Obregón y Corregidora"
                ],
                respuestaCorrecta: 2
            },
	   {
                // PREGUNTA 43 
                imagen: "imagenes/32.png",
		posicionImagen: "abajo", 
                pregunta: "De acuerdo con la información de la siguiente tabla, ¿cuál es el total de goles anotados por los clubes de futbol Balón y Caribe?",
                opciones: [
                    "A) 19",
                    "B) 17",
                    "C) 13",
                    "D) 16"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 44 
                imagen: "imagenes/33.png",
		posicionImagen: "abajo", 
                pregunta: "Este es el peso de algunos estudiantes de sexto grado. ¿Cuál es el valor de la mediana de los pesos de estos estudiantes?",
                opciones: [
                    "A) 52",
                    "B) 51",
                    "C) 46",
                    "D) 45"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 45 
                imagen: "imagenes/34.png",
		posicionImagen: "abajo", 
                pregunta: "Esta tabla muestra la cantidad de tortas que se vendieron en la cooperativa de la escuela durante tres días. ¿Qué tipo de torta representa la moda?",
                opciones: [
                    "A) Milanesa",
                    "B) Pollo",
                    "C) Queso",
                    "D) Jamón"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 46 
                imagen: "imagenes/35.png",
		posicionImagen: "abajo", 
                pregunta: "La siguiente gráfica muestra la cantidad de estudiantes que asistieron durante una semana a La Feria. ¿Cuál conjunto de datos originó esta gráfica?",
                opciones: [
                    "imagenes/35a.png",
                    "imagenes/35b.png",
                    "imagenes/35c.png",
                    "imagenes/35d.png"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 47 
                imagen: "", 
                pregunta: "En el mercado La Estrella, la venta de frijol suelto tiene diferentes precios. El frijol peruano cuesta $20.00 la bolsa con 400 gramos; el frijol pinto, $14.00 con 500 gramos; el frijol negro, $9.00 con 300 gramos, y el frijol bayo, $8.00 con 200 gramos. Considerando la relación entre el peso y el precio, ¿cuál bolsa de frijol conviene comprar?",
                opciones: [
                    "A) Peruano",
                    "B) Pinto",
                    "C) Negro",
                    "D) Bayo"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 48
                imagen: "imagenes/37.png",
		posicionImagen: "abajo", 
                pregunta: "El siguiente paquete de galletas te regala un 25% más de producto. ¿Qué fracción del total del producto original recibes de regalo?",
                opciones: [
                    "A) 1/6",
                    "B) 1/5",
                    "C) 1/4",
                    "D) 1/3"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 49 
                imagen: "", 
                pregunta: "En el juego “Número mayor”, al niño o la niña que le toque la cartulina con el número de mayor valor gana. ¿Quién ganó en la ronda conforme a las siguientes opciones?",
                opciones: [
                    "A) Mariana 0.42",
                    "B) Pepe 0.095",
                    "C) Laura 0.8",
                    "D) Antonio 0.308"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 50 
                imagen: "", 
                pregunta: "El papá de David compró mandado en el súper con un valor de $184. ¿Cómo se escribe ese número?",
                opciones: [
                    "A) Mil ochocientos cuatro",
                    "B) Diez y ochenta y cuatro",
                    "C) Ciento ocho cuatro",
                    "D) Ciento ochenta y cuatro"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 51 
                imagen: "", 
                pregunta: "¿Cuál de estos billetes de lotería tiene el número mayor?",
                opciones: [
                    "imagenes/40a.png",
                    "imagenes/40b.png",
                    "imagenes/40c.png",
                    "imagenes/40d.png"
                ],
                respuestaCorrecta: 3
            },
        ],

	// Bloque 6: Preguntas 52 a 62
	6: [
	
            {
                // PREGUNTA 52 
                imagen: "", 
                pregunta: "¿En cuál de los siguientes corrales con animales las vacas representan 3/8 del total de ellos?",
                opciones: [
                    "imagenes/41a.png",
                    "imagenes/41b.png",
                    "imagenes/41c.png",
                    "imagenes/41d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 53 
                imagen: "", 
                pregunta: "La regla de una sucesión es: “El primer término de la sucesión es 6 y los siguientes términos se obtienen sumando cuatro a cada término anterior”. ¿Cuál es la sucesión que se obtiene de la regla anterior?",
                opciones: [
                    "A) 6, 9, 12, 15, 18",
                    "B) 6, 10, 14, 18, 22",
                    "C) 6, 11, 15, 19, 23",
                    "D) 6, 12, 18, 24, 30"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 54 
                imagen: "", 
                pregunta: " Para adornar el patio de la escuela, en las festividades de mayo, se juntaron dos tramos de cuerda con banderillas que midieron en total 9.452 m. Si uno de los tramos medía 3.57 m, ¿qué extensión tenía el otro tramo?",
                opciones: [
                    "A) 5.882 m",
                    "B) 9.095 m",
                    "C) 9.809 m",
                    "D) 6.982 m"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 55 
                imagen: "imagenes/44.png",
		posicionImagen: "abajo", 
                pregunta: "Tomando en cuenta la siguiente información, ¿cuántas toneladas de mandarina y naranja se produjeron en total en el año 2018?",
                opciones: [
                    "A) 393 699",
                    "B) 414 561",
                    "C) 101 556",
                    "D) 394 699"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 56 
                imagen: "", 
                pregunta: "Mónica fue al mercado y compró 3/4 de kilogramo de uvas rojas y 1/2 de kilogramo de uvas verdes sin semillas. ¿Qué cantidad de uvas compró en total?",
                opciones: [
                    "A) 4/6 kg",
                    "B) 4/4 kh",
                    "C) 5/5 kg",
                    "D) 5/4 kg"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 57 
                imagen: "", 
                pregunta: "Una fábrica de galletas tiene una producción de 18 547 galletas al día. Si las empaquetan en bolsas de 17 galletas cada una, ¿cuántas bolsas empaquetan en total?",
                opciones: [
                    "A) 1 191",
                    "B) 1 091",
                    "C) 1 081",
                    "D) 1 090"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 58
                imagen: "", 
                pregunta: "En la fiesta de Alicia se repartieron algunas pizzas entre sus 16 invitados. Si a cada uno le tocó 4/16 de pizza, ¿cuántas pizzas se repartieron?",
                opciones: [
                    "A) 2",
                    "B) 4",
                    "C) 8",
                    "D) 16"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 59 
                imagen: "", 
                pregunta: "Una pastelería compró 8 recipientes de leche con capacidad de 26.04 litros cada uno para la elaboración de sus pasteles. ¿Cuántos litros de leche compró en total?",
                opciones: [
                    "A) 208.02 L",
                    "B) 168.32 L",
                    "C) 348.32 L",
                    "D) 208.32 L"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 60 
                imagen: "", 
                pregunta: "En la colonia, se compraron 46 transformadores de corriente eléctrica nuevos a un costo de $84 980 cada uno para remplazar los dañados por una tormenta. ¿Cuál fue el pago total que se hizo por los transformadores?",
                opciones: [
                    "A) $3 908 080",
                    "B) $3 999 080",
                    "C) $3 909 080",
                    "D) $3 998 080"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 61 
                imagen: "imagenes/50.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuál es la regla que permite formar la secuencia de números de estos globos?",
                opciones: [
                    "A) Sumar 8 al número anterior",
                    "B) Sumar 9 al número anterior",
                    "C) Sumar 7 al número anterior",
                    "D) Sumar 6 al número anterior"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 62 
                imagen: "", 
                pregunta: "¿En cuál de los siguientes dibujos está marcado un ángulo recto?",
                opciones: [
                    "imagenes/51a.png",
                    "imagenes/51b.png",
                    "imagenes/51c.png",
                    "imagenes/51c.png"
                ],
                respuestaCorrecta: 2
            },
        ],

	// Bloque 7: Preguntas 63 a 73
	7: [
	   {
                // PREGUNTA 63 
                imagen: "", 
                pregunta: "¿Qué hábito es indispensable para mantenerse limpio y evitar enfermedades en la piel y órganos externos?",
                opciones: [
                    "A) Hacer ejercicio todos los días",
                    "B) Bañarse diariamente",
                    "C) Comer frutas y verduras",
                    "D) Lavarse los dientes correctamente"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 64 
                imagen: "", 
                pregunta: "¿En qué situación podemos apreciar el movimiento de rotación de la Tierra?",
                opciones: [
                    "A) En la sucesión del día y la noche",
                    "B) En la sucesión de las estaciones",
                    "C) En la ocurrencia de las fases lunares",
                    "D) En la ocurrencia de eclipses"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 65 
                imagen: "imagenes/77.png",
		posicionImagen: "abajo", 
                pregunta: "La imagen muestra una planta de producción de energía eléctrica que es aprovechada en hogares y empresas. ¿Qué tipo de energía es la que se utiliza para producir la energía eléctrica?",
                opciones: [
                    "A) Solar",
                    "B) Nuclear",
                    "C) Magnética",
                    "D) Eólica"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 66
                imagen: "", 
                pregunta: "Observa el dibujo que representa el ciclo del agua. El orden de las etapas del ciclo del agua es:",
                opciones: [
                    "A) 2,1,4,3",
                    "B) 2,3,4,1",
                    "C) 1,2,3,4",
                    "D) 3,2,4,1"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 67 
                imagen: "imagenes/79.png",
		posicionImagen: "abajo", 
                pregunta: "En una ciudad inicia una campaña sobre el cuidado del agua. Dan a conocer los siguientes mensajes:",
                opciones: [
                    "A) promueven buenos hábitos de aseo del hogar y cuidado del cuerpo",
                    "B) evita la contaminación que se produce en el medioambiente",
                    "C) promueve el cuidado de un recurso que es escaso y fundamental",
                    "D) evita que las personas paguen cuentas de agua muy caras"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 68 
                imagen: "imagenes/80.png",
		posicionImagen: "abajo", 
                pregunta: "La imagen muestra una cadena alimenticia.",
                opciones: [
                    "A) La cantidad de águilas aumentaría",
                    "B) Las plantas dejarían de ser comidas por saltamontes",
                    "C) La cantidad de saltamontes aumentaría",
                    "D) Las águilas comenzarían a alimentarse de plantas"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 69 
                imagen: "", 
                pregunta: "En la clase de ciencias, el maestro pidió un tríptico sobre la contaminación del medioambiente; podían usar internet con la condición de que la fuente fuera confiable. ¿Qué fuente cumple con la condición?",
                opciones: [
                    "A) Gaceta virtual de la Universidad Nacional Autónoma de México",
                    "B) Video explicativo de la red social sobre el deterioro ambiental en el mundo",
                    "C) El deterioro ambiental y amigos de la naturaleza: Grupo de red social",
                    "D) Página web tareas.com, relacionada con gran cantidad de artículos"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 70 
                imagen: "", 
                pregunta: "¿Cuál de los siguientes modelos muestra por qué hay día y noche?",
                opciones: [
                    "imagenes/82a.png",
                    "imagenes/82b.png",
                    "imagenes/82c.png",
                    "imagenes/82d.png"
                ],
                respuestaCorrecta: 3
            },	
            {
                // PREGUNTA 71 
                imagen: "", 
                pregunta: "Ivón quiere saber si los jaguares viven en todo el continente americano o solo en México. ¿En dónde puede obtener información confiable?",
                opciones: [
                    "A) En el puesto de revistas y periódicos de la colonia",
                    "B) En plataformas audiovisuales de alto impacto",
                    "C) En redes sociales y páginas de internet de libre acceso",
                    "D) En libros, páginas de instituciones y organizaciones formales"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 72
                imagen: "imagenes/84.png",
		posicionImagen: "abajo", 
                pregunta: "La imagen muestra el aparato reproductor masculino",
                opciones: [
                    "imagenes/84a.png",
                    "imagenes/84b.png",
                    "imagenes/84c.png",
                    "imagenes/84d.png"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 73 
                imagen: "imagenes/85.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuál opción indica los nombres que faltan de los órganos del aparato reproductor femenino?",
                opciones: [
                    "imagenes/85a.png",
                    "imagenes/85b.png",
                    "imagenes/85c.png",
                    "imagenes/85d.png"
                ],
                respuestaCorrecta: 1
            },        
        ],

	// Bloque 8: Preguntas 74 a 83
	8: [

            {
                // PREGUNTA 74 
                imagen: "", 
                pregunta: "¿Cuál de los siguientes modelos representa el movimiento de traslación de la Tierra?",
                opciones: [
                    "imagenes/86a.png",
                    "imagenes/86b.png",
                    "imagenes/86c.png",
                    "imagenes/86d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 75
                imagen: "", 
                pregunta: "La madera es un recurso natural que se extrae de los bosques y es utilizada en diversos objetos y actividades cotidianas. Se usa, por ejemplo, para la:",
                opciones: [
                    "A) producción de energía eléctrica y la construcción",
                    "B) elaboración de muebles y la producción de carbón",
                    "C) producción alimentaria y la elaboración de muebles",
                    "D) elaboración de prendas y la construcción"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 76
                imagen: "imagenes/88.png",
		posicionImagen: "abajo", 
                pregunta: "Selecciona las formas de ahorrar energía eléctrica.",
                opciones: [
                    "A) 1,2,5",
                    "B) 2,3,4",
                    "C) 1,3,4",
                    "D) 2,4,5"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 77 
                imagen: "", 
                pregunta: "El agua es la única sustancia presente en la Tierra en sus tres estados. En este sentido, ¿cuál opción completa el texto? La encontramos en estado___________ en los ríos, lagos y mares; en estado ___________ en el vapor de las nubes y en estado___________ en hielo o glaciares.",
                opciones: [
                    "A) sólido, líquido y gaseoso",
                    "B) líquido, sólido y gaseoso",
                    "C) líquido, gaseoso y sólido",
                    "D) gaseoso, líquido y sólido"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 78 
                imagen: "imagenes/90.png",
		posicionImagen: "abajo", 
                pregunta: "Los cambios biológicos que experimentan los niños y las niñas en la pubertad señalan el inicio de la madurez sexual. Relaciona el sexo con el cambio biológico que le corresponde.",
                opciones: [
                    "imagenes/90a.png",
                    "imagenes/90b.png",
                    "imagenes/90c.png",
                    "imagenes/90d.png"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 79 
                imagen: "", 
                pregunta: "Para una alimentación equilibrada debe considerarse el aporte de nutrientes de distintos alimentos, así como conservar el buen funcionamiento del organismo. ¿Cuál de las opciones de alimentos provee un amplio aporte de nutrientes para una persona sana?",
                opciones: [
                    "A) Zanahoria, galletas, jugo de naranja",
                    "B) Pescado, frijoles, espinacas",
                    "C) Pescado, papas fritas, carne de res",
                    "D) Frijoles, manteca, pasteles"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 80
                imagen: "", 
                pregunta: "Es la energía producida por el viento. Fue la primera que utilizó el hombre en los barcos de vela y los molinos. Es inagotable, limpia y no contamina.",
                opciones: [
                    "A) Geotérmica",
                    "B) Oceánica",
                    "C) Mecánica",
                    "D) Eólica"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 81 
                imagen: "imagenes/63.png",
		posicionImagen: "abajo", 
                pregunta: "César realizó un experimento. Dejó 3 caracoles y 3 pequeños platos con diferentes alimentos como indica la tabla: Después de 3 días midió la masa de los alimentos que quedaba en cada plato. ¿Qué pregunta quería César resolver con este experimento?",
                opciones: [
                    "A) ¿Se pelean los caracoles por la comida de cada plato?",
                    "B) ¿Comen los tres caracoles el mismo tipo de alimento?",
                    "C) ¿Cuál de los alimentos utilizado es el preferido por los caracoles?",
                    "D) ¿Cuándo come un caracol de cada plato de alimento en el día?"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 82 
                imagen: "imagenes/64.png",
		posicionImagen: "abajo", 
                pregunta: "Elige las actividades que contaminan el suelo.",
                opciones: [
                    "A) 2, 5",
                    "B) 1, 3",
                    "C) 3, 4",
                    "D) 1, 4"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 83 
                imagen: "imagenes/65.png",
		posicionImagen: "abajo", 
                pregunta: "Selecciona los cambios físicos que experimentan las niñas en la pubertad.",
                opciones: [
                    "A) 1 y 4",
                    "B) 2 y 3",
                    "C) 1 y 3",
                    "D) 3 y 4"
                ],
                respuestaCorrecta: 0
            },
        ],

	// Bloque 9: Preguntas 84 a 92
	9: [
	
            {
                // PREGUNTA 84 
                imagen: "", 
                pregunta: "Frente a un fenómeno natural extremo, ¿cuál es el mayor riesgo para las personas?",
                opciones: [
                    "A) Pérdida de la vida frente a los efectos de un fenómeno natural",
                    "B) Interrupción de servicios básicos, como electricidad y agua potable",
                    "C) Desplazamiento de personas a otros lugares por perder sus hogares",
                    "D) Daños económicos por la pérdida de casa, auto y pertenencias"
                ],
                respuestaCorrecta: 0
            },
 	   {
                // PREGUNTA 85 
                imagen: "", 
                pregunta: "En la Tierra ocurren cambios estacionales, como primavera, verano, otoño e invierno. La causa de este fenómeno es el movimiento:",
                opciones: [
                    "A) oceánico",
                    "B) de rotación",
                    "C) tectónico",
                    "D) de traslación"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 86
                imagen: "", 
                pregunta: "Encima de dos casas y tres autos cayó gran cantidad de tierra y rocas de un cerro. ¿Qué sucedió?",
                opciones: [
                    "A) Una inundación",
                    "B) Un huracán",
                    "C) Un incendio",
                    "D) Un deslave"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 87 
                imagen: "imagenes/69.png",
		posicionImagen: "abajo", 
                pregunta: "La imagen muestra el sistema respiratorio y sus principales órganos. ¿Qué función cumplen los pulmones?",
                opciones: [
                    "A) Contraer y expandir la cavidad torácica",
                    "B) Intercambiar oxígeno y dióxido de carbono",
                    "C) Transportar oxígeno a todo el cuerpo",
                    "D) Proteger las vías respiratorias al comer"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 88 
                imagen: "imagenes/70.png",
		posicionImagen: "abajo", 
                pregunta: "Un estudio de cáncer de pulmón tuvo los resultados que se presentan en el gráfico. ¿Qué conclusión se obtiene?",
                opciones: [
                    "A) Las personas no fumadoras no tienen cáncer de pulmón",
                    "B) Los fumadores de cigarrillos sufren más cáncer de pulmón que los otros grupos",
                    "C) Las personas que fuman habanos no presentan cáncer de pulmón",
                    "D) Los fumadores de pipa padecen menos cáncer de pulmón que los fumadores de habanos"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 89 
                imagen: "", 
                pregunta: "Estos organismos pueden ser microscópicos o macroscópicos. Se alimentan de otros y viven en ambientes muy húmedos. Algunos viven en los bosques y son visibles en épocas de lluvia con formas y colores llamativos. Se encuentran unidos al suelo o en troncos de árboles. ¿A qué reino pertenecen los organismos descritos?",
                opciones: [
                    "A) Plantas",
                    "B) Hongos",
                    "C) Animales",
                    "D) Bacterias"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 90 
                imagen: "imagenes/72.png",
		posicionImagen: "abajo", 
                pregunta: "Ana tiene un calentador de agua en el techo de su casa, como el que se muestra en la imagen. Lo utiliza para bañarse y cocinar. No requiere gas ni electricidad para que funcione. ¿De dónde proviene la energía que calienta el agua?",
                opciones: [
                    "A) De la luna",
                    "B) Del sol",
                    "C) De la tierra",
                    "D) Del aire"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 91 
                imagen: "", 
                pregunta: "La permeabilidad es una característica de algunos materiales que permite el paso de líquidos a través de ellos sin alterar su composición. ¿Cuál opción presenta solo objetos permeables?",
                opciones: [
                    "A) Espejo de cristal y traste de plástico",
                    "B) Trozo de tela y roca porosa",
                    "C) Charola de metal y trozo de tela",
                    "D) Roca porosa y espejo de cristal"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 92 
                imagen: "", 
                pregunta: "Una persona que presenta altos niveles de grasa en la sangre; que come muchas frituras, pan y refresco, y que pasa mucho tiempo sentado frente al televisor, fue al médico porque se siente muy cansado. ¿Qué recomendaciones le dará el doctor?",
                opciones: [
                    "A) Dormir por las tardes, comer más carne y ver documentales en el televisor",
                    "B) Correr por las noches, comer muchas frutas y ver más programas educativos",
                    "C) Realizar ejercicio físico, comer más verduras y reducir el consumo de azúcares",
                    "D) Bajar el consumo de azúcares, incrementar el consumo de grasas y dormir menos"
                ],
                respuestaCorrecta: 2
            },

        ]

    },
};

// Generar los bloques de opciones
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
            let contenidoOpcion = opcion;
            let opcionMinusculas = opcion.toLowerCase();
            
            if (opcionMinusculas.endsWith('.png') || opcionMinusculas.endsWith('.jpg') || opcionMinusculas.endsWith('.jpeg')) {
                contenidoOpcion = `<img src="${opcion}" class="imagen-opcion-respuesta" alt="Opción visual">`;
            }

            htmlOpciones += `
                <label class="opcion-label" id="label-p${index}-o${i}">
                    <input type="radio" name="pregunta${index}" value="${i}" onchange="actualizarProgreso()">
                    ${contenidoOpcion}
                </label>
            `;
        });
        htmlOpciones += '</div>';

        // === NUEVO: Lógica para decidir la posición de la imagen ===
        // Si no especificas la posición, por defecto la pondrá "arriba"
        const posicion = item.posicionImagen || 'arriba'; 
        
        if (posicion === 'arriba') {
            divPregunta.innerHTML = `
                ${htmlImagen}
                <div class="texto-pregunta">${numeroPreguntaGlobal + index}. ${item.pregunta}</div>
                ${htmlOpciones}
            `;
        } else {
            divPregunta.innerHTML = `
                <div class="texto-pregunta">${numeroPreguntaGlobal + index}. ${item.pregunta}</div>
                ${htmlImagen}
                ${htmlOpciones}
            `;
        }
        
        contenedor.appendChild(divPregunta);
    }); // Fin del forEach
}; // Fin de la función

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