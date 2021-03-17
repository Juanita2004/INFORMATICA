// Leo la variable planetas del almacenamiento local
// y si existe la creo

let tareas = JSON.parse(localStorage.getItem("tareas"));
if (tareas == null) tareas = [];

let boton = 
// Creo una variable que haga referencia a la tabla
// QuerySelector selecciona un elemento del html, usando los selectores de css.
let tabla = document.querySelector('#tareas')
// console.log(tabla)
function llenarTabla(){
    // Voy a llenar la tabla añadiendo las filas necesarias
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha de Entrega</th><th>Eliminar</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.materia}</td><td>${tarea.des}</td>
        <td>${tarea.fecha}</td><td>${tarea.borrar}</td></tr>`
    }
    // A la tabla le asigno el contenido que creamos
    tabla.innerHTML = contenidoTabla;
}

// variable que corresponde al formulario.
let form = document.querySelector("#formularioAñadir");

function addHomework(){
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "nombre"
    let materiaNuevo = document.querySelector("input[name=materia]").value
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "diametro"
    let desNuevo = document.querySelector("input[name=des]").value
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "urlImagen"
    let fechaNuevo = document.querySelector("input[name=fecha]").value
    
    // con los datos ingresados por el usuario voy a añadir un planeta a la lista de planetas
    
    // crear el planeta nuevo
    let tareaNueva = {materia:materiaNuevo, des:desNuevo, fecha:fechaNuevo}
    console.log("Ahora voy a añadir el siguiente planeta");
    console.log(tareaNueva)

    // añado el planeta a la lista
    tareas.push(tareaNueva)
    
    // Guardo la lista de planetas en el almacenamiento local
    localStorage.setItem("tareas", JSON.stringify(tareas));
    // planetas[2]

    // generar de nuevo la tabla
    // llenarTabla es una función, para ejecutarla debo pasarle los 
    // parámetros que necesite. En este caso no necesita ninguno, por 
    // eso los paréntesis están vacíos.
    llenarTabla();
    return false;
}

form.onsubmit = addHomework;

