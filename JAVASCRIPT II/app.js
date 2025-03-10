let numeroSecreto = 0;  // Esta es una variable del tipo global
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Esta funcion sirve para darle ayudas
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //Para que el valor de resultado sea positivo 
    // console.log(numeroDeUsuario === numeroSecreto); //Triple igual dice, tienes que ser igual en valor e igual en tipo

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)   //Aqui se asigna el texto a un elemento (el parrafo con la tag p) y se camba el texto original
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto 
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos ++ ;
        limpiarCaja();

    }
    return;    
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    return;
}

function generarNumeroSecreto() {
    numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya tenemos todos los numeros en la lista ?
    if (listaNumerosSorteados.length== numeroMaximo){
        asignarTextoElemento('p', `Ya se usaron todos los numeros posibles.`);
    }else{
        // Validar que el numero esta incluido en la lista
        // Llamamos a la misma funcion (recursividad)
        if(listaNumerosSorteados.includes(numeroGenerado)){  
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

   // return numeroSecreto; La linea de arriba puede ser una variable pero mejor hago que regrese el valor directo para evitar crear un avariable
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}


function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos a 1
    condicionesIniciales();
    //deshabilitar el boton nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}



condicionesIniciales();