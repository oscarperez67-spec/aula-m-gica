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

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// --- VARIABLES DE ESTADO ---
let gradoSeleccionado = 1;
let operacionSeleccionada = "";
let robotSeleccionado = "";
let preguntaActual = 1;
let totalPreguntas = 40;
let puntos = 0;
let vidas = 3;
let tiempoRestante = 20;
let temporizadorInterval;
let respuestaCorrecta = 0;

// --- NAVEGACIÓN DE PANTALLAS ---
function mostrarPantalla(id) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}

function seleccionarGrado(grado) {
  // ¡Candado eliminado! Ahora todos los grados pasan directo
  
  gradoSeleccionado = grado;
  let divBotones = document.getElementById('botones-operacion');
  
  // Opciones base para todos los grados
  divBotones.innerHTML = `
    <button onclick="seleccionarOperacion('suma')">Sumas (+)</button>
    <button onclick="seleccionarOperacion('resta')">Restas (-)</button>
    <button onclick="seleccionarOperacion('mixto')">Sumas y Restas</button>
  `;
  
  // Si es 2do año o mayor, agregamos el botón de Multiplicación
  if (grado >= 2) {
    divBotones.innerHTML += `<button onclick="seleccionarOperacion('multiplicacion')">Multiplicación (x)</button>`;
  }
  
  mostrarPantalla('pantalla-operacion');
}

function seleccionarOperacion(op) {
  operacionSeleccionada = op;
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

// --- ALGORITMOS MATEMÁTICOS PARA LLEVADAS ---
function tieneLlevadaSuma(a, b) {
  // padStart(7, '0') permite revisar números hasta el 9,999,999 dígito por dígito
  let strA = a.toString().padStart(7, '0').split('').reverse();
  let strB = b.toString().padStart(7, '0').split('').reverse();
  let carry = 0;
  for(let i=0; i<strA.length; i++) {
    let sum = parseInt(strA[i]) + parseInt(strB[i]) + carry;
    if(sum > 9) return true;
    carry = sum > 9 ? 1 : 0;
  }
  return false;
}

function tieneLlevadaResta(a, b) { // Asume a > b
  let strA = a.toString().padStart(7, '0').split('').reverse();
  let strB = b.toString().padStart(7, '0').split('').reverse();
  for(let i=0; i<strA.length; i++) {
    if(parseInt(strA[i]) < parseInt(strB[i])) return true; // Requiere pedir prestado
  }
  return false;
}

function obtenerSuma(min, max, reqLlevada) {
  let a, b, intentos = 0;
  do {
    // Escogemos el resultado (c) primero, dentro del rango deseado
    let c = Math.floor(Math.random() * (max - min + 1)) + min;
    a = Math.floor(Math.random() * (c - 1)) + 1;
    b = c - a;
    intentos++;
    if(intentos > 150) break; // Seguro contra bucles infinitos
  } while (reqLlevada !== null && tieneLlevadaSuma(a, b) !== reqLlevada);
  return [a, b, '+'];
}

function obtenerResta(min, max, reqLlevada) {
  let a, b, intentos = 0;
  do {
    a = Math.floor(Math.random() * (max - min + 1)) + min; // 'a' es el número mayor
    b = Math.floor(Math.random() * a); 
    if (b === 0) b = 1;
    if (a === b) continue;
    intentos++;
    if(intentos > 150) break;
  } while (reqLlevada !== null && tieneLlevadaResta(a, b) !== reqLlevada);
  return [a, b, '-'];
}

// --- GENERADOR PRINCIPAL ---
function generarOperacion() {
  let fase = Math.floor((preguntaActual - 1) / 10) + 1; 
  let num1, num2, signo;

  let tipoOp = operacionSeleccionada;
  if (tipoOp === 'mixto') {
    tipoOp = Math.random() < 0.5 ? 'suma' : 'resta';
  }

  // --- LÓGICA DE GRADOS (1 AL 6) ---

  if (gradoSeleccionado === 1) {
    let max = fase === 1 ? 10 : (fase === 2 ? 20 : (fase === 3 ? 50 : 100));
    let reqLlevada = fase === 4 ? null : false; 
    if (tipoOp === 'suma') [num1, num2, signo] = obtenerSuma(2, max, reqLlevada);
    else [num1, num2, signo] = obtenerResta(2, max, reqLlevada);
  } 
  
  else if (gradoSeleccionado === 2) {
    if (tipoOp === 'multiplicacion') {
      let maxTabla = fase === 1 ? 3 : (fase === 2 ? 5 : (fase === 3 ? 7 : 10));
      num1 = Math.floor(Math.random() * (maxTabla - 1)) + 2; 
      num2 = Math.floor(Math.random() * 10) + 1; 
      signo = 'x';
    } else {
      let max = (fase <= 2) ? 50 : 100;
      let reqLlevada = (fase === 2 || fase === 4) ? true : false;
      if (tipoOp === 'suma') [num1, num2, signo] = obtenerSuma(5, max, reqLlevada);
      else [num1, num2, signo] = obtenerResta(5, max, reqLlevada);
    }
  } 
  
  else if (gradoSeleccionado === 3) {
    if (tipoOp === 'multiplicacion') {
      if (fase <= 3) {
        num1 = Math.floor(Math.random() * 9) + 2; 
        num2 = Math.floor(Math.random() * 10) + 1; 
      } else {
        num1 = Math.floor(Math.random() * 90) + 10; // 2 cifras
        num2 = Math.floor(Math.random() * 8) + 2;   // 1 cifra
      }
      signo = 'x';
    } else {
      let max = fase <= 2 ? 100 : (fase === 3 ? 500 : 1000);
      let reqLlevada = fase === 1 ? false : true;
      if (tipoOp === 'suma') [num1, num2, signo] = obtenerSuma(10, max, reqLlevada);
      else [num1, num2, signo] = obtenerResta(10, max, reqLlevada);
    }
  }

  // NUEVOS GRADOS: 4, 5 y 6

  else if (gradoSeleccionado === 4) {
    if (tipoOp === 'multiplicacion') {
      if (fase <= 2) {
        num1 = Math.floor(Math.random() * 9) + 2; // Tablas 2 al 10
        num2 = Math.floor(Math.random() * 10) + 1;
      } else {
        num1 = Math.floor(Math.random() * 90) + 10; // 2 cifras
        num2 = Math.floor(Math.random() * 8) + 2;   // 1 cifra
      }
      signo = 'x';
    } else {
      let min = (fase <= 2) ? 20 : 500;
      let max = (fase <= 2) ? 500 : 1000;
      let reqLlevada = (fase === 2 || fase === 4) ? true : false;
      if (tipoOp === 'suma') [num1, num2, signo] = obtenerSuma(min, max, reqLlevada);
      else [num1, num2, signo] = obtenerResta(min, max, reqLlevada);
    }
  }

  else if (gradoSeleccionado === 5) {
    if (tipoOp === 'multiplicacion') {
      if (fase === 1) {
        num1 = Math.floor(Math.random() * 9) + 2; // Tablas 2 al 10
        num2 = Math.floor(Math.random() * 10) + 1;
      } else if (fase <= 3) {
        num1 = Math.floor(Math.random() * 90) + 10; // 2 cifras
        num2 = Math.floor(Math.random() * 8) + 2;   // 1 cifra
      } else {
        num1 = Math.floor(Math.random() * 900) + 100; // 3 cifras
        num2 = Math.floor(Math.random() * 98) + 2;    // 1 o 2 cifras (2 al 99)
      }
      signo = 'x';
    } else {
      let min = (fase <= 2) ? 50 : 1000;
      let max = (fase <= 2) ? 1000 : 10000;
      let reqLlevada = (fase === 2 || fase === 4) ? true : false;
      if (tipoOp === 'suma') [num1, num2, signo] = obtenerSuma(min, max, reqLlevada);
      else [num1, num2, signo] = obtenerResta(min, max, reqLlevada);
    }
  }

  else if (gradoSeleccionado === 6) {
    if (tipoOp === 'multiplicacion') {
      if (fase === 1) {
        num1 = Math.floor(Math.random() * 9) + 2; // Tablas 2 al 10
        num2 = Math.floor(Math.random() * 10) + 1;
      } else if (fase === 2) {
        num1 = Math.floor(Math.random() * 90) + 10; // 2 cifras
        num2 = Math.floor(Math.random() * 8) + 2;   // 1 cifra
      } else if (fase === 3) {
        num1 = Math.floor(Math.random() * 900) + 100; // 3 cifras
        num2 = Math.floor(Math.random() * 8) + 2;     // 1 cifra
      } else {
        num1 = Math.floor(Math.random() * 900) + 100; // 3 cifras
        num2 = Math.floor(Math.random() * 90) + 10;   // 2 cifras completas
      }
      signo = 'x';
    } else {
      // 6to año todo es CON llevada
      let min, max;
      if (fase === 1) { min = 1000; max = 10000; }
      else if (fase === 2) { min = 10000; max = 50000; }
      else if (fase === 3) { min = 50000; max = 100000; }
      else { min = 100000; max = 1000000; } // Hasta un millón

      if (tipoOp === 'suma') [num1, num2, signo] = obtenerSuma(min, max, true);
      else [num1, num2, signo] = obtenerResta(min, max, true);
    }
  }

  // Estética: El número mayor siempre va arriba (excepto que el niño lo decida distinto, pero visualmente ayuda)
  if ((signo === '+' || signo === 'x') && num2 > num1) {
    let t = num1; num1 = num2; num2 = t;
  }

  respuestaCorrecta = signo === '+' ? (num1 + num2) : (signo === '-' ? (num1 - num2) : (num1 * num2));

  document.getElementById('num1').innerText = num1;
  document.getElementById('num2').innerText = num2;
  document.getElementById('signo-operacion').innerText = signo === 'x' ? 'x' : signo;

  generarOpcionesFalsas();
}

// ... EL RESTO DE TU CÓDIGO SE QUEDA EXACTAMENTE IGUAL DESDE generarOpcionesFalsas() HACIA ABAJO ...

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
      clearInterval(temporizadorInterval); // No pierde vida si acaba el tiempo
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
  clearInterval(temporizadorInterval); 
  document.getElementById('enemigo').style.transition = 'none';
  document.getElementById('pantalla-juego').style.background = 'var(--color-fondo-panel)';
  mostrarPantalla('pantalla-grado');
}

// --- BASE DE DATOS Y SALÓN DE LA FAMA ---
function terminarJuego() {
  clearInterval(temporizadorInterval);
  mostrarPantalla('pantalla-fin');
  document.getElementById('pantalla-fin').style.background = 'var(--color-fondo-panel)';
  document.getElementById('titulo-fin').innerText = vidas > 0 ? "¡Misión Cumplida!" : "¡Sin Vidas!";
  document.getElementById('puntos-finales').innerText = puntos;

  verificarRecordGlobal();
}

function verificarRecordGlobal() {
  // Ahora buscamos en la ruta específica: grado + operación
  let ruta = 'records/grado' + gradoSeleccionado + '/' + operacionSeleccionada;
  db.ref(ruta).once('value', (snapshot) => {
    let records = [];
    snapshot.forEach(hijo => { records.push(hijo.val()); });
    records.sort((a, b) => b.puntos - a.puntos);

    if (records.length < 3 || puntos > records[Math.min(records.length - 1, 2)].puntos) {
      document.getElementById('registro-record').style.display = 'block';
    } else {
      document.getElementById('registro-record').style.display = 'none';
      mostrarTablaRecordsGlobales();
    }
  });
}

// Variable para controlar el regreso automático
let timeoutRegreso;

function guardarPuntuacion() {
  let nombreInput = document.getElementById('nombre-jugador').value.trim();
  
  if (nombreInput === "") {
    alert("¡No puedes dejar el espacio vacío! Escribe tu nombre o apodo.");
    return; 
  }

  const palabrasProhibidas = ["caca", "pedo", "culo", "tonto", "tonta", "feo", "fea", "idiota", "menso", "mensa", "bobo", "boba", "güey", "wey", "pendejo", "pendeja", "puto", "puta", "mierda", "cabron", "verga"];
  let nombreMinusculas = nombreInput.toLowerCase();
  
  if (palabrasProhibidas.some(palabra => nombreMinusculas.includes(palabra))) {
    alert("¡Epa! Por favor usa un vocabulario respetuoso.");
    document.getElementById('nombre-jugador').value = ""; 
    return; 
  }

  let ruta = 'records/grado' + gradoSeleccionado + '/' + operacionSeleccionada;
  db.ref(ruta).push({
    nombre: nombreInput,
    puntos: puntos
  }).then(() => {
    // 1. Ocultamos la caja de texto
    document.getElementById('registro-record').style.display = 'none';
    
    // 2. Mostramos la tabla actualizada para que vea su nombre
    mostrarTablaRecordsGlobales();

    // 3. ¡NUEVO! Esperamos 4 segundos y lo regresamos al menú
    timeoutRegreso = setTimeout(() => {
      reiniciarJuego();
    }, 4000);
  });
}

function reiniciarJuego() {
  // Limpiamos el temporizador por si el niño le dio clic al botón manualmente antes de que pasaran los 4 segundos
  clearTimeout(timeoutRegreso); 
  
  document.getElementById('nombre-jugador').value = "";
  mostrarPantalla('pantalla-grado');
}

// Diccionario para que los títulos se vean bonitos en pantalla
const operacionesNombres = {
  'suma': 'Sumas ➕',
  'resta': 'Restas ➖',
  'mixto': 'Sumas y Restas ➕➖',
  'multiplicacion': 'Multiplicación ✖️'
};

function mostrarTablaRecordsGlobales() {
  let lista = document.getElementById('lista-records');
  lista.innerHTML = "<li>Cargando desde la nube... ☁️</li>";
  
  let ruta = 'records/grado' + gradoSeleccionado + '/' + operacionSeleccionada;
  db.ref(ruta).once('value', (snapshot) => {
    let records = [];
    snapshot.forEach(hijo => { records.push(hijo.val()); });
    records.sort((a, b) => b.puntos - a.puntos);
    records = records.slice(0, 3);
    
    lista.innerHTML = "";
    if (records.length === 0) {
      lista.innerHTML = "<li>¡Sé el primero en establecer un récord!</li>";
    } else {
      records.forEach((r, index) => {
        let medalla = index === 0 ? "🥇" : (index === 1 ? "🥈" : "🥉");
        lista.innerHTML += `<li>${medalla} ${r.nombre} : <strong>${r.puntos}</strong> pts</li>`;
      });
    }
  });
}

function mostrarSalonFama() {
  let contenedor = document.getElementById('contenedor-fama');
  contenedor.innerHTML = "<p style='font-size: 1.5rem;'>Cargando campeones globales... 🚀</p>"; 
  mostrarPantalla('pantalla-fama');

  db.ref('records').once('value', (snapshot) => {
    contenedor.innerHTML = "";
    let todosLosRecords = snapshot.val() || {};

    // ¡AQUÍ ESTÁ EL CAMBIO! Cambiamos el 3 por un 6
    for(let i = 1; i <= 6; i++) { 
      
      // Título principal del Grado (con un fondo para separarlo visualmente)
      contenedor.innerHTML += `
      <div style="background: var(--color-secundario); padding: 5px; border-radius: 10px; margin-top: 25px;">
        <h2 style="color: #fff; margin: 0; font-size: 2.2rem; text-align: center;">Grado ${i}</h2>
      </div>`;

      let recordsGrado = todosLosRecords['grado' + i] || {};

      // Determinar qué operaciones tiene disponibles este grado
      let operaciones = ['suma', 'resta', 'mixto'];
      if (i >= 2) operaciones.push('multiplicacion');

      // Iterar por cada operación para crear su propio mini-salón de la fama
      operaciones.forEach(op => {
        contenedor.innerHTML += `<h3 style="color: var(--color-primario); margin-top: 15px; font-size: 1.6rem; border-bottom: 2px solid #444; padding-bottom: 5px;">${operacionesNombres[op]}</h3>`;
        let recordsOp = recordsGrado[op];

        if(!recordsOp) {
          contenedor.innerHTML += `<p style="font-size: 1.2rem; margin: 5px 0; color: #aaa;">Aún no hay defensores registrados.</p>`;
        } else {
          let arrayRecords = Object.values(recordsOp);
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
      });
    }
  });
}