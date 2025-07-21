const preguntasBase = [
  {
    pregunta: "¿Qué ocurrió cuando un león se puso a descansar?",
    opciones: [
      "Los ratones jugaron a su alrededor y despertaron al león.",
      "El león atrapó a un ratón de inmediato.",
      "El león encontró una red en el bosque."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Por qué el león se puso malhumorado?",
    opciones: [
      "Porque tenía hambre.",
      "Porque los ratones lo despertaron de su siesta.",
      "Porque estaba atrapado en una red."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Por qué el león atrapó a un ratón?",
    opciones: [
      "Porque el ratón lo molestó mientras dormía.",
      "Porque quería jugar con él.",
      "Porque el ratón le ayudó a salir de la red."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué dijo el ratón para que el león le dejara libre?",
    opciones: [
      "Que podía ayudarlo en el futuro y estaría agradecido.",
      "Que tenía miedo y quería esconderse.",
      "Que le traerá comida."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué pasó después con el león cuando paseaba por el bosque?",
    opciones: [
      "Quedó atrapado en una red robusta.",
      "Se encontró con otros leones.",
      "Se puso a dormir debajo de un árbol."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué hizo el ratón para ayudar al león?",
    opciones: [
      "Le llevó comida.",
      "Rompió la cuerda de la red para liberarlo.",
      "Llamó a otros animales para ayudar."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es la moraleja del cuento?",
    opciones: [
      "Los pequeños pueden ayudar a los grandes y la bondad tiene recompensa.",
      "Los ratones son muy valientes.",
      "Los leones son siempre los más fuertes."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué hizo el león después de que el ratón lo liberó?",
    opciones: [
      "Se enojó y lo ahuyentó.",
      "Le agradeció y se hicieron amigos.",
      "Se fue sin decir nada."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cómo reaccionó el león cuando el ratón pidió que lo dejara libre?",
    opciones: [
      "Se rió y no creyó que el ratón pudiera ayudarlo.",
      "Lo dejó ir inmediatamente.",
      "Se enojó más y quiso comérselo."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué aprendemos del ratón en la historia?",
    opciones: [
      "Que es valiente y persistente.",
      "Que es pequeño y débil.",
      "Que solo quiere jugar."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué sintió el ratón cuando fue atrapado por el león?",
    opciones: [
      "Estaba feliz de conocer al león.",
      "Estaba asustado y temblando.",
      "Estaba enojado."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Por qué el león pensaba que el ratón no podría ayudarlo?",
    opciones: [
      "Porque era muy pequeño y débil.",
      "Porque era muy rápido.",
      "Porque no conocía al ratón."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Dónde descansaba el león al principio del cuento?",
    opciones: [
      "Debajo de un árbol.",
      "En una cueva.",
      "En la madriguera de ratones."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué hizo el ratón para mostrar su valentía?",
    opciones: [
      "Insistió en que el león lo dejara libre y luego lo ayudó.",
      "Se escondió y no dijo nada.",
      "Corrió muy rápido."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cómo terminó la historia entre el león y el ratón?",
    opciones: [
      "Con una pelea entre ellos.",
      "Con una amistad duradera.",
      "Con el ratón huyendo para siempre."
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