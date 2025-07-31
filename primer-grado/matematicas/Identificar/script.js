const imagen = document.getElementById("imagen");
const opciones = document.getElementById("opciones");
const audioNumero = document.getElementById("audioNumero");
const audioAcierto = document.getElementById("audioAcierto");
const audioError = document.getElementById("audioError");

const numeros = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
let preguntas = [];
let preguntaActual = 0;
let aciertos = 0;

function iniciarJuego() {
  preguntas = [...numeros];
  preguntaActual = 0;
  aciertos = 0;
  document.querySelector(".container").style.display = "block";
  document.getElementById("resultadoFinal").style.display = "none";
  siguientePregunta();
}

function siguientePregunta() {
  if (preguntas.length === 0) {
    mostrarResultado(aciertos);
    return;
  }

  const indice = Math.floor(Math.random() * preguntas.length);
  const actual = preguntas.splice(indice, 1)[0];
  imagen.dataset.valor = actual;
  imagen.src = `img/${actual}.png`;
  audioNumero.src = `audio/${actual}.mp3`;

  opciones.innerHTML = "";
  numeros.forEach((num, i) => {
    const btn = document.createElement("button");
    btn.textContent = i + 1;
    btn.onclick = () => verificarRespuesta(num);
    opciones.appendChild(btn);
  });
}

function reproducirAudio() {
  audioNumero.play();
}

function verificarRespuesta(respuesta) {
  if (respuesta === imagen.dataset.valor) {
    aciertos++;
    audioAcierto.play();
  } else {
    audioError.play();
  }
  setTimeout(siguientePregunta, 1000);
}

function mostrarResultado(aciertos) {
  const container = document.querySelector(".container");
  const resultado = document.getElementById("resultadoFinal");
  const mensaje = document.getElementById("mensajeFinal");
  const medalla = document.getElementById("medalla");

  container.style.display = "none";
  resultado.style.display = "block";

  if (aciertos === 10) {
    mensaje.textContent = "🥇 ¡Perfecto! Medalla de Oro";
    medalla.src = "img/medalla_oro.png";
    medalla.style.maxwidth ="400px"; //tamaño mas grande
    medalla.style.height = "auto";
  } else if (aciertos === 9) {
    mensaje.textContent = "🥈 ¡Muy bien! Medalla de Plata";
    medalla.src = "img/medalla_plata.png";
    medalla.style.maxwidth ="400px"; //tamaño mas grande
    medalla.style.height = "auto";
  } else if (aciertos === 8) {
    mensaje.textContent = "🥉 ¡Buen trabajo! Medalla de Bronce";
    medalla.src = "img/medalla_bronce.png";
    medalla.style.maxwidth ="400px"; //tamaño mas grande
    medalla.style.height = "auto";
  } else {
    mensaje.textContent = `Obtuviste ${aciertos}/10. ¡Sigue practicando!`;
    medalla.src = "img/motivacion.png";
    medalla.style.maxwidth ="800px"; //tamaño mas grande
    medalla.style.height = "auto";
  }
}

window.onload = iniciarJuego;
