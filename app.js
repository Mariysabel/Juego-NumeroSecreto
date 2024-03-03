let nuemeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario === nuemeroSecreto);
    if (numeroDeUsuario == nuemeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > nuemeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function generarNumeroSecreto() {
    let numGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon los números posibles');
    } else {
        //si el número generado está en la lista
        if (numerosSorteados.includes(numGenerado)) {
            console.log(numerosSorteados);
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numGenerado);
            console.log(numerosSorteados);
            return numGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    nuemeroSecreto = generarNumeroSecreto();
    console.log(nuemeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo
    //generar num aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabiliar el otro botón
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();