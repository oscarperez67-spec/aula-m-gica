// Variables de estado del juego
let examenActual = '';
let bloqueActual = 0;


// === NOMBRES DE MATERIAS ===
// Aquí defines qué materia es cada bloque. 
const materiasPorBloque = {
    'Y': { // Si usas Examen Y, cambia la 'K' por 'Y'
        1: "LENGUAJE Y COMUNICACIÓN",
        2: "LENGUAJE Y COMUNICACIÓN",
        3: "LENGUAJE Y COMUNICACIÓN",
        4: "CIENCIAS",
	5: "CIENCIAS",
	6: "CIENCIAS",
	7: "MATEMÁTICAS",
	8: "MATEMÁTICAS",
	9: "MATEMÁTICAS"
    },
    'Z': { // Si usas Examen Z, cambia la 'L' por 'Z'
        1: "LENGUAJE Y COMUNICACIÓN",
        2: "LENGUAJE Y COMUNICACIÓN",
        3: "LENGUAJE Y COMUNICACIÓN",
        4: "CIENCIAS",
	5: "CIENCIAS",
	6: "CIENCIAS",
	7: "MATEMÁTICAS",
	8: "MATEMÁTICAS",
	9: "MATEMÁTICAS"
    }
};

// === BASE DE DATOS DE PREGUNTAS ===
// Aquí es donde vas a capturar toda tu información.

const baseDeDatos = {
    'Y': {
        // Bloque 1: Preguntas 1 a 10
        1: [
            {
                // PREGUNTA 1
                imagen: "imagenes/1-2.png",
                pregunta: "¿Qué verbos completan el texto?",
                opciones: [
                    "A) cuidó – enseñó – envió", // Índice 0
                    "B) cuidaba – enseñará – envía", // Índice 1
                    "C) cuida – enseñaba – enviará", // Índice 2
                    "D)	cuidaría – enseña – enviaba" // Índice 3
                ],
                respuestaCorrecta: 0 // El índice de la respuesta correcta (0 es la primera, 1 la segunda...)
            },
            {
                // PREGUNTA 2 
                imagen: "", 
                pregunta: "En el texto anterior, ¿cuál es la oración introductoria?",
                opciones: [
                    "A) Yo quiero mucho a mi abuelita Carmen",
                    "B) Mis padres tenían que salir a trabajar en un hospital",
                    "C) Mi maestra me leía cuentos interesantes",
                    "D) Quiero contar mi experiencia durante la pandemia"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 3 
                imagen: "", 
                pregunta: "¿Qué palabra se escribe con v?",
                opciones: [
                    "A)	infla_le",
                    "B)	canta_a",
                    "C)	in_ierno",
                    "D)	som_ra"
                ],
                respuestaCorrecta: 2
            },
	    {
                // PREGUNTA 4 
                imagen: "imagenes/4.png",
		posicionImagen: "abajo", 
                pregunta: "En la imagen, la niña _______ con su papá.",
                opciones: [
                    "A) cocina",
                    "B) limpia",
                    "C) come",
                    "D) lava"
                ],
                respuestaCorrecta: 0
            },
	    {
                // PREGUNTA 5 
                imagen: "imagenes/5-6.png", 
                pregunta: "El poema trata de:",
                opciones: [
                    "A)	cinco amigos",
                    "B)	los dedos de la mano",
                    "C)	el señor de los anillos",
                    "D)	un niño chiquito"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 6 
                imagen: "", 
                pregunta: "¿Qué palabra del poema rima con chiquito?",
                opciones: [
                    "A)	anillos",
                    "B)	todos",
                    "C) bonito",
                    "D) gordo"
                ],
                respuestaCorrecta: 2
            },
  	   {
                // PREGUNTA 7 
                imagen: "imagenes/7-8-9.png", 
                pregunta: "Este texto es una:",
                opciones: [
                    "A) invitación",
                    "B) receta",
                    "C) lista",
                    "D) carta"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 8 
                imagen: "", 
                pregunta: "¿Qué palabra completa el espacio en blanco del texto?",
                opciones: [
                    "A) cocer",
                    "B) coser",
                    "C) coscer",
                    "D) cozer"
                ],
                respuestaCorrecta: 0
            },
	  {
                // PREGUNTA 9 
                imagen: "", 
                pregunta: "Según la receta de cocina, ¿en cuál opción el verbo sirve para dar una indicación?",
                opciones: [
                    "A) Juntamos ambas tortillas",
                    "B) Deshebrar el queso Oaxaca",
                    "C) Agrego una rebanada de jamón",
                    "D) Disfrutemos nuestra sincronizada"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 10 
                imagen: "", 
                pregunta: "¿Cómo se divide en sílabas la palabra descubrimiento?",
                opciones: [
                    "A) des-cu-bri-mi-ento",
                    "B) des-cubri-mi-ento",
                    "C) des-cu-bri-mi-en-to",
                    "D) des-cu-bri-mien-to"
                ],
                respuestaCorrecta: 3
            },

        ],

        // Bloque 2: Preguntas 11 a 20
        2: [
	{
                // PREGUNTA 11
                imagen: "imagenes/11-12-13-14.png", 
                pregunta: "La narración que acabas de leer trata de un perro que:",
                opciones: [
                    "A) visita a un carnicero", // Índice 0
                    "B) confunde su reflejo", // Índice 1
                    "C) cruza un río", // Índice 2
                    "D)	come un hueso" // Índice 3
                ],
                respuestaCorrecta: 1 // El índice de la respuesta correcta (0 es la primera, 1 la segunda...)
            },
            {
                // PREGUNTA 12 
                imagen: "",
                pregunta: "¿Cómo es el perro de la narración?",
                opciones: [
                    "A) Envidioso",
                    "B) Agradecido",
                    "C) Viejo",
                    "D) Bravo"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 13 
                imagen: "",
                pregunta: "Al final de la historia el:",
                opciones: [
                    "A)	carnicero le da un hueso",
                    "B)	perro se queda sin comer",
                    "C)	perro tuvo que cruzar un río",
                    "D)	carnicero siente lástima"
                ],
                respuestaCorrecta: 1
            },
	    {
                // PREGUNTA 14 
                imagen: "",
                pregunta: "¿Qué significa la palabra cayó que aparece en el texto?",
                opciones: [
                    "A) Callar",
                    "B) Levantar",
                    "C) Caer",
                    "D) Atorar"
                ],
                respuestaCorrecta: 2
            },
	    {
                // PREGUNTA 15 
                imagen: "",
                pregunta: "¿Cuál de las palabras en <b>negritas</b> debe iniciar con mayúscula?",
                opciones: [
                    "A)	Mi&nbsp<b>abuelo</b>&nbspme llevará al zoológico",
                    "B)	El&nbsp<b>gobernador</b>&nbspvisitará mi colonia",
                    "C)	Los alumnos de 3o B irán al&nbsp<b>museo</b>",
                    "D)	Mi primo estudia francés en&nbsp<b>canadá</b>"
                ],
                respuestaCorrecta: 3
            },
	  {
                // PREGUNTA 16 
                imagen: "imagenes/16.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué verbo completa la oración?",
                opciones: [
                    "A)	irán",
                    "B)	van",
                    "C) fueron",
                    "D) vendrán"
                ],
                respuestaCorrecta: 2
            },
  	   {
                // PREGUNTA 17 
                imagen: "imagenes/17.png", 
		posicionImagen: "abajo",
                pregunta: "¿Qué palabra rima con gato en el poema?",
                opciones: [
                    "A) ronco",
                    "B) loco",
                    "C) pato",
                    "D) poco"
                ],
                respuestaCorrecta: 2
            },
	  {
                // PREGUNTA 18 
                imagen: "imagenes/18.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué muestra el diagrama?",
                opciones: [
                    "A) La forma de preparar ensaladas",
                    "B) La importancia de secar las verduras",
                    "C) La manera de deshojar lechugas",
                    "D) El proceso para limpiar vegetales"
                ],
                respuestaCorrecta: 3
            },
	  {
                // PREGUNTA 19 
                imagen: "imagenes/19-20-21.png", 
                pregunta: "La función de este texto es:",
                opciones: [
                    "A) hacer publicidad",
                    "B) mostrar imágenes",
                    "C) presentar información",
                    "D) convencer al lector"
                ],
                respuestaCorrecta: 2
            },
	  {
                // PREGUNTA 20 
                imagen: "", 
                pregunta: "¿Qué estrategia de estudio permite resumir este texto?",
                opciones: [
                    "A) Buscar la definición de panda",
                    "B) Investigar sobre los pandas",
                    "C) Describir un enunciado",
                    "D) Subrayar lo importante"
                ],
                respuestaCorrecta: 1
            },
           {
                // PREGUNTA 21 
                imagen: "", 
                pregunta: "¿Qué expresión escrita en letras <b>negritas</b> indica una relación de causa y efecto?",
                opciones: [
                    "A) debido a que",
                    "B) también",
                    "C) otro",
                    "D) aunque"
                ],
                respuestaCorrecta: 0
            },
        ],
       
	// Bloque 3: Preguntas 22 a 30
        3: [
	
            {
                // PREGUNTA 22 
                imagen: "imagenes/22.png",
		posicionImagen: "abajo", 
                pregunta: "Este texto es:",
                opciones: [
                    "A) una propaganda",
                    "B) una historia",
                    "C) un recado",
                    "D) una invitación"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 23 
                imagen: "imagenes/23-24-25.png", 
                pregunta: "El objetivo de este diagrama es ________________ hacer una lapicera.",
                opciones: [
                    "A) indicar la importancia de",
                    "B) mostrar los materiales para",
                    "C) ordenar el procedimiento para",
                    "D) corregir el modo de"
                ],
                respuestaCorrecta: 2
            },
	    {
                // PREGUNTA 24 
                imagen: "",
                pregunta: "¿Qué imagen completa el espacio 2 que falta en el diagrama?",
                opciones: [
                    "imagenes/24a.png",
                    "imagenes/24b.png",
                    "imagenes/24c.png",
                    "imagenes/24d.png"
                ],
                respuestaCorrecta: 0
            },
	    {
                // PREGUNTA 25 
                imagen: "imagenes/25.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué palabra une las oraciones?",
                opciones: [
                    "A)	primero",
                    "B)	para",
                    "C)	según",
                    "D)	luego"
                ],
                respuestaCorrecta: 3
            },
	  {
                // PREGUNTA 26 
                imagen: "imagenes/26.png",
		posicionImagen: "abajo",  
                pregunta: "De las palabras resaltadas, ¿cuáles deben iniciar con mayúscula?",
                opciones: [
                    "A)	Padrino / Juan",
                    "B)	Compró / Pastel",
                    "C) Juan / Compró",
                    "D) Pastel / Padrino"
                ],
                respuestaCorrecta: 2
            },
  	   {
                // PREGUNTA 27 
                imagen: "imagenes/27-28-29-30.png", 
                pregunta: "¿Cuál es el título correcto para este tríptico?",
                opciones: [
                    "A) El cuidado del medio ambiente",
                    "B) Los tipos de contaminación ambiental",
                    "C) Las sustancias nocivas en el aire",
                    "D) La contaminación en los lagos"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 28 
                imagen: "imagenes/28.png",
		posicionImagen: "abajo",  
                pregunta: "Según la información del tríptico, ¿qué opción completa el espacio vacío?",
                opciones: [
                    "A) Química",
                    "B) Nociva",
                    "C) Acústica",
                    "D) Del agua"
                ],
                respuestaCorrecta: 2
            },
	  {
                // PREGUNTA 29 
                imagen: "", 
                pregunta: "¿Qué representa la imagen del tríptico?",
                opciones: [
                    "A) Polvo en la ciudad",
                    "B) Esmog de las fábricas",
                    "C) Humo de automóviles",
                    "D) Quema de basura"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 30 
                imagen: "", 
                pregunta: "¿A qué se refiere la palabra <b>excesivo</b> que aparece subrayada en el tríptico?",
                opciones: [
                    "A) Fábricas que son grandes",
                    "B) Uso frecuente de sustancias",
                    "C) Tener mucha contaminación",
                    "D) Volumen demasiado fuerte"
                ],
                respuestaCorrecta: 3
            },
        ],
	
	// Bloque 4: Preguntas 31 a 40
	4: [

	    {
                // PREGUNTA 31 
                imagen: "", 
                pregunta: "En la escuela Miguel Hidalgo, los estudiantes realizarán carteles sobre el tema: “Cuidado del medioambiente”. De las siguientes propuestas, ¿cuál acción va en contra de esta tarea?",
                opciones: [
                    "A) Quemar la basura para eliminarla",
                    "B) Plantar árboles en los parques",
                    "C) Reutilizar todo lo que podamos",
                    "D) Reducir el uso del automóvil"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 32 
                imagen: "imagenes/32.png",
		posicionImagen: "abajo", 
                pregunta: "Jimena tiene distintos recipientes y quiere ordenarlos de <b>menor a mayor</b> según su volumen. ¿En cuál opción se encuentra ese orden?",
                opciones: [
                    "A) Garrafón, vaso, botella y jarra",
                    "B) Vaso, botella, garrafón y jarra",
                    "C) Vaso, botella, jarra y garrafón",
                    "D) Garrafón, jarra, botella y vaso"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 33 
                imagen: "",
                pregunta: "Karla visitó el parque y observó árboles, lluvia, rocas y aves. ¿Qué elementos tienen vida?",
                opciones: [
                    "A) Las rocas y la lluvia",
                    "B) La lluvia y las aves",
                    "C) Los árboles y las aves",
                    "D) Las rocas y los árboles"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 34 
                imagen: "",
                pregunta: "La maestra pidió que identificaran un chocolate, un trozo de pan y un limón con los ojos vendados. Los estudiantes usaron sus manos, olieron y probaron los alimentos para identificarlos. ¿Qué sentidos utilizaron para reconocer los alimentos?",
                opciones: [
                    "A) Vista, tacto y oído",
                    "B) Oído, tacto y olfato",
                    "C) Tacto, olfato y gusto",
                    "D) Gusto, oído y vista"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 35 
                imagen: "",
                pregunta: "Ana llegó del parque a su casa con mucha hambre; tomó una tortilla y se la comió. Después de unas horas, tuvo dolor en el estómago. ¿Qué hábito de higiene olvidó antes de comer la tortilla?",
                opciones: [
                    "A) Lavarse los dientes",
                    "B) Bañarse diariamente",
                    "C) Lavarse las manos",
                    "D) Usar ropa limpia"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 36 
                imagen: "imagenes/36.png",
		posicionImagen: "abajo",  
                pregunta: "Según el texto, ¿en cuál etapa del desarrollo humano se encuentra José?",
                opciones: [
                    "A) Adolescencia",
                    "B) Infancia",
                    "C) Adultez",
                    "D) Vejez"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 37
                imagen: "",
                pregunta: "La maestra preguntó que cuál es la función principal del agua, el suelo y el aire en nuestro planeta. ¿Quién contestó correctamente?",
                opciones: [
                    "A) Daniel: El agua se utiliza para nadar, el suelo tiene tierra que ensucia y el aire genera viento para que vuelen las aves",
                    "B) Abel: El agua es necesaria para que las plantas y los animales vivan, el suelo proporciona nutrientes para las plantas y el aire tiene oxígeno que necesitamos para respirar",
                    "C) Rigoberto: El agua sirve para regar plantas y bañar a los animales, el suelo sirve para construir casas, edificios y carreteras, y el aire es para sentir el viento en el rostro",
                    "D) Sebastián: El agua es solo para pescar, el suelo es solo para correr y caminar, y el aire es solo para volar cometas"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 38 
                imagen: "", 
                pregunta: "El día tiene 24 horas. En la mañana se recibe luz solar y en la noche se oscurece, algunas veces se pueden ver la Luna y las estrellas. ¿Cómo se le llama al movimiento que origina este fenómeno?",
                opciones: [
                    "A) Traslación de la Tierra",
                    "B) Traslación de la Luna",
                    "C) Rotación de la Tierra",
                    "D) Rotación del Sol"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 39 
                imagen: "", 
                pregunta: "Lavarse los dientes correctamente es un hábito importante porque:",
                opciones: [
                    "A) mantiene los músculos fuertes",
                    "B) previene la formación de caries",
                    "C) combate enfermedades en la piel",
                    "D) limpia los alimentos que comemos"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 40 
                imagen: "", 
                pregunta: "Martín está tostando bombones sobre el fuego. ¿Qué tipo de energía está haciendo que los bombones se pongan dorados y deliciosos?",
                opciones: [
                    "A) Luminosa",
                    "B) Mecánica",
                    "C) Calorífica",
                    "D) Eléctrica"
                ],
                respuestaCorrecta: 2
            },
        ],
	// Bloque 5: Preguntas 41 a 50
	5: [
	
	   {
                // PREGUNTA 41 
                imagen: "imagenes/41.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué animales son más ligeros?",
                opciones: [
                    "A) Ratón y avestruz",
                    "B) Perro y hormiga",
                    "C) Elefante y avestruz",
                    "D) Ratón y hormiga"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 42 
                imagen: "imagenes/42.png", 
		posicionImagen: "abajo", 
                pregunta: "Ordena las fases de desarrollo de la planta.",
                opciones: [
                    "imagenes/42a.png",
                    "imagenes/42b.png",
                    "imagenes/42c.png",
                    "imagenes/42d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 43 
                imagen: "imagenes/43.png",
		posicionImagen: "abajo",  
                pregunta: "En un restaurante, a Beto le dan a escoger entre cuatro opciones del menú:",
                opciones: [
                    "A) 1",
                    "B) 2",
                    "C) 3",
                    "D) 4"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 44 
                imagen: "",
                pregunta: "Un cocinero dejó el agua para la sopa en el fuego de la estufa durante 3 horas. Cuando regresó, la cazuela estaba vacía y había mucho vapor en la cocina. Esto sucedió porque el agua cambió de:",
                opciones: [
                    "A) líquido a gaseoso",
                    "B) sólido a gaseoso",
                    "C) sólido a líquido",
                    "D) gaseoso a sólido"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 45 
                imagen: "imagenes/45.png",
		posicionImagen: "abajo",   
                pregunta: "Relaciona cada palabra con su imagen correspondiente.",
                opciones: [
                    "imagenes/45a.png",
                    "imagenes/45b.png",
                    "imagenes/45c.png",
                    "imagenes/45d.png"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 46 
                imagen: "", 
                pregunta: "Los fenómenos naturales pueden producir desastres en el lugar donde habitan y conviven las personas. ¿Qué fenómenos naturales pueden ocurrir en México?",
                opciones: [
                    "A) Sismos, sequías, alertas y simulacros",
                    "B) Terremotos, sequías, huracanes y contaminación",
                    "C) Sismos, sequías, huracanes e inundaciones",
                    "D) Terremotos, sequías, agricultura y ganadería"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 47
                imagen: "imagenes/47.png", 
		posicionImagen: "abajo",  
                pregunta: "¿Cuál opción indica los nombres que faltan en el dibujo?",
                opciones: [
                    "imagenes/47a.png",
                    "imagenes/47b.png",
                    "imagenes/47c.png",
                    "imagenes/47d.png"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 48 
                imagen: "", 
                pregunta: "En un municipio se perdieron las cosechas y se está muriendo el ganado porque no ha llovido en más de ocho meses y ha hecho mucho calor. ¿Qué fenómeno está ocurriendo?",
                opciones: [
                    "A) Huracán",
                    "B) Sequía",
                    "C) Nevada",
                    "D) Sismo"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 49 
                imagen: "imagenes/49.png",
		posicionImagen: "abajo",  
                pregunta: "¿En qué fragmento del texto se hace alusión al sentido del tacto?",
                opciones: [
                    "A) mañana con cielos brillantes",
                    "B) alegres cantos de los pájaros",
                    "C) disfruté del fresco rocío en mi cara",
                    "D) se desprendía un agradable olor a café"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 50 
                imagen: "imagenes/50.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué objetos tienen textura rugosa?",
                opciones: [
                    "A) Cobija y corteza de árbol",
                    "B) Mesa y oso de peluche",
                    "C) Cáscara de piña y oso de peluche",
                    "D) Corteza de árbol y cáscara de piña"
                ],
                respuestaCorrecta: 3
            },
        ],
	// Bloque 6: Preguntas 51 a 60
	6: [

	   {
                // PREGUNTA 51 
                imagen: "imagenes/51.png",
		posicionImagen: "abajo",  
                pregunta: "¿Qué actividades contaminan el medioambiente?",
                opciones: [
                    "A) 1 y 2",
                    "B) 2 y 4",
                    "C) 2 y 3",
                    "D) 1 y 3"
                ],
                respuestaCorrecta: 2
            },	
            {
                // PREGUNTA 52 
                imagen: "imagenes/52.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué acciones causaron la contaminación en esta imagen?",
                opciones: [
                    "A) 1,4",
                    "B) 2,3",
                    "C) 2,4",
                    "D) 1,2"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 53 
                imagen: "", 
                pregunta: "Si el pájaro carpintero es un ave que tiene alas, plumas y un pico fuerte con el que hace su nido en el tronco de algunos robles o sauces, ¿en qué tipo de ambiente vive?",
                opciones: [
                    "A) Marino",
                    "B) Arbóreo",
                    "C) Terrestre",
                    "D) Acuícola"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 54 
                imagen: "imagenes/54.png",
		posicionImagen: "abajo", 
                pregunta: "¿A cuáles objetos atrae un imán?",
                opciones: [
                    "A) A un color y un tornillo",
                    "B) A una goma y una moneda",
                    "C) A un color y una moneda",
                    "D) A una moneda y un tornillo"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 55 
                imagen: "imagenes/55.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuál opción indica los nombres de los fenómenos naturales según su orden?",
                opciones: [
                    "imagenes/55a.png",
                    "imagenes/55b.png",
                    "imagenes/55c.png",
                    "imagenes/55d.png"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 56 
                imagen: "imagenes/56.png",
		posicionImagen: "abajo", 
                pregunta: "Juan sostiene una barra de metal sobre una vela prendida como se ve en la imagen. ¿Qué le pasará a la mano de Juan después de un tiempo?",
                opciones: [
                    "A) Se mantendrá igual",
                    "B) Tendrá otro color",
                    "C) Se quemará",
                    "D) Se enfriará"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 57
                imagen: "imagenes/57.png",
		posicionImagen: "abajo",  
                pregunta: "Ordena las etapas de desarrollo humano.",
                opciones: [
                    "imagenes/57a.png",
                    "imagenes/57b.png",
                    "imagenes/57c.png",
                    "imagenes/57d.png"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 58 
                imagen: "imagenes/58.png", 
		posicionImagen: "abajo",
                pregunta: "¿Cuál opción presenta los estados del agua de cada imagen?",
                opciones: [
                    "imagenes/58a.png",
                    "imagenes/58b.png",
                    "imagenes/58c.png",
                    "imagenes/58d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 59 
                imagen: "imagenes/59.png",
		posicionImagen: "abajo", 
                pregunta: "Completa el enunciado con las palabras correctas.",
                opciones: [
                    "A) océano - espacios",
                    "B) oxígeno - campos",
                    "C) espacio - bosques",
                    "D) suelo - recursos"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 60 
                imagen: "imagenes/60.png",
		posicionImagen: "abajo", 
                pregunta: "En las imágenes, la segunda liga se ve más larga que la primera porque:",
                opciones: [
                    "A) al aplicar fuerza se estira",
                    "B) es más grande",
                    "C) son dos manos",
                    "D) la primera liga es redonda"
                ],
                respuestaCorrecta: 0
            },
        ],

	// Bloque 7: Preguntas 61 a 70
	7: [
	
            {
                // PREGUNTA 61 
                imagen: "imagenes/61.png",
		posicionImagen: "abajo", 
                pregunta: "Conforme al orden que se muestra, ¿cuál figura sigue?",
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
                pregunta: "En la cuadra que vive Raúl las casas están enumeradas de la siguiente forma, ¿qué numeración debe tener la última casa?",
                opciones: [
                    "A) 36",
                    "B) 37",
                    "C) 38",
                    "D) 39"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 63 
                imagen: "imagenes/63.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cómo se lee el número de la extensión territorial en esta ficha del municipio de Linares?",
                opciones: [
                    "A) Dos mil cuatro cuarenta y cinco",
                    "B) Veinticuatro cuarenta y cinco",
                    "C) Dos mil cuatrocientos cuarenta y cinco",
                    "D) Dos cientos cuatrocientos cuarenta y cinco"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 64 
                imagen: "imagenes/64.png",
		posicionImagen: "abajo", 
                pregunta: "La dueña de una juguetería quiere acomodar estos juguetes de <b>mayor a menor precio</b>, ¿cómo deben quedar?",
                opciones: [
                    "A) $154, $238, $375, $440",
                    "B) $154, $238, $440, $375",
                    "C) $440, $375, $154, $238",
                    "D) $440, $375, $238, $154"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 65 
                imagen: "",
                pregunta: "¿Cuál boleto de cine tiene el número seiscientos treinta y cuatro?",
                opciones: [
                    "imagenes/65a.png",
                    "imagenes/65b.png",
                    "imagenes/65c.png",
                    "imagenes/65d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 66 
                imagen: "", 
                pregunta: "En una bolsa de pan, la mitad son 8 conchas y la otra mitad son donas. ¿Cuántas piezas de pan hay en total?",
                opciones: [
                    "A) 4",
                    "B) 8",
                    "C) 12",
                    "D) 16"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 67 
                imagen: "", 
                pregunta: "La señora Carolina repartió en partes iguales el contenido completo de dos litros de leche entre sus ocho nietos. ¿Qué cantidad de leche le tocó a cada nieto?",
                opciones: [
                    "A) 2/8",
                    "B) 2/4",
                    "C) 2/2",
                    "D) 8/2"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 68
                imagen: "", 
                pregunta: "Mary compró un pantalón que le costó $1 248 y una camisa de $485. ¿Cuál es la suma que le permite saber el total de dinero que pagó?",
                opciones: [
                    "imagenes/68a.png",
                    "imagenes/68b.png",
                    "imagenes/68c.png",
                    "imagenes/68d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 69 
                imagen: "", 
                pregunta: "En una canasta de frutas hay 20 manzanas, 6 plátanos y el resto son naranjas. Si en total son 45 frutas en la canasta, ¿cuántas naranjas hay?",
                opciones: [
                    "A) 19",
                    "B) 21",
                    "C) 26",
                    "D) 29"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 70 
                imagen: "",
                pregunta: "A la función de estreno de una película asistieron 485 personas y a la segunda función, 398. ¿Cuántas personas asistieron en total al cine en ambas funciones?",
                opciones: [
                    "A) 773",
                    "B) 783",
                    "C) 873",
                    "D) 883"
                ],
                respuestaCorrecta: 3
            },
        ],
	// Bloque 8: Preguntas 71 a 80
	8: [

            {
                // PREGUNTA 71 
                imagen: "", 
                pregunta: "La manzana proporciona al organismo 60 kilocalorías, mientras que la fresa 32 kilocalorías. ¿Cuál es la diferencia de kilocalorías entre ambas frutas?",
                opciones: [
                    "A) 28",
                    "B) 32",
                    "C) 38",
                    "D) 92"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 72 
                imagen: "imagenes/72.png",
		posicionImagen: "abajo", 
                pregunta: "El papá de Julio compró en la repostería 14 pastelitos de cereza para su fiesta. ¿Cuánto pagó por los pastelitos?",
                opciones: [
                    "A) $124",
                    "B) $196",
                    "C) $204",
                    "D) $224"
                ],
                respuestaCorrecta: 3
            },	
            {
                // PREGUNTA 73 
                imagen: "", 
                pregunta: "Martin horneó 46 panes y tiene algunas cajas para empaquetarlos, ¿cuántas cajas utilizó y cuántos panes sobraron si empaquetó 6 en cada caja?",
                opciones: [
                    "A) 7 cajas llenas y sobraron 4 panes",
                    "B) 7 cajas llenas y sobraron 6 panes",
                    "C) 7 cajas llenas y sobraron 2 panes",
                    "D) 7 cajas llenas y sobraron 3 panes"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 74 
                imagen: "imagenes/74.png", 
		posicionImagen: "abajo", 
                pregunta: "En la frutería se compraron 12 cajas de manzanas como las que muestra la imagen. ¿Cuál de las siguientes operaciones debe realizarse para saber la cantidad total de manzanas que se compraron?",
                opciones: [
                    "A) 12 + 20 =",
                    "B) 12 - 20 =",
                    "C) 12 x 20 =",
                    "D) 12 ÷ 20"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 75 
                imagen: "imagenes/75.png",
		posicionImagen: "abajo",  
                pregunta: "Conforme a su tamaño, ¿en qué lugar debe intercalarse el crayón negro?",
                opciones: [
                    "A) Entre el 1 y el 2",
                    "B) Entre el 2 y el 3",
                    "C) Antes del 1",
                    "D) Después del 3"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 76 
                imagen: "", 
                pregunta: "¿Cuál es la unidad de medida más adecuada para medir el alto de una puerta?",
                opciones: [
                    "A) Metro",
                    "B) Gramo",
                    "C) Kilómetro",
                    "D) Kilogramo"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 77 
                imagen: "imagenes/77.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuántos centímetros es más larga la tijera que el rollo de hilo?",
                opciones: [
                    "A) 4 cm",
                    "B) 5 cm",
                    "C) 9 cm",
                    "D) 13 cm"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 78
                imagen: "", 
                pregunta: "David compró 8 tacos a $9 pesos cada uno, ¿cuánto pagó en total?",
                opciones: [
                    "A) $9 pesos",
                    "B) $17 pesos",
                    "C) $72 pesos",
                    "D) $89 pesos"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 79 
                imagen: "",
                pregunta: "El nuevo capítulo de la serie comenzó a las 7:20 p. m. y duró 55 minutos. ¿A qué hora terminó el programa?",
                opciones: [
                    "A) 7:55 p.m.",
                    "B) 8:05 p.m.",
                    "C) 8:15 p.m.",
                    "D) 8:20 p.m."
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 80 
                imagen: "",
                pregunta: "¿Cuál de las figuras está formada solo por cuadriláteros?",
                opciones: [
                    "imagenes/80a.png",
                    "imagenes/80b.png",
                    "imagenes/80c.png",
                    "imagenes/80d.png"
                ],
                respuestaCorrecta: 2
            },
        ],
	// Bloque 9: Preguntas 81 a 90
	9: [
	
            {
                // PREGUNTA 81 
                imagen: "", 
                pregunta: "¿En cuál de las siguientes series se cuenta de 100 en 100 hacía atrás?",
                opciones: [
                    "A) 765, 655, 545, 435, 325, 215",
                    "B) 765, 665, 565, 465, 365, 265",
                    "C) 765, 766, 767, 768, 769, 770",
                    "D) 765, 776, 787, 798, 809, 820"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 82 
                imagen: "imagenes/82.png", 
		posicionImagen: "abajo", 
                pregunta: "¿Cómo se lee el número que lleva este corredor?",
                opciones: [
                    "A) Nueve y seis",
                    "B) Sesenta y nueve",
                    "C) Noventa y seis",
                    "D) Seis y nueve"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 83 
                imagen: "", 
                pregunta: "Ana dice que 3 540 es mayor que 2 879, ¿qué posición comparó Ana para llegar a esa conclusión?",
                opciones: [
                    "A) Unidades",
                    "B) Decenas",
                    "C) Centenas",
                    "D) Unidades de millar"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 84 
                imagen: "imagenes/84.png",
		posicionImagen: "abajo", 
                pregunta: "En el juego “Destreza con los números” aparece la siguiente tarjeta, ¿cuál es su respuesta?",
                opciones: [
                    "A) 31",
                    "B) 188",
                    "C) 272",
                    "D) 282"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 85 
                imagen: "imagenes/85.png",
		posicionImagen: "abajo", 
                pregunta: "Se quiere poner malla alrededor de este jardín, ¿cuántos metros se necesitan?",
                opciones: [
                    "A) 12 m",
                    "B) 21 m",
                    "C) 33 m",
                    "D) 42 m"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 86 
                imagen: "imagenes/86.png", 
		posicionImagen: "abajo", 
                pregunta: " Observa la cantidad de puntos que obtuvieron Sofía y Lorena en un concurso de matemáticas. ¿Cuántos puntos hicieron en total?",
                opciones: [
                    "A) 7",
                    "B) 17",
                    "C) 51",
                    "D) 61"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 87 
                imagen: "", 
                pregunta: "La distancia de Cd. Victoria a Pobladores de México es de 83 kilómetros. Ricardo ha recorrido 47 kilómetros, ¿cuántos le faltan para llegar a su destino?",
                opciones: [
                    "A) 36 km",
                    "B) 46 km",
                    "C) 120 km",
                    "D) 130 km"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 88
                imagen: "",
                pregunta: "Germán paga 25 pesos diarios para comprar un jugo en la escuela. ¿Cuánto dinero gasta en 5 días?",
                opciones: [
                    "A) 25 pesos",
                    "B) 30 pesos",
                    "C) 105 pesos",
                    "D) 125 pesos"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 89 
                imagen: "", 
                pregunta: "La escuela Miguel Ramos Arizpe adquirió 120 bancos nuevos. La directora quiere acomodarlos en partes iguales en 4 aulas, ¿qué operación debe realizar para saber cuántos bancos le tocan a cada aula?",
                opciones: [
                    "A) 120 + 4 =",
                    "B) 120 x 4 =",
                    "C) 120 - 4 =",
                    "D) 120 ÷ 4 ="
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 90 
                imagen: "imagenes/90.png",
		posicionImagen: "abajo", 
                pregunta: "Mónica quiere comprar un auto de juguete como el que se muestra en la siguiente imagen. Si ya tiene la mitad del dinero ahorrado, ¿cuánto dinero le falta para completarlo?",
                opciones: [
                    "A) $58",
                    "B) $116",
                    "C) $232",
                    "D) $464"
                ],
                respuestaCorrecta: 1
            },
        ]

    },

    'Z': {
        // Examen Z
	// Bloque 1: Preguntas 81 a 90
        1: [
	{
                // PREGUNTA 1 a 11
                imagen: "imagenes/z-1-2-3-4.png", 
                pregunta: "La narración que acabas de leer trata de un perro que:",
                opciones: [
                    "A) visita a un carnicero", // Índice 0
                    "B) confunde su reflejo", // Índice 1
                    "C) cruza un río", // Índice 2
                    "D)	come un hueso" // Índice 3
                ],
                respuestaCorrecta: 1 // El índice de la respuesta correcta (0 es la primera, 1 la segunda...)
            },
            {
                // PREGUNTA 2 
                imagen: "",
                pregunta: "¿Cómo es el perro de la narración?",
                opciones: [
                    "A) Envidioso",
                    "B) Agradecido",
                    "C) Viejo",
                    "D) Bravo"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 3 
                imagen: "",
                pregunta: "Al final de la historia el:",
                opciones: [
                    "A)	carnicero le da un hueso",
                    "B)	perro se queda sin comer",
                    "C)	perro tuvo que cruzar un río",
                    "D)	carnicero siente lástima"
                ],
                respuestaCorrecta: 1
            },
	    {
                // PREGUNTA 4 
                imagen: "",
                pregunta: "¿Qué significa la palabra cayó que aparece en el texto?",
                opciones: [
                    "A) Callar",
                    "B) Levantar",
                    "C) Caer",
                    "D) Atorar"
                ],
                respuestaCorrecta: 2
            },
	    {
                // PREGUNTA 5 
                imagen: "",
                pregunta: "¿Cuál de las palabras en <b>negritas</b> debe iniciar con mayúscula?",
                opciones: [
                    "A)	Mi&nbsp<b>abuelo</b>&nbspme llevará al zoológico",
                    "B)	El&nbsp<b>gobernador</b>&nbspvisitará mi colonia",
                    "C)	Los alumnos de 3o B irán al&nbsp<b>museo</b>",
                    "D)	Mi primo estudia francés en&nbsp<b>canadá</b>"
                ],
                respuestaCorrecta: 3
            },
	  {
                // PREGUNTA 6 
                imagen: "imagenes/16.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué verbo completa la oración?",
                opciones: [
                    "A)	irán",
                    "B)	van",
                    "C) fueron",
                    "D) vendrán"
                ],
                respuestaCorrecta: 2
            },
  	   {
                // PREGUNTA 7 
                imagen: "imagenes/17.png", 
		posicionImagen: "abajo",
                pregunta: "¿Qué palabra rima con gato en el poema?",
                opciones: [
                    "A) ronco",
                    "B) loco",
                    "C) pato",
                    "D) poco"
                ],
                respuestaCorrecta: 2
            },
	  {
                // PREGUNTA 8 
                imagen: "imagenes/18.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué muestra el diagrama?",
                opciones: [
                    "A) La forma de preparar ensaladas",
                    "B) La importancia de secar las verduras",
                    "C) La manera de deshojar lechugas",
                    "D) El proceso para limpiar vegetales"
                ],
                respuestaCorrecta: 3
            },
	  {
                // PREGUNTA 9 
                imagen: "imagenes/z-9-10-11.png", 
                pregunta: "La función de este texto es:",
                opciones: [
                    "A) hacer publicidad",
                    "B) mostrar imágenes",
                    "C) presentar información",
                    "D) convencer al lector"
                ],
                respuestaCorrecta: 2
            },
	  {
                // PREGUNTA 10 
                imagen: "", 
                pregunta: "¿Qué estrategia de estudio permite resumir este texto?",
                opciones: [
                    "A) Buscar la definición de panda",
                    "B) Investigar sobre los pandas",
                    "C) Describir un enunciado",
                    "D) Subrayar lo importante"
                ],
                respuestaCorrecta: 1
            },
           {
                // PREGUNTA 11 
                imagen: "", 
                pregunta: "¿Qué expresión escrita en letras <b>negritas</b> indica una relación de causa y efecto?",
                opciones: [
                    "A) debido a que",
                    "B) también",
                    "C) otro",
                    "D) aunque"
                ],
                respuestaCorrecta: 0
            },

        ],

        // Bloque 2: Preguntas 12 a 20
        2: [
	    {
                // PREGUNTA 12
                imagen: "imagenes/z-12-13.png",
                pregunta: "¿Qué verbos completan el texto?",
                opciones: [
                    "A) cuidó – enseñó – envió", // Índice 0
                    "B) cuidaba – enseñará – envía", // Índice 1
                    "C) cuida – enseñaba – enviará", // Índice 2
                    "D)	cuidaría – enseña – enviaba" // Índice 3
                ],
                respuestaCorrecta: 0 // El índice de la respuesta correcta (0 es la primera, 1 la segunda...)
            },
            {
                // PREGUNTA 13 
                imagen: "", 
                pregunta: "En el texto anterior, ¿cuál es la oración introductoria?",
                opciones: [
                    "A) Yo quiero mucho a mi abuelita Carmen",
                    "B) Mis padres tenían que salir a trabajar en un hospital",
                    "C) Mi maestra me leía cuentos interesantes",
                    "D) Quiero contar mi experiencia durante la pandemia"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 14 
                imagen: "", 
                pregunta: "¿Qué palabra se escribe con v?",
                opciones: [
                    "A)	infla_le",
                    "B)	canta_a",
                    "C)	in_ierno",
                    "D)	som_ra"
                ],
                respuestaCorrecta: 2
            },
	    {
                // PREGUNTA 15 
                imagen: "imagenes/4.png",
		posicionImagen: "abajo", 
                pregunta: "En la imagen, la niña _______ con su papá.",
                opciones: [
                    "A) cocina",
                    "B) limpia",
                    "C) come",
                    "D) lava"
                ],
                respuestaCorrecta: 0
            },
	    {
                // PREGUNTA 16 
                imagen: "imagenes/z-16-17.png", 
                pregunta: "El poema trata de:",
                opciones: [
                    "A)	cinco amigos",
                    "B)	los dedos de la mano",
                    "C)	el señor de los anillos",
                    "D)	un niño chiquito"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 17 
                imagen: "", 
                pregunta: "¿Qué palabra del poema rima con chiquito?",
                opciones: [
                    "A)	anillos",
                    "B)	todos",
                    "C) bonito",
                    "D) gordo"
                ],
                respuestaCorrecta: 2
            },
  	   {
                // PREGUNTA 18 
                imagen: "imagenes/z-18-19-20.png", 
                pregunta: "Este texto es una:",
                opciones: [
                    "A) invitación",
                    "B) receta",
                    "C) lista",
                    "D) carta"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 19 
                imagen: "", 
                pregunta: "¿Qué palabra completa el espacio en blanco del texto?",
                opciones: [
                    "A) cocer",
                    "B) coser",
                    "C) coscer",
                    "D) cozer"
                ],
                respuestaCorrecta: 0
            },
	  {
                // PREGUNTA 20 
                imagen: "", 
                pregunta: "Según la receta de cocina, ¿en cuál opción el verbo sirve para dar una indicación?",
                opciones: [
                    "A) Juntamos ambas tortillas",
                    "B) Deshebrar el queso Oaxaca",
                    "C) Agrego una rebanada de jamón",
                    "D) Disfrutemos nuestra sincronizada"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 21 
                imagen: "", 
                pregunta: "¿Cómo se divide en sílabas la palabra descubrimiento?",
                opciones: [
                    "A) des-cu-bri-mi-ento",
                    "B) des-cubri-mi-ento",
                    "C) des-cu-bri-mi-en-to",
                    "D) des-cu-bri-mien-to"
                ],
                respuestaCorrecta: 3
            },

        ],
       
	// Bloque 3: Preguntas 22 a 30
        3: [
	 
	 {
                // PREGUNTA 22 
                imagen: "imagenes/26.png",
		posicionImagen: "abajo",  
                pregunta: "De las palabras resaltadas, ¿cuáles deben iniciar con mayúscula?",
                opciones: [
                    "A)	Padrino / Juan",
                    "B)	Compró / Pastel",
                    "C) Juan / Compró",
                    "D) Pastel / Padrino"
                ],
                respuestaCorrecta: 2
            },
	  {
                // PREGUNTA 23 
                imagen: "imagenes/z-23-24-25-26.png", 
                pregunta: "¿Cuál es el título correcto para este tríptico?",
                opciones: [
                    "A) El cuidado del medio ambiente",
                    "B) Los tipos de contaminación ambiental",
                    "C) Las sustancias nocivas en el aire",
                    "D) La contaminación en los lagos"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 24 
                imagen: "imagenes/28.png",
		posicionImagen: "abajo",  
                pregunta: "Según la información del tríptico, ¿qué opción completa el espacio vacío?",
                opciones: [
                    "A) Química",
                    "B) Nociva",
                    "C) Acústica",
                    "D) Del agua"
                ],
                respuestaCorrecta: 2
            },
	  {
                // PREGUNTA 25 
                imagen: "", 
                pregunta: "¿Qué representa la imagen del tríptico?",
                opciones: [
                    "A) Polvo en la ciudad",
                    "B) Esmog de las fábricas",
                    "C) Humo de automóviles",
                    "D) Quema de basura"
                ],
                respuestaCorrecta: 1
            },
	  {
                // PREGUNTA 26 
                imagen: "", 
                pregunta: "¿A qué se refiere la palabra <b>excesivo</b> que aparece subrayada en el tríptico?",
                opciones: [
                    "A) Fábricas que son grandes",
                    "B) Uso frecuente de sustancias",
                    "C) Tener mucha contaminación",
                    "D) Volumen demasiado fuerte"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 27 
                imagen: "imagenes/22.png",
		posicionImagen: "abajo", 
                pregunta: "Este texto es:",
                opciones: [
                    "A) una propaganda",
                    "B) una historia",
                    "C) un recado",
                    "D) una invitación"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 28 
                imagen: "imagenes/z-28-29-30.png", 
                pregunta: "El objetivo de este diagrama es ________________ hacer una lapicera.",
                opciones: [
                    "A) indicar la importancia de",
                    "B) mostrar los materiales para",
                    "C) ordenar el procedimiento para",
                    "D) corregir el modo de"
                ],
                respuestaCorrecta: 2                   
            },
	    {
                // PREGUNTA 29 
                imagen: "",
                pregunta: "¿Qué imagen completa el espacio 2 que falta en el diagrama?",
                opciones: [
		    "imagenes/24a.png",
                    "imagenes/24b.png",
                    "imagenes/24c.png",
                    "imagenes/24d.png"
                ],
                respuestaCorrecta: 0
            },
	    {
                // PREGUNTA 30 
                imagen: "imagenes/25.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué palabra une las oraciones?",
                opciones: [
                    "A)	primero",
                    "B)	para",
                    "C)	según",
                    "D)	luego"
                ],
                respuestaCorrecta: 3
            },   
        ],
	
	// Bloque 4: Preguntas 31 a 40
	4: [

            {
                // PREGUNTA 31 
                imagen: "imagenes/59.png",
		posicionImagen: "abajo", 
                pregunta: "Completa el enunciado con las palabras correctas.",
                opciones: [
                    "A) océano - espacios",
                    "B) oxígeno - campos",
                    "C) espacio - bosques",
                    "D) suelo - recursos"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 32 
                imagen: "imagenes/60.png",
		posicionImagen: "abajo", 
                pregunta: "En las imágenes, la segunda liga se ve más larga que la primera porque:",
                opciones: [
                    "A) al aplicar fuerza se estira",
                    "B) es más grande",
                    "C) son dos manos",
                    "D) la primera liga es redonda"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 33 
                imagen: "imagenes/58.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuál opción presenta los estados del agua de cada imagen?",
                opciones: [
                    "imagenes/58a.png",
                    "imagenes/58b.png",
                    "imagenes/58c.png",
                    "imagenes/58d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 34
                imagen: "imagenes/57.png",
		posicionImagen: "abajo",  
                pregunta: "Ordena las etapas de desarrollo humano.",
                opciones: [
                    "imagenes/57a.png",
                    "imagenes/57b.png",
                    "imagenes/57c.png",
                    "imagenes/57d.png"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 35 
                imagen: "", 
                pregunta: "En un municipio se perdieron las cosechas y se está muriendo el ganado porque no ha llovido en más de ocho meses y ha hecho mucho calor. ¿Qué fenómeno está ocurriendo?",
                opciones: [
                    "A) Huracán",
                    "B) Sequía",
                    "C) Nevada",
                    "D) Sismo"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 36 
                imagen: "imagenes/49.png",
		posicionImagen: "abajo",  
                pregunta: "¿En qué fragmento del texto se hace alusión al sentido del tacto?",
                opciones: [
                    "A) mañana con cielos brillantes",
                    "B) alegres cantos de los pájaros",
                    "C) disfruté del fresco rocío en mi cara",
                    "D) se desprendía un agradable olor a café"
                ],
                respuestaCorrecta: 2
            },
	    {
                // PREGUNTA 37 
                imagen: "", 
                pregunta: "En la escuela Miguel Hidalgo, los estudiantes realizarán carteles sobre el tema: “Cuidado del medioambiente”. De las siguientes propuestas, ¿cuál acción va en contra de esta tarea?",
                opciones: [
                    "A) Quemar la basura para eliminarla",
                    "B) Plantar árboles en los parques",
                    "C) Reutilizar todo lo que podamos",
                    "D) Reducir el uso del automóvil"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 38 
                imagen: "imagenes/45.png",
		posicionImagen: "abajo",   
                pregunta: "Relaciona cada palabra con su imagen correspondiente.",
                opciones: [
                    "imagenes/45a.png",
                    "imagenes/45b.png",
                    "imagenes/45c.png",
                    "imagenes/45d.png"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 39 
                imagen: "imagenes/55.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuál opción indica los nombres de los fenómenos naturales según su orden?",
                opciones: [
                    "imagenes/55a.png",
                    "imagenes/55b.png",
                    "imagenes/55c.png",
                    "imagenes/55d.png"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 40 
                imagen: "imagenes/56.png",
		posicionImagen: "abajo", 
                pregunta: "Juan sostiene una barra de metal sobre una vela prendida como se ve en la imagen. ¿Qué le pasará a la mano de Juan después de un tiempo?",
                opciones: [
                    "A) Se mantendrá igual",
                    "B) Tendrá otro color",
                    "C) Se quemará",
                    "D) Se enfriará"
                ],
                respuestaCorrecta: 2
            },

        ],
	// Bloque 5: Preguntas 41 a 50
	5: [
            {
                // PREGUNTA 41 
                imagen: "",
                pregunta: "Karla visitó el parque y observó árboles, lluvia, rocas y aves. ¿Qué elementos tienen vida?",
                opciones: [
                    "A) Las rocas y la lluvia",
                    "B) La lluvia y las aves",
                    "C) Los árboles y las aves",
                    "D) Las rocas y los árboles"
                ],
                respuestaCorrecta: 2
            },	
            {
                // PREGUNTA  42
                imagen: "imagenes/32.png",
		posicionImagen: "abajo", 
                pregunta: "Jimena tiene distintos recipientes y quiere ordenarlos de <b>menor a mayor</b> según su volumen. ¿En cuál opción se encuentra ese orden?",
                opciones: [
                    "A) Garrafón, vaso, botella y jarra",
                    "B) Vaso, botella, garrafón y jarra",
                    "C) Vaso, botella, jarra y garrafón",
                    "D) Garrafón, jarra, botella y vaso"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 43 
                imagen: "",
                pregunta: "La maestra pidió que identificaran un chocolate, un trozo de pan y un limón con los ojos vendados. Los estudiantes usaron sus manos, olieron y probaron los alimentos para identificarlos. ¿Qué sentidos utilizaron para reconocer los alimentos?",
                opciones: [
                    "A) Vista, tacto y oído",
                    "B) Oído, tacto y olfato",
                    "C) Tacto, olfato y gusto",
                    "D) Gusto, oído y vista"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 44 
                imagen: "", 
                pregunta: "Lavarse los dientes correctamente es un hábito importante porque:",
                opciones: [
                    "A) mantiene los músculos fuertes",
                    "B) previene la formación de caries",
                    "C) combate enfermedades en la piel",
                    "D) limpia los alimentos que comemos"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 45 
                imagen: "", 
                pregunta: "Martín está tostando bombones sobre el fuego. ¿Qué tipo de energía está haciendo que los bombones se pongan dorados y deliciosos?",
                opciones: [
                    "A) Luminosa",
                    "B) Mecánica",
                    "C) Calorífica",
                    "D) Eléctrica"
                ],
                respuestaCorrecta: 2
            },
	   {
                // PREGUNTA 46 
                imagen: "imagenes/41.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué animales son más ligeros?",
                opciones: [
                    "A) Ratón y avestruz",
                    "B) Perro y hormiga",
                    "C) Elefante y avestruz",
                    "D) Ratón y hormiga"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 47 
                imagen: "",
                pregunta: "Ana llegó del parque a su casa con mucha hambre; tomó una tortilla y se la comió. Después de unas horas, tuvo dolor en el estómago. ¿Qué hábito de higiene olvidó antes de comer la tortilla?",
                opciones: [
                    "A) Lavarse los dientes",
                    "B) Bañarse diariamente",
                    "C) Lavarse las manos",
                    "D) Usar ropa limpia"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 48 
                imagen: "imagenes/36.png",
		posicionImagen: "abajo",  
                pregunta: "Según el texto, ¿en cuál etapa del desarrollo humano se encuentra José?",
                opciones: [
                    "A) Adolescencia",
                    "B) Infancia",
                    "C) Adultez",
                    "D) Vejez"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 49
                imagen: "",
                pregunta: "La maestra preguntó que cuál es la función principal del agua, el suelo y el aire en nuestro planeta. ¿Quién contestó correctamente?",
                opciones: [
                    "A) Daniel: El agua se utiliza para nadar, el suelo tiene tierra que ensucia y el aire genera viento para que vuelen las aves",
                    "B) Abel: El agua es necesaria para que las plantas y los animales vivan, el suelo proporciona nutrientes para las plantas y el aire tiene oxígeno que necesitamos para respirar",
                    "C) Rigoberto: El agua sirve para regar plantas y bañar a los animales, el suelo sirve para construir casas, edificios y carreteras, y el aire es para sentir el viento en el rostro",
                    "D) Sebastián: El agua es solo para pescar, el suelo es solo para correr y caminar, y el aire es solo para volar cometas"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 50 
                imagen: "", 
                pregunta: "El día tiene 24 horas. En la mañana se recibe luz solar y en la noche se oscurece, algunas veces se pueden ver la Luna y las estrellas. ¿Cómo se le llama al movimiento que origina este fenómeno?",
                opciones: [
                    "A) Traslación de la Tierra",
                    "B) Traslación de la Luna",
                    "C) Rotación de la Tierra",
                    "D) Rotación del Sol"
                ],
                respuestaCorrecta: 2
            },
        ],
	// Bloque 6: Preguntas 51 a 60
	6: [

            {
                // PREGUNTA 51 
                imagen: "imagenes/42.png", 
		posicionImagen: "abajo", 
                pregunta: "Ordena las fases de desarrollo de la planta.",
                opciones: [
                    "imagenes/42a.png",
                    "imagenes/42b.png",
                    "imagenes/42c.png",
                    "imagenes/42d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 52 
                imagen: "imagenes/43.png",
		posicionImagen: "abajo",  
                pregunta: "En un restaurante, a Beto le dan a escoger entre cuatro opciones del menú:",
                opciones: [
                    "A) 1",
                    "B) 2",
                    "C) 3",
                    "D) 4"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 53 
                imagen: "",
                pregunta: "Un cocinero dejó el agua para la sopa en el fuego de la estufa durante 3 horas. Cuando regresó, la cazuela estaba vacía y había mucho vapor en la cocina. Esto sucedió porque el agua cambió de:",
                opciones: [
                    "A) líquido a gaseoso",
                    "B) sólido a gaseoso",
                    "C) sólido a líquido",
                    "D) gaseoso a sólido"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 54 
                imagen: "", 
                pregunta: "Los fenómenos naturales pueden producir desastres en el lugar donde habitan y conviven las personas. ¿Qué fenómenos naturales pueden ocurrir en México?",
                opciones: [
                    "A) Sismos, sequías, alertas y simulacros",
                    "B) Terremotos, sequías, huracanes y contaminación",
                    "C) Sismos, sequías, huracanes e inundaciones",
                    "D) Terremotos, sequías, agricultura y ganadería"
                ],
                respuestaCorrecta: 2
            },
           {
                // PREGUNTA 55 
                imagen: "imagenes/50.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué objetos tienen textura rugosa?",
                opciones: [
                    "A) Cobija y corteza de árbol",
                    "B) Mesa y oso de peluche",
                    "C) Cáscara de piña y oso de peluche",
                    "D) Corteza de árbol y cáscara de piña"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 56 
                imagen: "", 
                pregunta: "Si el pájaro carpintero es un ave que tiene alas, plumas y un pico fuerte con el que hace su nido en el tronco de algunos robles o sauces, ¿en qué tipo de ambiente vive?",
                opciones: [
                    "A) Marino",
                    "B) Arbóreo",
                    "C) Terrestre",
                    "D) Acuícola"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 57
                imagen: "imagenes/47.png", 
		posicionImagen: "abajo",  
                pregunta: "¿Cuál opción indica los nombres que faltan en el dibujo?",
                opciones: [
                    "imagenes/47a.png",
                    "imagenes/47b.png",
                    "imagenes/47c.png",
                    "imagenes/47d.png"
                ],
                respuestaCorrecta: 2
            },
 
	   {
                // PREGUNTA 58 
                imagen: "imagenes/51.png",
		posicionImagen: "abajo",  
                pregunta: "¿Qué actividades contaminan el medioambiente?",
                opciones: [
                    "A) 1 y 2",
                    "B) 2 y 4",
                    "C) 2 y 3",
                    "D) 1 y 3"
                ],
                respuestaCorrecta: 2
            },	
            {
                // PREGUNTA 59 
                imagen: "imagenes/54.png",
		posicionImagen: "abajo", 
                pregunta: "¿A cuáles objetos atrae un imán?",
                opciones: [
                    "A) A un color y un tornillo",
                    "B) A una goma y una moneda",
                    "C) A un color y una moneda",
                    "D) A una moneda y un tornillo"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 60 
                imagen: "imagenes/52.png",
		posicionImagen: "abajo", 
                pregunta: "¿Qué acciones causaron la contaminación en esta imagen?",
                opciones: [
                    "A) 1,4",
                    "B) 2,3",
                    "C) 2,4",
                    "D) 1,2"
                ],
                respuestaCorrecta: 3
            },
        ],

	// Bloque 7: Preguntas 61 a 70
	7: [
           
 	   {
                // PREGUNTA 61 
                imagen: "",
                pregunta: "A la función de estreno de una película asistieron 485 personas y a la segunda función, 398. ¿Cuántas personas asistieron en total al cine en ambas funciones?",
                opciones: [
                    "A) 773",
                    "B) 783",
                    "C) 873",
                    "D) 883"
                ],
                respuestaCorrecta: 3
            },	
	   {
                // PREGUNTA 62 
                imagen: "", 
                pregunta: "La manzana proporciona al organismo 60 kilocalorías, mientras que la fresa 32 kilocalorías. ¿Cuál es la diferencia de kilocalorías entre ambas frutas?",
                opciones: [
                    "A) 28",
                    "B) 32",
                    "C) 38",
                    "D) 92"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 63 
                imagen: "imagenes/72.png",
		posicionImagen: "abajo", 
                pregunta: "El papá de Julio compró en la repostería 14 pastelitos de cereza para su fiesta. ¿Cuánto pagó por los pastelitos?",
                opciones: [
                    "A) $124",
                    "B) $196",
                    "C) $204",
                    "D) $224"
                ],
                respuestaCorrecta: 3
            },	
            {
                // PREGUNTA 64 
                imagen: "", 
                pregunta: "Martin horneó 46 panes y tiene algunas cajas para empaquetarlos, ¿cuántas cajas utilizó y cuántos panes sobraron si empaquetó 6 en cada caja?",
                opciones: [
                    "A) 7 cajas llenas y sobraron 4 panes",
                    "B) 7 cajas llenas y sobraron 6 panes",
                    "C) 7 cajas llenas y sobraron 2 panes",
                    "D) 7 cajas llenas y sobraron 3 panes"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 65 
                imagen: "imagenes/74.png", 
		posicionImagen: "abajo", 
                pregunta: "En la frutería se compraron 12 cajas de manzanas como las que muestra la imagen. ¿Cuál de las siguientes operaciones debe realizarse para saber la cantidad total de manzanas que se compraron?",
                opciones: [
                    "A) 12 + 20 =",
                    "B) 12 - 20 =",
                    "C) 12 x 20 =",
                    "D) 12 ÷ 20"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 66 
                imagen: "imagenes/75.png",
		posicionImagen: "abajo",  
                pregunta: "Conforme a su tamaño, ¿en qué lugar debe intercalarse el crayón negro?",
                opciones: [
                    "A) Entre el 1 y el 2",
                    "B) Entre el 2 y el 3",
                    "C) Antes del 1",
                    "D) Después del 3"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 67 
                imagen: "", 
                pregunta: "¿Cuál es la unidad de medida más adecuada para medir el alto de una puerta?",
                opciones: [
                    "A) Metro",
                    "B) Gramo",
                    "C) Kilómetro",
                    "D) Kilogramo"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 68 
                imagen: "imagenes/77.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cuántos centímetros es más larga la tijera que el rollo de hilo?",
                opciones: [
                    "A) 4 cm",
                    "B) 5 cm",
                    "C) 9 cm",
                    "D) 13 cm"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 69
                imagen: "", 
                pregunta: "David compró 8 tacos a $9 pesos cada uno, ¿cuánto pagó en total?",
                opciones: [
                    "A) $9 pesos",
                    "B) $17 pesos",
                    "C) $72 pesos",
                    "D) $89 pesos"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 70 
                imagen: "",
                pregunta: "El nuevo capítulo de la serie comenzó a las 7:20 p. m. y duró 55 minutos. ¿A qué hora terminó el programa?",
                opciones: [
                    "A) 7:55 p.m.",
                    "B) 8:05 p.m.",
                    "C) 8:15 p.m.",
                    "D) 8:20 p.m."
                ],
                respuestaCorrecta: 2
            },
        ],

	// Bloque 8: Preguntas 71 a 80
	8: [

            {
                // PREGUNTA 71 
                imagen: "",
                pregunta: "¿Cuál de las figuras está formada solo por cuadriláteros?",
                opciones: [
                    "imagenes/80a.png",
                    "imagenes/80b.png",
                    "imagenes/80c.png",
                    "imagenes/80d.png"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 72
                imagen: "imagenes/61.png",
		posicionImagen: "abajo", 
                pregunta: "Conforme al orden que se muestra, ¿cuál figura sigue?",
                opciones: [
                    "imagenes/61a.png",
                    "imagenes/61b.png",
                    "imagenes/61c.png",
                    "imagenes/61d.png"
                ],
                respuestaCorrecta: 2
            },
	    {
	        // PREGUNTA 73 
                imagen: "imagenes/62.png",
		posicionImagen: "abajo", 
                pregunta: "En la cuadra que vive Raúl las casas están enumeradas de la siguiente forma, ¿qué numeración debe tener la última casa?",
                opciones: [
                    "A) 36",
                    "B) 37",
                    "C) 38",
                    "D) 39"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 74
                imagen: "imagenes/63.png",
		posicionImagen: "abajo", 
                pregunta: "¿Cómo se lee el número de la extensión territorial en esta ficha del municipio de Linares?",
                opciones: [
                    "A) Dos mil cuatro cuarenta y cinco",
                    "B) Veinticuatro cuarenta y cinco",
                    "C) Dos mil cuatrocientos cuarenta y cinco",
                    "D) Dos cientos cuatrocientos cuarenta y cinco"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 75 
                imagen: "imagenes/64.png",
		posicionImagen: "abajo", 
                pregunta: "La dueña de una juguetería quiere acomodar estos juguetes de <b>mayor a menor precio</b>, ¿cómo deben quedar?",
                opciones: [
                    "A) $154, $238, $375, $440",
                    "B) $154, $238, $440, $375",
                    "C) $440, $375, $154, $238",
                    "D) $440, $375, $238, $154"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 76 
                imagen: "",
                pregunta: "¿Cuál boleto de cine tiene el número seiscientos treinta y cuatro?",
                opciones: [
                    "imagenes/65a.png",
                    "imagenes/65b.png",
                    "imagenes/65c.png",
                    "imagenes/65d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 77 
                imagen: "", 
                pregunta: "En una bolsa de pan, la mitad son 8 conchas y la otra mitad son donas. ¿Cuántas piezas de pan hay en total?",
                opciones: [
                    "A) 4",
                    "B) 8",
                    "C) 12",
                    "D) 16"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 78 
                imagen: "", 
                pregunta: "La señora Carolina repartió en partes iguales el contenido completo de dos litros de leche entre sus ocho nietos. ¿Qué cantidad de leche le tocó a cada nieto?",
                opciones: [
                    "A) 2/8",
                    "B) 2/4",
                    "C) 2/2",
                    "D) 8/2"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 79
                imagen: "", 
                pregunta: "Mary compró un pantalón que le costó $1 248 y una camisa de $485. ¿Cuál es la suma que le permite saber el total de dinero que pagó?",
                opciones: [
                    "imagenes/68a.png",
                    "imagenes/68b.png",
                    "imagenes/68c.png",
                    "imagenes/68d.png"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 80 
                imagen: "", 
                pregunta: "En una canasta de frutas hay 20 manzanas, 6 plátanos y el resto son naranjas. Si en total son 45 frutas en la canasta, ¿cuántas naranjas hay?",
                opciones: [
                    "A) 19",
                    "B) 21",
                    "C) 26",
                    "D) 29"
                ],
                respuestaCorrecta: 0
            },

        ],
	// Bloque 9: Preguntas 81 a 90
	9: [
           
 	   {
                // PREGUNTA 81 
                imagen: "imagenes/85.png",
		posicionImagen: "abajo", 
                pregunta: "Se quiere poner malla alrededor de este jardín, ¿cuántos metros se necesitan?",
                opciones: [
                    "A) 12 m",
                    "B) 21 m",
                    "C) 33 m",
                    "D) 42 m"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 82 
                imagen: "imagenes/86.png", 
		posicionImagen: "abajo", 
                pregunta: " Observa la cantidad de puntos que obtuvieron Sofía y Lorena en un concurso de matemáticas. ¿Cuántos puntos hicieron en total?",
                opciones: [
                    "A) 7",
                    "B) 17",
                    "C) 51",
                    "D) 61"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 83
                imagen: "", 
                pregunta: "La distancia de Cd. Victoria a Pobladores de México es de 83 kilómetros. Ricardo ha recorrido 47 kilómetros, ¿cuántos le faltan para llegar a su destino?",
                opciones: [
                    "A) 36 km",
                    "B) 46 km",
                    "C) 120 km",
                    "D) 130 km"
                ],
                respuestaCorrecta: 0
            },
            {
                // PREGUNTA 84
                imagen: "",
                pregunta: "Germán paga 25 pesos diarios para comprar un jugo en la escuela. ¿Cuánto dinero gasta en 5 días?",
                opciones: [
                    "A) 25 pesos",
                    "B) 30 pesos",
                    "C) 105 pesos",
                    "D) 125 pesos"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 85
                imagen: "", 
                pregunta: "La escuela Miguel Ramos Arizpe adquirió 120 bancos nuevos. La directora quiere acomodarlos en partes iguales en 4 aulas, ¿qué operación debe realizar para saber cuántos bancos le tocan a cada aula?",
                opciones: [
                    "A) 120 + 4 =",
                    "B) 120 x 4 =",
                    "C) 120 - 4 =",
                    "D) 120 ÷ 4 ="
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 86 
                imagen: "imagenes/90.png",
		posicionImagen: "abajo", 
                pregunta: "Mónica quiere comprar un auto de juguete como el que se muestra en la siguiente imagen. Si ya tiene la mitad del dinero ahorrado, ¿cuánto dinero le falta para completarlo?",
                opciones: [
                    "A) $58",
                    "B) $116",
                    "C) $232",
                    "D) $464"
                ],
                respuestaCorrecta: 1
            },	
            {
                // PREGUNTA 87 
                imagen: "", 
                pregunta: "¿En cuál de las siguientes series se cuenta de 100 en 100 hacía atrás?",
                opciones: [
                    "A) 765, 655, 545, 435, 325, 215",
                    "B) 765, 665, 565, 465, 365, 265",
                    "C) 765, 766, 767, 768, 769, 770",
                    "D) 765, 776, 787, 798, 809, 820"
                ],
                respuestaCorrecta: 1
            },
            {
                // PREGUNTA 88 
                imagen: "imagenes/82.png", 
		posicionImagen: "abajo", 
                pregunta: "¿Cómo se lee el número que lleva este corredor?",
                opciones: [
                    "A) Nueve y seis",
                    "B) Sesenta y nueve",
                    "C) Noventa y seis",
                    "D) Seis y nueve"
                ],
                respuestaCorrecta: 2
            },
            {
                // PREGUNTA 89 
                imagen: "", 
                pregunta: "Ana dice que 3 540 es mayor que 2 879, ¿qué posición comparó Ana para llegar a esa conclusión?",
                opciones: [
                    "A) Unidades",
                    "B) Decenas",
                    "C) Centenas",
                    "D) Unidades de millar"
                ],
                respuestaCorrecta: 3
            },
            {
                // PREGUNTA 90 
                imagen: "imagenes/84.png",
		posicionImagen: "abajo", 
                pregunta: "En el juego “Destreza con los números” aparece la siguiente tarjeta, ¿cuál es su respuesta?",
                opciones: [
                    "A) 31",
                    "B) 188",
                    "C) 272",
                    "D) 282"
                ],
                respuestaCorrecta: 3
            },

        ]
    }
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
            
            // === NUEVO: Buscar el nombre de la materia ===
            let nombreMateria = "Evaluación"; // Texto por defecto si se te olvida ponerla
            if (materiasPorBloque[examenActual] && materiasPorBloque[examenActual][bloqueId]) {
                nombreMateria = materiasPorBloque[examenActual][bloqueId];
            }
            
            const btn = document.createElement('button');
            btn.className = 'btn-bloque';
            
            // === NUEVO: Insertar la materia y luego el número de preguntas ===
            btn.innerHTML = `
                <strong style="font-size: 1.3em; display: block; margin-bottom: 5px;">${nombreMateria}</strong>
                Opción ${bloqueId}: Preguntas ${numeroPreguntaInicio} - ${numeroPreguntaFin}
            `;
            
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