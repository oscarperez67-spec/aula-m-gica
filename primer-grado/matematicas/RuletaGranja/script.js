let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // Los números de la ruleta
let sonidosNumeros = {
    '1': 'sonidos/1.mp3',
    '2': 'sonidos/2.mp3',
    '3': 'sonidos/3.mp3',
    '4': 'sonidos/4.mp3',
    '5': 'sonidos/5.mp3',
    '6': 'sonidos/6.mp3',
    '7': 'sonidos/7.mp3',
    '8': 'sonidos/8.mp3',
    '9': 'sonidos/9.mp3',
    '10': 'sonidos/10.mp3'
};

let avatarSeleccionado = null;

document.addEventListener('DOMContentLoaded', function () {
    const botonRegresar = document.getElementById('regresarBtn');
    
    if (botonRegresar) {
        botonRegresar.disabled = false;
        botonRegresar.addEventListener('click', function () {
            window.location.href = "ruleta.html";
        });
    }
});

function selectAvatar(avatar) {
    avatarSeleccionado = avatar;

    let avatarSelection = document.getElementById("avatar-selection");
    avatarSelection.style.display = 'none';

    let img = document.createElement("img");
    img.src = `imagenes/avatars/${avatar}.png`;
    img.alt = avatar;
    img.classList.add('selected-avatar');

    document.body.appendChild(img);

    let botonGirar = document.querySelector("button");
    botonGirar.disabled = false;
}

 

function girarRuleta() {
    if (!avatarSeleccionado) {
        alert("¡Por favor, selecciona un avatar primero!");
        return;
    }

    let sonidoRuleta = document.getElementById("sonidoRuleta");
    sonidoRuleta.play();
    let ruleta = document.getElementById("ruleta");

    // Definir los números de la ruleta
    let numeros = [1, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    // Generar un número aleatorio para simular la selección del número
    let randomIndex = Math.floor(Math.random() * numeros.length);
    let numeroSeleccionado = numeros[randomIndex];

    // Calcular el ángulo para cada número en la ruleta (36 grados por número)
    let deg = 1800 + (randomIndex * 36); // Gira 5 veces + un extra para hacerlo más pronunciado
    ruleta.style.transition = "transform 3s cubic-bezier(0.42, 0, 0.58, 1)";
    ruleta.style.transform = `rotate(${deg}deg)`; 

    setTimeout(function () {
        sonidoRuleta.pause();
        
        // Cálculo del número ganador basado en el ángulo final
        let finalAngle = deg % 360; // El ángulo final después de la rotación
        let winnerIndex = Math.floor(finalAngle / 36); // Cada número tiene 36 grados

        // Corregir el caso cuando el ángulo final es 0 (debe ser el número 1)
        if (finalAngle === 0) {
            winnerIndex = 0;  // Si el ángulo es 0, el número es 1 (primer número en el array)
        }

        let winnerNumero = numeros[winnerIndex];

        setTimeout(function () {
            let urlParams = new URLSearchParams();
            urlParams.append('avatar', avatarSeleccionado);
            window.location.href = "pagina_ganadora.html?" + urlParams.toString() + "&numero=" + winnerNumero;
        }, 1000);
    }, 3000);
}


function loadResultado() {
    let urlParams = new URLSearchParams(window.location.search);
    let numero = parseInt(urlParams.get('numero'));
    let avatar = urlParams.get('avatar');

    // Imagen del número ganador
    let numeroImagen = document.getElementById("numeroImagen");
    numeroImagen.src = `imagenes/numeros/${numero}.png`;

    let sonido = new Audio(`sonidos/${numero}.mp3`);
    numeroImagen.addEventListener("click", function() {
        sonido.play();
    });

    // Lista completa de animales disponibles (del 1 al 10)
    const animalesDisponibles = [1,2,3,4,5,6,7,8,9,10];

    // Función para mezclar el array y devolver una copia
    function shuffle(array) {
        let arr = array.slice();
        for (let i = arr.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i +1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Mezclar la lista de animales y tomar los primeros 'numero'
    let animalesSeleccionados = shuffle(animalesDisponibles).slice(0, numero);

    // Mostrar imágenes de los animales seleccionados
    let animalesContainer = document.getElementById("animales");
    animalesContainer.innerHTML = '';  // Limpiar contenedor

    animalesSeleccionados.forEach(i => {
        let img = document.createElement("img");
        img.src = `imagenes/animales/animal${i}.png`;
        img.alt = `animal${i}`;

        img.addEventListener("click", () => {
            let audio = new Audio(`sonidos/animal${i}.mp3`);
            audio.play();
        });

        animalesContainer.appendChild(img);
    });

    // Mostrar avatar
    let avatarImagen = document.getElementById("avatarGanador");
    avatarImagen.src = `imagenes/avatars/${avatar}.png`;
}


if (window.location.pathname.includes('pagina_ganadora.html')) {
    loadResultado();
}

