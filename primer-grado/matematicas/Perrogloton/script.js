// Imágenes del perro (Aquí pondrás las de los recortes)
const imgPerroFlaco = "imagenes/perrito_1.png"; 
const imgPerroMedio = "imagenes/perrito_2.png"; 
const imgPerroGordo = "imagenes/perrito_3.png"; 
const imgPerroTriste = "imagenes/perrito_4.png"; 

// Menú de comida (Emojis al azar que saldrán en los platos)
const menuComida = ['🥩', '🍗', '🦴', '🌭', '🍔'];

let modoActual = '';
let limiteMaximo = 10;
let respuestaCorrecta = 0;
let puntos = 0;

function iniciarJuego(modo) {
    modoActual = modo;
    puntos = 0;
    document.getElementById('contador-puntos').innerText = puntos;
    
    if (modo.includes('20')) {
        limiteMaximo = 20;
    } else {
        limiteMaximo = 10;
    }

    // Ocultar inicio, mostrar juego
    document.getElementById('pantalla-inicio').style.display = 'none';
    document.getElementById('juego').style.display = 'block';
    
    // Asegurarse de que la banda y la operación sean visibles
    document.getElementById('zona-banda').style.display = 'block';
    document.getElementById('letrero-operacion').style.display = 'block';
    document.getElementById('pantalla-victoria').style.display = 'none';
    
    actualizarAspectoPerro(); 
    reiniciarYGenerar();
}

function volverASeleccion() {
    document.getElementById('juego').style.display = 'none';
    document.getElementById('pantalla-inicio').style.display = 'block';
    
    // Restaurar visibilidad por si se salieron justo cuando ganaron
    document.getElementById('zona-banda').style.display = 'block';
    document.getElementById('letrero-operacion').style.display = 'block';
    document.getElementById('pantalla-victoria').style.display = 'none';

    detenerAnimaciones(); 
}

function detenerAnimaciones() {
    for (let i = 0; i < 3; i++) {
        let plato = document.getElementById('plato' + i);
        plato.style.animation = 'none';
    }
}

function actualizarAspectoPerro() {
    let imagenPerro = document.getElementById('img-perro');
    
    if (puntos >= 10) {
        imagenPerro.src = imgPerroGordo;
    } else if (puntos >= 5) {
        imagenPerro.src = imgPerroMedio;
    } else {
        imagenPerro.src = imgPerroFlaco;
    }
}

// Botón "Volver a jugar" que sale al ganar
function reiniciarDesdeCero() {
    puntos = 0;
    document.getElementById('contador-puntos').innerText = puntos;
    
    // Ocultar victoria y mostrar juego
    document.getElementById('pantalla-victoria').style.display = 'none';
    document.getElementById('zona-banda').style.display = 'block';
    document.getElementById('letrero-operacion').style.display = 'block';
    
    actualizarAspectoPerro();
    reiniciarYGenerar();
}

function reiniciarYGenerar() {
    let tipoOperacion = 'suma';
    if (modoActual.includes('mixto')) {
        tipoOperacion = Math.random() > 0.5 ? 'suma' : 'resta';
    }

    let num1, num2, resultado, signo;

    if (tipoOperacion === 'suma') {
        resultado = Math.floor(Math.random() * (limiteMaximo - 2)) + 3; 
        num1 = Math.floor(Math.random() * (resultado - 1)) + 1;
        num2 = resultado - num1;
        signo = '+';
    } else {
        num1 = Math.floor(Math.random() * (limiteMaximo - 2)) + 3; 
        num2 = Math.floor(Math.random() * (num1 - 1)) + 1; 
        resultado = num1 - num2;
        signo = '-';
    }

    respuestaCorrecta = resultado;
    document.getElementById('letrero-operacion').innerText = `${num1} ${signo} ${num2}`;

    let opciones = [resultado];
    while (opciones.length < 3) {
        let distractor = resultado + (Math.floor(Math.random() * 7) - 3);
        if (distractor > 0 && distractor <= limiteMaximo && !opciones.includes(distractor)) {
            opciones.push(distractor);
        }
    }
    opciones.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 3; i++) {
        let plato = document.getElementById('plato' + i);
        
        plato.style.animation = 'none'; 
        plato.offsetHeight; 
        
        // ¡NUEVO! Generar un platillo con comida y número
        let iconoAzar = menuComida[Math.floor(Math.random() * menuComida.length)];
        plato.innerHTML = `<div class="comida-icono">${iconoAzar}</div><div>${opciones[i]}</div>`;
        plato.dataset.valor = opciones[i];
        
        if (i === 0) plato.style.animation = 'moverPlato 8s linear infinite 0s';
        if (i === 1) plato.style.animation = 'moverPlato 8s linear infinite 2.66s';
        if (i === 2) plato.style.animation = 'moverPlato 8s linear infinite 5.33s';
    }
}

function verificarRespuesta(indice) {
    let platoElegido = document.getElementById('plato' + indice);
    let valor = parseInt(platoElegido.dataset.valor);
    let imagenPerro = document.getElementById('img-perro');

    if (valor === respuestaCorrecta) {
        // ¡Correcto! 
        puntos++;
        document.getElementById('contador-puntos').innerText = puntos;
        imagenPerro.style.transform = 'scale(1.1)';
        actualizarAspectoPerro();

        // VALIDACIÓN DEL LÍMITE (Si llegó a 10)
        if (puntos >= 10) {
            setTimeout(() => {
                imagenPerro.style.transform = 'scale(1)';
                detenerAnimaciones(); // Frenamos los platos
                document.getElementById('zona-banda').style.display = 'none'; // Desaparece la banda
                document.getElementById('letrero-operacion').style.display = 'none'; // Desaparece la operación
                document.getElementById('pantalla-victoria').style.display = 'block'; // Muestra victoria
            }, 600);
        } else {
            // Aún no llega a 10, seguimos jugando
            setTimeout(() => {
                imagenPerro.style.transform = 'scale(1)';
                reiniciarYGenerar(); 
            }, 500);
        }

    } else {
        // ¡Incorrecto!
        imagenPerro.src = imgPerroTriste; 
        platoElegido.classList.add('animacion-error');
        
        setTimeout(() => {
            platoElegido.classList.remove('animacion-error');
            actualizarAspectoPerro(); 
            reiniciarYGenerar();      
        }, 600);
    }
}