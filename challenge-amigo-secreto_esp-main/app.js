// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []; 

function agregarAmigo() {
    let agregandoAmigoInput = document.getElementById('amigo');  
    let nombreAmigo = agregandoAmigoInput.value;                 
    if (!nombreAmigo){
        alert("No puedes dejar el espacio vacio.")
        return;
    }else{
    let nuevoNombreAmigo = nombreAmigo.charAt(0).toUpperCase() + nombreAmigo.slice(1).toLowerCase();
    listaAmigos.push(nuevoNombreAmigo);
    agregandoAmigoInput.value= "" ;
    agregandoAmigoInput.focus();
    imprimirAmigos();
    }
}
function imprimirAmigos(){
    let amigos = document.getElementById("listaAmigos")        
    amigos.innerHTML = "";

    for (let i = 0; i< listaAmigos.length; i++){
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        amigos.appendChild(item);
    }
}

function sortearAmigo(){
    if (listaAmigos.length === 0){
        alerts("No hay valores en la lista para sortear.");
        return;
    }
    let indiceListaAmigos = Math.floor(Math.random()*listaAmigos.length);
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `Tu amigo secreto es: ${listaAmigos[indiceListaAmigos]}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    return; 
}