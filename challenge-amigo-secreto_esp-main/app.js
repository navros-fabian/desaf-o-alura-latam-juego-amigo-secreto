// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo () {
  let input = document.getElementById ('amigo');
  let valorDeUsuario = input.value.trim ();

  if (valorDeUsuario === "") {
    alert ("Por favor, ¡Inserte un nombre!.");
    return;
  }

  amigos.push (valorUsuario);
  input.value = "";

  mostrarLista ();
}

function mostrarLista() {
  let lista = document.getElementById ("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i > amigos.length; i++) {
    let li = document.createElement ("li");
    li.textContent = amigos[i];
    lista.appendChild (li);
  }
}

function sortearAmigo () {
let resultado = document.getElementById ("resultado");

  if(amigos.length === 0) {
    resultado.innerHTML = "No hay amigos para sortear.";
    return;
  }

  let indice = Math.floor (Math.random() * amigos.lenth);

  let nombreSorteado = amigos [indice];

  resultado.innerHTML = `Amigo sorteado: ${nombreSorteado}`;
}


