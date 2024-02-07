let numeroSecreto;
let intentos;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarElementos (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoUsuario() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroUsuario === numeroSecreto){
        asignarElementos("p", `Acertaste el numero secreto en ${intentos} ${intentos == 1 ? "solo intento!" : "intentos!"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if ( numeroUsuario > numeroSecreto){
            asignarElementos ("p", "El numero secreto es menor!");
        } else {
            asignarElementos ("p", "El numero secreto es mayor!");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
 
function limpiarCaja() {
    document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);

    if (numerosSorteados.length == numeroMaximo){
        asignarElementos("p","Usaste todos los numeros posibles")
    } else {

    if (numerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
 }
}

function condicionesIniciales() {
    asignarElementos ("h1", "Juego del Numero Secreto");
    asignarElementos ("p", `Elige un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();


