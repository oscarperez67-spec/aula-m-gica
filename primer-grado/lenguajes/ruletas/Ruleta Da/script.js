let silabas = ['de', 'do', 'du', 'di', 'da'];  // Correcto orden de las sílabas
let sonidosSilabas = {
    'da': 'sonidos/fa.mp3',
    'de': 'sonidos/fe.mp3',
    'di': 'sonidos/fi.mp3',
    'du': 'sonidos/fu.mp3',
    'do': 'sonidos/fo.mp3'
};

let avatarSeleccionado = null;

document.addEventListener('DOMContentLoaded', function () {
    // Asegurarse de que el botón de regresar funcione después de cargar la página
    const botonRegresar = document.getElementById('regresarBtn');
    
    // Verifica si el botón existe y añade el manejador de eventos
    if (botonRegresar) {
        // Asegurarnos de que el botón esté habilitado y funcione
        botonRegresar.disabled = false;  // Habilitar el botón de regresar si estaba deshabilitado

        // Añadir el manejador de eventos para el botón "Regresar"
        botonRegresar.addEventListener('click', function () {
            window.location.href = "ruleta.html";  // Redirige a la página de inicio
        });
    }
});

function selectAvatar(avatar) {
    avatarSeleccionado = avatar;  // Almacenar el avatar seleccionado

    // Ocultar los avatares después de la selección
    let avatarSelection = document.getElementById("avatar-selection");
    avatarSelection.style.display = 'none';  // Ocultar la selección de avatares

    // Mostrar el avatar seleccionado en la parte inferior de la página
    let img = document.createElement("img");
    img.src = `imagenes/avatars/${avatar}.png`;
    img.alt = avatar;
    img.classList.add('selected-avatar');  // Usamos la clase para aplicar estilos

    // Insertamos el avatar al final del body, justo debajo de la ruleta
    document.body.appendChild(img);

    // Habilitar el botón de girar ruleta
    let botonGirar = document.querySelector("button");
    botonGirar.disabled = false;  // Habilitar el botón de girar
}

function girarRuleta() {
    // Verificar si el avatar ha sido seleccionado antes de girar
    if (!avatarSeleccionado) {
        alert("¡Por favor, selecciona un avatar primero!");
        return;  // No permitir que gire la ruleta si no se seleccionó un avatar
    }

    sonidoRuleta = document.getElementById("sonidoRuleta");
    sonidoRuleta.play();
    let ruleta = document.getElementById("ruleta");

    // Selección aleatoria de la sílaba
    let randomIndex = Math.floor(Math.random() * silabas.length);
    let selectedSilaba = silabas[randomIndex];

    // Simulación del giro de la ruleta
    let deg = 1800 + (randomIndex * 72); // Gira 5 veces + un extra para hacerla más pronunciada
    ruleta.style.transition = "transform 3s cubic-bezier(0.42, 0, 0.58, 1)"; // Transición suave para el giro
    ruleta.style.transform = `rotate(${deg}deg)`;  // Gira la ruleta

    // Espera 3 segundos (duración de la animación de la ruleta) antes de redirigir a la página ganadora
    setTimeout(function () {
        sonidoRuleta.pause();  // Detener el sonido de la ruleta cuando la animación termina
        
        // Cálculo del ángulo final de la ruleta y determinar la sílaba ganadora
        let finalAngle = deg % 360; // El ángulo final después de la rotación
        let winnerIndex = Math.floor(finalAngle / 72);  // Cada sílaba tiene 72 grados
        let winnerSilaba = silabas[winnerIndex];

        // Esperar 1 segundo antes de cambiar a la página ganadora (evita el "salto")
        setTimeout(function () {
            let urlParams = new URLSearchParams();
            urlParams.append('avatar', avatarSeleccionado); // Pasar avatar a la página de resultados
            window.location.href = "pagina_ganadora.html?" + urlParams.toString() + "&silaba=" + winnerSilaba;
        }, 1000); // Espera 1 segundo antes de redirigir (se da tiempo para detener la animación)
    }, 3000); // Espera la duración de la animación de la ruleta
}

function loadResultado() {
    let urlParams = new URLSearchParams(window.location.search);
    let silaba = urlParams.get('silaba');
    let avatar = urlParams.get('avatar');
    
    // Cargar imagen de la sílaba ganadora
    let silabaImagen = document.getElementById("silabaImagen");
    silabaImagen.src = `imagenes/${silaba}.png`;  // Asegúrate de que la imagen esté en esta carpeta
    
    // Reproducir el sonido de la sílaba ganadora
    let sonido = new Audio(`sonidos/${silaba}.mp3`);  // Asegúrate de que el archivo de sonido esté en esta carpeta
    document.getElementById("silabaImagen").addEventListener("click", function() {
        sonido.play();
    });
    
    // Cargar las imágenes de las palabras
    let palabrasContainer = document.getElementById("palabras");
    for (let i = 1; i <= 3; i++) {
        let img = document.createElement("img");
        img.src = `imagenes/${silaba}${i}.png`;  // Asegúrate de que las imágenes tengan la estructura correcta
        img.alt = `${silaba}${i}`;
        img.addEventListener("click", () => {
            let audio = new Audio(`sonidos/${silaba}${i}.mp3`);  // Reproduce el sonido al hacer clic en la imagen
            audio.play();
        });
        palabrasContainer.appendChild(img);  // Añadir la imagen al contenedor
    }

    // Mostrar el avatar seleccionado
    let avatarImagen = document.getElementById("avatarGanador");
    avatarImagen.src = `imagenes/avatars/${avatar}.png`;
}

if (window.location.pathname.includes('pagina_ganadora.html')) {
    loadResultado();
}

