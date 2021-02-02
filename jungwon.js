// querySelector sirve para hacer referencia desde JS
// a los elementos de html
let botonjungwon = document.querySelector("#jungwonboton")
let parrafojungwon = document.querySelector("#jungwon")
// onclick es un evento que ocurrecuando el usario hace click sobre un elemento, en este caso sobre el botón
botonjungwon.onclick = desaparecerParrafoJungwon

// desparecerParrafoJungwon es la función que se ejecuta cuando el usuario hace click en el botón
// los paréntesis () indican que la función no necesita ningún argumento para funcionar.
function desaparecerParrafoJungwon(){
    // desaparecer el párrafo
    if(botonjungwon.style.color == "black"){
        botonjungwon.style.color ="purple"
        parrafojungwon.style.display ="none"
    }
    else {
        botonjungwon.style.color ="black"
        parrafojungwon.style.display ="block"
    }

    console.log("Segundo botón clickeado");
}
botonjungwon.style.color = "black"