// Array para guardar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo"); 
    let nombre = input.value.trim(); 

    // Validación: si el campo está vacío, mostrar alerta
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Mostrar la lista actualizada
    mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía, agrega al menos un nombre");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);

    // Mostrar el resultado en el UL con id="resultado"
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultados anteriores

    let li = document.createElement("li");
    li.textContent = "El amigo secreto es: " + amigos[indice];
    resultado.appendChild(li);
}





