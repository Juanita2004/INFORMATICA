let tareas = [
]
let tabla = document.querySelector('#tareas')
// console.log(tabla)
function llenarTabla(){
    // Voy a llenar la tabla añadiendo las filas necesarias
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha de entrega</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.materia}</td><td>${tarea.des}</td>
        <td>${tarea.fecha}</td></tr>`
    }
    // A la tabla le asigno el contenido que creamos
    tabla.innerHTML = contenidoTabla;
}

let form = document.querySelector("#formularioAñadir");

function addHomework(){
    let materiaNueva = document.querySelector("input[name=materia]").value
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "diametro"
    let desNueva = (document.querySelector("input[name=des]").value)
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "urlImagen"
    let fechaNueva = document.querySelector("input[name=fecha]").value
    
    // con los datos ingresados por el usuario voy a añadir un planeta a la lista de planetas
    
    // crear el planeta nuevo
    let tareaNueva = {materia:materiaNueva, des:desNueva, fecha:fechaNueva}
    console.log("Ahora voy a añadir la siguiente tarea");
    console.log(tareaNueva)

    // añado el planeta a la lista
    tareas.push(tareaNueva)

    // generar de nuevo la tabla
    llenarTabla();
    return false;
}

form.onsubmit = addHomework;