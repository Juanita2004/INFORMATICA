let alimentos = [
    {nombre: 'Pan'},
    {nombre: 'Arroz'},
    {nombre: 'Huevos'},
    {nombre: 'Carne'},
    {nombre: 'Pescado'}
]
let lista = document.querySelector('#alimentos')
for (alimento of alimentos) {
    contenidoLista = `<ul><li>${alimento.nombre}</li><li>${alimento.nombre}</li><li>${alimento.nombre}</li><li>${alimento.nombre}</li><li>${alimento.nombre}</li></ul>`
}
lista.innerHTML = contenidoLista