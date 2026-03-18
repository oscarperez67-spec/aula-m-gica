// --- CONFIGURACIÓN DE FIREBASE (GLOBAL) ---
const firebaseConfig = {
  apiKey: "AIzaSyCouNKqoMI-KSqQsO-L_V73M7DvbwK9i9w",
  authDomain: "aula-magica-juegos.firebaseapp.com",
  databaseURL: "https://aula-magica-juegos-default-rtdb.firebaseio.com",
  projectId: "aula-magica-juegos",
  storageBucket: "aula-magica-juegos.firebasestorage.app",
  messagingSenderId: "548225276591",
  appId: "1:548225276591:web:a061721f75e0fb0f8d925a"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();


// --- VARIABLES DE ESTADO ---
let gradoSeleccionado = 1;
let robotSeleccionado = "";
let preguntaActual = 1;
let totalPreguntas = 40;
let puntos = 0;
let vidas = 3;
let tiempoRestante = 20;
let temporizadorInterval;
let respuestaCorrecta = 0;

// --- CONFIGURACIÓN DE NIVELES ---
const limitesGrado = {
  1: { maxSumaResta: 50, usaMultiplicacion: false },
  2: { maxSumaResta: 100, usaMultiplicacion: true },
  3: { maxSumaResta: 1000, usaMultiplicacion: true },
  4: { maxSumaResta: 10000, usaMultiplicacion: true },
  5: { maxSumaResta: 100000, usaMultiplicacion: true },
  6: { maxSumaResta: 1000000, usaMultiplicacion: true }
};

// --- NAVEGACIÓN ---
function mostrarPantalla(id) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}

function seleccionarGrado(grado) {
  gradoSeleccionado = grado;
  generarGridAvatares();
  mostrarPantalla('pantalla-avatar');
}

function generarGridAvatares() {
  const grid = document.getElementById('lista-avatares');
  grid.innerHTML = "";
  for(let i = 1; i <= 8; i++) {
    grid.innerHTML += `<button class="avatar-btn" onclick="iniciarJuego('img/robot${i}.png')">
      <img src="img/robot${i}.png" alt="Robot ${i}" onerror="this.src='https://via.placeholder.com/80?text=R${i}'">
    </button>`;
  }
}

function iniciarJuego(imgRobot) {
  robotSeleccionado = imgRobot;
  document.getElementById('mi-robot').style.backgroundImage = `url('${imgRobot}')`;
  
  preguntaActual = 1;
  puntos = 0;
  vidas = 3;
  actualizarHUD();
  
  for(let i=1; i<=3; i++) document.getElementById(`vida${i}`).style.visibility = 'visible';
  
  document.getElementById('pantalla-juego').style.background = 'transparent';
  mostrarPantalla('pantalla-juego');
  
  siguientePregunta();
}

// --- LÓGICA MATEMÁTICA PROGRESIVA ---
function generarOperacion() {
  const config = limitesGrado[gradoSeleccionado];
  let fase = Math.floor((preguntaActual - 1) / 10) + 1; 
  let porcentajeDificultad = fase * 0.25; 
  let limiteActual = Math.max(5, Math.floor(config.maxSumaResta * porcentajeDificultad));
  
  let operacionesPosibles = ['+', '-'];
  if (config.usaMultiplicacion) operacionesPosibles.push('*');
  
  let operacion = operacionesPosibles[Math.floor(Math.random() * operacionesPosibles.length)];
  let num1, num2;

  if (operacion === '*') {
    let maxTabla = fase <= 2 ? 5 : (gradoSeleccionado >= 4 ? 12 : 10);
    num1 = Math.floor(Math.random() * maxTabla) + 1;
    num2 = Math.floor(Math.random() * maxTabla) + 1;
    respuestaCorrecta = num1 * num2;
  } else {
    num1 = Math.floor(Math.random() * limiteActual) + 1;
    num2 = Math.floor(Math.random() * limiteActual) + 1;
    
    if (operacion === '-' && num1 <= num2) {
      let temp = num1; num1 = num2; num2 = temp;
      if (num1 === num2) num1 += Math.floor(Math.random() * 5) + 1;
    }
    
    respuestaCorrecta = operacion === '+' ? (num1 + num2) : (num1 - num2);
  }

  let signoVisible = operacion === '*' ? 'x' : operacion;
  document.getElementById('num1').innerText = num1;
  document.getElementById('num2').innerText = num2;
  document.getElementById('signo-operacion').innerText = signoVisible;

  generarOpcionesFalsas();
}

function generarOpcionesFalsas() {
  let respuestas = [respuestaCorrecta];
  while(respuestas.length < 4) {
    let variacion = Math.floor(Math.random() * (respuestaCorrecta * 0.3 + 5)) + 1;
    let sumaOResta = Math.random() > 0.5 ? 1 : -1;
    let opcionFalsa = Math.abs(respuestaCorrecta + (variacion * sumaOResta));
    if(!respuestas.includes(opcionFalsa)) respuestas.push(opcionFalsa);
  }
  respuestas.sort(() => Math.random() - 0.5);

  let botones = document.getElementsByClassName('btn-respuesta');
  for(let i=0; i<4; i++) {
    botones[i].innerText = respuestas[i];
    botones[i].dataset.valor = respuestas[i]; 
  }
}

// --- MECÁNICAS DE JUEGO ---
function siguientePregunta() {
  if (vidas <= 0 || preguntaActual > totalPreguntas) {
    terminarJuego();
    return;
  }
  actualizarHUD();
  generarOperacion();
  iniciarTemporizador();
  aparecerEnemigo();
}

function iniciarTemporizador() {
  clearInterval(temporizadorInterval);
  tiempoRestante = 20;
  document.getElementById('temporizador').innerText = tiempoRestante;
  
  temporizadorInterval = setInterval(() => {
    if (tiempoRestante > 0) {
      tiempoRestante--;
      document.getElementById('temporizador').innerText = tiempoRestante;
    } else {
      clearInterval(temporizadorInterval);
    }
  }, 1000);
}

function verificarRespuesta(indiceBoton) {
  clearInterval(temporizadorInterval);
  let botones = document.getElementsByClassName('btn-respuesta');
  let valorElegido = parseInt(botones[indiceBoton].dataset.valor);
  manejarRespuesta(valorElegido === respuestaCorrecta);
}

function manejarRespuesta(esCorrecta) {
  let enemigo = document.getElementById('enemigo');
  let miRobot = document.getElementById('mi-robot');
  enemigo.style.transition = 'none'; 

  if (esCorrecta) {
    puntos += 10 + tiempoRestante;
    mostrarExplosion(enemigo);
  } else {
    vidas--;
    document.getElementById(`vida${vidas + 1}`).style.visibility = 'hidden';
    mostrarExplosion(miRobot);
  }

  actualizarHUD();
  setTimeout(() => {
    preguntaActual++;
    siguientePregunta();
  }, 1500);
}

function aparecerEnemigo() {
  let enemigo = document.getElementById('enemigo');
  let numEnemigo = Math.floor(Math.random() * 4) + 1;
  enemigo.style.backgroundImage = `url('img/enemigo${numEnemigo}.png')`;
  enemigo.style.transition = 'none';
  enemigo.style.right = '-20%';
  
  setTimeout(() => {
    enemigo.style.transition = 'right 20s linear';
    enemigo.style.right = '70%'; 
  }, 50);
}

function mostrarExplosion(elemento) {
  let explosion = document.getElementById('explosion');
  let rect = elemento.getBoundingClientRect();
  explosion.style.left = elemento.style.left || rect.left + 'px';
  explosion.style.right = elemento.style.right;
  explosion.style.display = 'block';
  elemento.style.opacity = '0';

  setTimeout(() => {
    explosion.style.display = 'none';
    elemento.style.opacity = '1';
  }, 1000);
}

function actualizarHUD() {
  document.getElementById('num-pregunta').innerText = preguntaActual;
  document.getElementById('puntuacion').innerText = puntos;
}

function salirJuego() {
  // Detenemos el reloj para que no siga contando en el fondo
  clearInterval(temporizadorInterval); 
  
  // Detenemos la animación del enemigo
  document.getElementById('enemigo').style.transition = 'none';
  
  // Regresamos el fondo a su color oscuro original y mostramos el menú
  document.getElementById('pantalla-juego').style.background = 'var(--color-fondo-panel)';
  mostrarPantalla('pantalla-grado');
}


// --- BASE DE DATOS GLOBAL (FIREBASE) ---
function terminarJuego() {
  clearInterval(temporizadorInterval);
  mostrarPantalla('pantalla-fin');
  document.getElementById('pantalla-fin').style.background = 'var(--color-fondo-panel)';
  document.getElementById('titulo-fin').innerText = vidas > 0 ? "¡Misión Cumplida!" : "¡Sin Batería!";
  document.getElementById('puntos-finales').innerText = puntos;

  verificarRecordGlobal();
}

function verificarRecordGlobal() {
  // Consultamos la nube para ver los récords del grado actual
  db.ref('records/grado' + gradoSeleccionado).once('value', (snapshot) => {
    let records = [];
    snapshot.forEach(hijo => { records.push(hijo.val()); });
    records.sort((a, b) => b.puntos - a.puntos);

    // Si hay menos de 3 personas en el top, o si sacó más puntos que el 3er lugar
    if (records.length < 3 || puntos > records[Math.min(records.length - 1, 2)].puntos) {
      document.getElementById('registro-record').style.display = 'block';
    } else {
      document.getElementById('registro-record').style.display = 'none';
      mostrarTablaRecordsGlobales();
    }
  });
}

function guardarPuntuacion() {
  // .trim() elimina los espacios vacíos al principio y al final
  let nombreInput = document.getElementById('nombre-jugador').value.trim();
  
  // VALIDACIÓN 1: Que no esté vacío
  if (nombreInput === "") {
    alert("¡No puedes dejar el espacio vacío! Escribe tu nombre o un apodo para el récord.");
    return; // Detiene el proceso y no guarda nada
  }

  // VALIDACIÓN 2: Filtro de palabras inapropiadas
  // Lista de palabras bloqueadas (puedes agregar más separadas por comas y entre comillas)
  const palabrasProhibidas = [
    "caca", "pedo", "culo", "tonto", "tonta", "feo", "fea", 
    "idiota", "menso", "mensa", "bobo", "boba", "güey", "wey", 
    "pendejo", "pendeja", "puto", "puta", "mierda", "cabron", "verga",
    "zonzo","baboso","pito","pene","vagina","panocha","riata"
  ];

  // Convertimos lo que escribió el niño a minúsculas para que el filtro no falle si usan MAYÚSCULAS
  let nombreMinusculas = nombreInput.toLowerCase();

  // Revisamos si el nombre contiene alguna de las palabras prohibidas
  let contieneGroseria = palabrasProhibidas.some(palabra => nombreMinusculas.includes(palabra));

  if (contieneGroseria) {
    alert("¡Epa! Por favor usa un vocabulario respetuoso. Escribe tu nombre real o un apodo amigable.");
    document.getElementById('nombre-jugador').value = ""; // Borra la grosería de la pantalla
    return; // Detiene el proceso y no guarda nada
  }

  // SI PASA LAS VALIDACIONES: Guardamos el récord en la nube (Firebase)
  db.ref('records/grado' + gradoSeleccionado).push({
    nombre: nombreInput, // Guardamos el nombre tal como lo escribió (respetando sus mayúsculas)
    puntos: puntos
  }).then(() => {
    document.getElementById('registro-record').style.display = 'none';
    mostrarTablaRecordsGlobales();
  });
}

function mostrarTablaRecordsGlobales() {
  let lista = document.getElementById('lista-records');
  lista.innerHTML = "<li>Cargando desde la nube... ☁️</li>";
  
  db.ref('records/grado' + gradoSeleccionado).once('value', (snapshot) => {
    let records = [];
    snapshot.forEach(hijo => { records.push(hijo.val()); });
    records.sort((a, b) => b.puntos - a.puntos);
    records = records.slice(0, 3); // Solo mostrar los 3 mejores
    
    lista.innerHTML = "";
    records.forEach((r, index) => {
      let medalla = index === 0 ? "🥇" : (index === 1 ? "🥈" : "🥉");
      lista.innerHTML += `<li>${medalla} ${r.nombre} : <strong>${r.puntos}</strong> pts</li>`;
    });
  });
}

function mostrarSalonFama() {
  let contenedor = document.getElementById('contenedor-fama');
  contenedor.innerHTML = "<p style='font-size: 1.5rem;'>Cargando campeones globales... 🚀</p>"; 
  mostrarPantalla('pantalla-fama');

  // Traemos todos los récords de todos los grados de una sola vez
  db.ref('records').once('value', (snapshot) => {
    contenedor.innerHTML = "";
    let todosLosRecords = snapshot.val() || {};

    for(let i = 1; i <= 6; i++) {
      contenedor.innerHTML += `<h3 style="color: var(--color-primario); margin-top: 15px; font-size: 1.8rem;">Grado ${i}</h3>`;
      let recordsGrado = todosLosRecords['grado' + i];

      if(!recordsGrado) {
        contenedor.innerHTML += `<p style="font-size: 1.3rem; margin: 5px 0;">Aún no hay defensores registrados.</p>`;
      } else {
        // Convertimos los datos de la nube a una lista y los ordenamos
        let arrayRecords = Object.values(recordsGrado);
        arrayRecords.sort((a, b) => b.puntos - a.puntos);
        arrayRecords = arrayRecords.slice(0, 3);

        let lista = "<ul style='font-size: 1.4rem; padding-left: 10px; margin: 10px 0;'>";
        arrayRecords.forEach((r, index) => {
          let medalla = index === 0 ? "🥇" : (index === 1 ? "🥈" : "🥉");
          lista += `<li style="margin-bottom: 8px;">${medalla} ${r.nombre}: <strong>${r.puntos}</strong> pts</li>`;
        });
        lista += "</ul>";
        contenedor.innerHTML += lista;
      }
    }
  });
}

function reiniciarJuego() {
  document.getElementById('nombre-jugador').value = "";
  mostrarPantalla('pantalla-grado');
}