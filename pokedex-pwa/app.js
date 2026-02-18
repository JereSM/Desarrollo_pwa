const resultado = document.getElementById("resultado");

async function buscarPokemon(){

let nombre = document.getElementById("pokemonName").value.toLowerCase();

try{

let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
let data = await res.json();

resultado.innerHTML = `
<h2>${data.name}</h2>
<img src="${data.sprites.front_default}">
<p>Tipo: ${data.types[0].type.name}</p>
`;

localStorage.setItem("ultimoPokemon", resultado.innerHTML);

}catch{
resultado.innerHTML = "<p>No encontrado</p>";
}

}

if(localStorage.getItem("ultimoPokemon")){
resultado.innerHTML = localStorage.getItem("ultimoPokemon");
}

// Registrar service worker
if("serviceWorker" in navigator){
navigator.serviceWorker.register("service-worker.js");
}
