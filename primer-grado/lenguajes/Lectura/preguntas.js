const preguntasBase = [
  {
    pregunta: "¿Por qué estaban escondidos los animales al principio del cuento?",
    opciones: [
    	"Porque tenían miedo del sapo.",
	"Porque estaba lloviendo muy fuerte.",
	"Porque jugaban a las escondidas."

    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué hacía el sapo mientras los demás animales estaban escondidos?",
    opciones: [
     	"Dormía en su casa.",
	"Jugaba bajo la lluvia.",
	"Caminaba afuera bajo la lluvia."

    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué objeto tenía el sapo que lo protegía del agua y del sol?",
    opciones: [
      	"Un paraguas.",
	"Una concha.",
	"Una hoja grande."

    ],
    correcta: 1
  },
  {
    pregunta: "¿A quién se encontró el sapo debajo de unas piedras?",
    opciones: [
	"A una tortuga.",
	"A un cangrejo.",
	"A una rana."

    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué le pidió el sapo al cangrejo?",
    opciones: [
	"Que lo ayudara a buscar comida.",
	"Que se metiera a su casa.",
	"Que lo acompañara a caminar."

    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué respondió el cangrejo cuando el sapo lo invitó a caminar?",
    opciones: [
	"Que sí, de inmediato.",
	"Que no quería mojarse.",
	"Que estaba durmiendo."

    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué quería el cangrejo para no mojarse?",
    opciones: [
	"Un paraguas.",
	"La concha del sapo.",
	"Una roca."

    ],
    correcta: 1
  },
  {
    pregunta: "¿El sapo aceptó prestarle su concha de inmediato?",
    opciones: [
	"Sí, sin problema.",
	"No, dijo que no se la prestaba.",
	"Sí, pero por poco tiempo."

    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué le propuso el sapo al cangrejo en vez de prestarle la concha?",
    opciones: [
	"Que buscara otra concha.",
	"Que caminara bajo la lluvia.",
	"Que se metiera junto a él en la concha."

    ],
    correcta: 2
  },
  {
    pregunta: "¿Pudieron meterse los dos en la concha?",
    opciones: [
	"Sí, sin problema.",
	"No, solo cabían las patas del cangrejo.",
	"Sí, pero se mojaron."

    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué dijo el sapo cuando vieron que no cabían los dos en la concha?",
    opciones: [
	"Que buscaran otra.",
	"Que el cangrejo debía salirse.",
	"Que la concha era mágica."

    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué hizo el sapo finalmente con su concha?",
    opciones: [
	"La escondió.",
	"Se la prestó al cangrejo.",
	"Se la dio a otro animal."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es una enseñanza que deja este cuento?",
    opciones: [
	"No salir cuando llueve.",
	"Ser terco para conseguir lo que uno quiere.",
	"Pensar antes de compartir algo valioso."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cómo se sentía el sapo al prestarle su concha al cangrejo?",
    opciones: [
	"Feliz.",
	"Triste.",
	"Un poco desconfiado."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Por qué el cangrejo quería la concha?",
    opciones: [
	"Para protegerse del sol.",
	"Para dar una vuelta sin mojarse.",
	"Para regalársela a otro animal."
    ],
    correcta: 1
  }
];

// Elegir 10 preguntas aleatorias y barajar opciones
function shuffle(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuiz() {
  const form = document.getElementById("quizForm");
  form.innerHTML = "";
  const preguntasSeleccionadas = shuffle([...preguntasBase]).slice(0, 10);

  preguntasSeleccionadas.forEach((preg, idx) => {
    const opcionesBarajadas = shuffle([...preg.opciones]);
    form.innerHTML += `
      <div class="pregunta">
        <p><strong>${idx+1}. ${preg.pregunta}</strong></p>
        <div class="opciones">
          ${opcionesBarajadas.map((opt, i) => `
            <label>
              <input type="radio" name="p${idx}" value="${opt}" />
              ${opt}
            </label>
          `).join('')}
        </div>
      </div>
    `;
    // Guardar opciones barajadas y texto correcto
    preg.opcionesBarajadas = opcionesBarajadas;
    preg.correctaTexto = preg.opciones[preg.correcta];
  });

  window.preguntasParaEvaluar = preguntasSeleccionadas;
}

function evaluar() {
  let aciertos = 0;
  let total = window.preguntasParaEvaluar.length;
  let resultadoHTML = "";

  window.preguntasParaEvaluar.forEach((preg, idx) => {
    const opciones = document.getElementsByName(`p${idx}`);
    let respuestaUsuario = null;
    for (const opt of opciones) {
      if (opt.checked) {
        respuestaUsuario = opt.value;
        break;
      }
    }
    if (respuestaUsuario === preg.correctaTexto) {
      aciertos++;
      resultadoHTML += `<p><strong>Pregunta ${idx+1}:</strong> ✅ Correcta</p>`;
    } else {
      resultadoHTML += `<p><strong>Pregunta ${idx+1}:</strong> ❌ Incorrecta. La respuesta correcta es: <em>${preg.correctaTexto}</em></p>`;
    }
  });

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = "block";
  resultadoDiv.innerHTML = `<h3>Tu resultado: ${aciertos} de ${total} respuestas correctas</h3>` + resultadoHTML;

  // 🔊 Sonido según el resultado
  const correcto = document.getElementById("sonidoCorrecto");
  const incorrecto = document.getElementById("sonidoIncorrecto");

  if (aciertos >= total * 0.7) {
    if (correcto) correcto.play();
  } else {
    if (incorrecto) incorrecto.play();
  }
}

window.onload = loadQuiz;