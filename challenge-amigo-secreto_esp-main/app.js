// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables globales.
const amigos = [];          // Guarda nombre ingrasados por el usuario.
let listaAmigoSorteado = [];// Guarda los indices de los amigos sorteados para evitar repeticiones.
// Funciones
function agregarAmigo () {
  let input = document.getElementById ('amigo'); // Captura el texto donde el usuario escribe.
  let valorDeUsuario = input.value.trim ();      // Guarda el valor ingresado, eliminando espacios al inico y al final con .trim().

  if (valorDeUsuario === "") {                  // Verifica si el campo esta vacio, si lo esta muestra una alerta y detiene la funcion con return.
    alert ("Por favor, ¡Inserte un nombre!.");  
    return;
  }

  amigos.push (valorDeUsuario);  // Agrega el nombre a la lista amigos.
  input.value = "";              // Limpia el campo de Entrada
  mostrarLista ();               // llama a mostrarLista() para actualizar la pantalla
}

function mostrarLista() {                              
  let lista = document.getElementById ("listaAmigos"); // Captura el elemtno HTML donde se mostrara la lista.
  lista.innerHTML = "";                                // limpia el contenido anterior para evitar duplicados.

  for (let i = 0; i < amigos.length; i++) {           // recorre la lista amigos.
    let li = document.createElement ("li");           // Crea un elemneto <li> por cada nombre.
    li.textContent = amigos[i];      
    lista.appendChild (li);                           // Lo agrega a la lista amigos.
  }
}

function sortearAmigo () {
let resultado = document.getElementById ("resultado");    // Captura el elemento HTML donde se mostrara el nombre sorteado.

  if(amigos.length === 0) {                                // Verifica si hay amigos en la lista.
    resultado.innerHTML = "No hay amigos para sortear.";   // Si no hay muestra un mensaje y detiene la funcion
    return;
  }

    if (listaAmigoSorteado.length === amigos.length){              // Verifica si ya se han sorteado todos los amigos.
    resultado.innerHTML = "Ya se han sorteado todos los amigos.";  //Si es asi muestra un mensaje y detiene la funcion.
    return;
  }
  let indice;
  do {
    indice = Math.floor (Math.random() * amigos.length);    // Genera un numeero aleatorio entre 0 y la cantidad de amigos ingresados.
  } while (listaAmigoSorteado.includes (indice));          // Repite el proceso si el indice ya fue sorteado.

  listaAmigoSorteado.push (indice);                            // Guarda el indice sorteado en la listaAmigoSorteado.
  let nombreSorteado = amigos [indice];                        // Obtiene el nombre correspondiente de la lista amigos.
  resultado.innerHTML = `Amigo sorteado: ${nombreSorteado}`;   // Muestra el resultado en pantalla
}



