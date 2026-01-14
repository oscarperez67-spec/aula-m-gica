// ================================
// 1) LISTAS DE PALABRAS (EDITA AQUÍ)
// ================================
const WORDS = {
  // 1º primaria (muy simples)
  facil: [
    "casa","sol","luna","mesa","gato","perro","pato","sapo","mano","pie",
    "ojo","boca","nariz","taza","vaso","ropa","cola","pelo","pan","leche",
    "agua","nube","flor","pino","rosa","silla","cama","papa","mama","nene",
    "dado","lazo","bota","tela","uvas","foco","tren","pez","lobo","faro",
    "toro","goma","vaca","miel","nido","coco","pala","lata","risa","bola"
  ],

  // 2º–3º primaria (más largas, comunes)
  medio: [
    "escuela","cuaderno","pelota","amigos","familia","ventana","camino","parque","maestra","recreo",
    "colores","lápices","carpeta","mochila","juguete","viernes","domingo","elefante","mariposa","tortuga",
    "zanahoria","sandalia","helado","caramelo","chocolate","bicicleta","computo","pizarra","historia","lectura",
    "pirata","castillo","princesa","dragón","bosque","montaña","ríos","playa","lluvia","tormenta",
    "tijeras","pegamento","regla","mapa","cuento","bandera","naranja","limonada","manzana","plátanos"
  ],

  // 4º–5º primaria (más complejas)
  dificil: [
    "multiplicar","división","fracciones","geografía","biología","electricidad","temperatura","laboratorio","biblioteca","investigar",
    "naturaleza","ecosistema","contaminación","reciclaje","responsable","diferencia","comparación","comunicación","aprendizaje","conocimiento",
    "aventurero","explorador","marinero","misterioso","peligroso","canciones","instrumento","orquesta","calculadora","estadística",
    "desarrollo","creatividad","habilidades","sinceridad","puntualidad","honestidad","trabajador","paciencia","concentración","organización",
    "vocabulario","ortografía","redacción","comprensión","experimento","movimiento","velocidad","distancia","volcanes","planetas"
  ],

  // 6º primaria (largas y retadoras)
  experto: [
    "responsabilidad","extraordinario","intercontinental","electrodoméstico","constitución","civilización","biodiversidad","transformación","comunicación","desigualdad",
    "recomendaciones","interpretación","características","procedimientos","conmemoración","investigaciones","administracion","infraestructura","sustentabilidad","concentración",
    "simultáneamente","significativo","probabilidades","metodología","argumentación","consecuencias","participación","civilizaciones","experimental","reforestación",
    "competitividad","deconstrucción","desarrolladores","representación","identificación","clasificación","consolidación","generalización","descomposición","sistematización",
    "electromagnetismo","multidisciplinario","incomprensible","incompatibilidad","intervenciones","interpretaciones","modernización","descentralización","responsabilizar","interrelación"
  ]
};

// ================================
// 2) CONFIG DEL JUEGO
// ================================
const LEVEL_LABELS = { facil:"fácil", medio:"medio", dificil:"difícil", experto:"experto" };
const ALPHABET = ["a","á","b","c","d","e","é","f","g","h","i","í","j","k","l","m","n","ñ","o","ó","p","q","r","s","t","u","ú","ü","v","w","x","y","z"];
// Orden exacto de partes (10)
const PARTS = ["head","body","armL","armR","legL","legR","handL","handR","footL","footR"];

// ================================
// 3) ELEMENTOS UI
// ================================
const screenLevel = document.getElementById("screenLevel");
const screenGame  = document.getElementById("screenGame");

const uiLevel   = document.getElementById("uiLevel");
const uiErrors  = document.getElementById("uiErrors");
const uiWord    = document.getElementById("uiWord");
const uiMessage = document.getElementById("uiMessage");
const alphaWrap = document.getElementById("alpha");
const btnReplay = document.getElementById("btnReplay");
const btnExit = document.getElementById("btnExit");

// ================================
// 4) ESTADO
// ================================
const soundCorrect = new Audio('sounds/correct.mp3');
const soundWrong = new Audio('sounds/wrong.mp3');
let level = null;
let secret = "";
let revealed = [];
let used = new Set();
let errors = 0;
let ended = false;

// ================================
// 5) UTILIDADES
// ================================
function normalizeWord(w){
  return w
    .toLowerCase()
    // .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // COMENTA O ELIMINA ESTA LÍNEA
    .replace(/[^a-zñáéíóúü]/g, ""); // Permite letras, ñ y vocales con acento/diéresis
}

function pickRandom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

// ================================
// 6) RENDER
// ================================
function renderAlphabet(){
  alphaWrap.innerHTML = "";
  ALPHABET.forEach(letter => {
    const btn = document.createElement("button");
    btn.className = "letterBtn";
    btn.textContent = letter;  // Asegura que las letras estén en minúsculas
    btn.type = "button";
    btn.disabled = used.has(letter) || ended;
    btn.addEventListener("click", () => onGuess(letter));
    alphaWrap.appendChild(btn);
  });
}

function renderWord(){
  uiWord.textContent = revealed.map(ch => (ch ? ch : "_")).join(" "); // Siempre minúsculas
}

function renderErrors(){
  uiErrors.textContent = String(errors);
  PARTS.forEach((p, idx) => {
    const el = document.getElementById(`part-${p}`);
    if(!el) return;
    if(errors > idx) el.classList.remove("hidden");
    else el.classList.add("hidden");
  });
}

function showMessage(text){
  uiMessage.textContent = text;
  uiMessage.classList.remove("hidden");
}

function hideMessage(){
  uiMessage.classList.add("hidden");
  uiMessage.textContent = "";
}

// ================================
// 7) LÓGICA
// ================================
function checkWin(){
  return revealed.every(ch => ch !== "");
}

function endGame(win){
  ended = true;
  renderAlphabet();
  btnReplay.classList.remove("hidden");

  if(win) showMessage("¡Ganaste! 🎉");
  else showMessage(`Perdiste 😥 La palabra era: ${secret}`);
}

function onGuess(letter){
  if(ended) return;

  used.add(letter); // desaparece siempre

  let hit = false;
  for(let i=0; i<secret.length; i++){
    if(secret[i] === letter){
      revealed[i] = letter;
      hit = true;
    }
  }

  renderWord();
  renderAlphabet();

  if(!hit){
   // REPRODUCIR SONIDO ERROR
    soundWrong.currentTime = 0; // Reinicia el audio por si se clica rápido
    soundWrong.play().catch(e => console.log("Error al reproducir audio:", e));

    errors++;
    renderErrors();
    if(errors >= 10){
      endGame(false);
      return;
    }
  } else {
    // REPRODUCIR SONIDO ACIERTO
    soundCorrect.currentTime = 0; // Reinicia el audio
    soundCorrect.play().catch(e => console.log("Error al reproducir audio:", e));
  }

  if(checkWin()){
    endGame(true);
  }
}

function startLevel(lvl){
  level = lvl;
  uiLevel.textContent = LEVEL_LABELS[lvl] || lvl;

  const list = WORDS[lvl] || [];
  const raw = pickRandom(list);
  secret = normalizeWord(raw);  // Asegura que la palabra esté en minúsculas

  // Seguridad por si alguien deja algo vacío
  if(!secret){
    secret = "casa";
  }

  revealed = Array(secret.length).fill("");
  used = new Set();
  errors = 0;
  ended = false;

  hideMessage();
  btnReplay.classList.add("hidden");

  renderErrors();
  renderWord();
  renderAlphabet();

  screenLevel.classList.add("hidden");
  screenGame.classList.remove("hidden");
}

function resetToDifficulty(){
  screenGame.classList.add("hidden");
  screenLevel.classList.remove("hidden");
  level = null;
}

// ================================
// 8) EVENTOS
// ================================
document.querySelectorAll("[data-level]").forEach(btn => {
  btn.addEventListener("click", () => startLevel(btn.dataset.level));
});

btnReplay.addEventListener("click", resetToDifficulty);

btnExit.addEventListener("click", () => {
  if(confirm("¿Estás seguro de que quieres salir? El progreso se perderá.")) {
    resetToDifficulty();
  }
});

// Inicial
resetToDifficulty();
