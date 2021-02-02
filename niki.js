// querySelector sirve para hacer referencia desde JS
// a los elementos de html
let botonniki = document.querySelector("#nikiboton")
let parrafoniki = document.querySelector("#niki")
// onclick es un evento que ocurrecuando el usario hace click sobre un elemento, en este caso sobre el botón
botonniki.onclick = desaparecerParrafoNiki

// los paréntesis () indican que la función no necesita ningún argumento para funcionar.
function desaparecerParrafoNiki(){
    // cambio el color a azul y luego de 3 segundos
    // lo cambio a negro
    botonniki.style.color = "purple";
    parrafoniki.style.display = "none"
    setTimeout(aparecerParrafoNiki, 3000);
}
function aparecerParrafoNiki(){
    // lo cambio a negro
    botonniki.style.color = "black";
    parrafoniki.style.display = "block"
}

botonniki.style.color = "black"