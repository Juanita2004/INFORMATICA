// querySelector sirve para hacer referencia desde JS
// a los elementos de html
let botonsunoo = document.querySelector("#sunooboton")
let parrafosunoo = document.querySelector("#sunoo")
// onclick es un evento que ocurre cuando el usuario hace click sobre un elemento, en este caso sobre el botón
botonsunoo.onclick = cambiarColor

// cambiarColor es la función que se ejecuta cuando el usuario hace click en el botón
// los paréntesis () indican que la función no necesita ningún argumento para funcionar.
function cambiarColor(){
    // cambio el color a rosado
    if (parrafosunoo.style.color == "black")
    {
        parrafosunoo.style.color = "rgb(241, 127, 226)"
    }
    else
    {
        parrafosunoo.style.color = "black"
    }
    console.log("Primer botón clickeado");
}

parrafosunoo.style.color = "black";
