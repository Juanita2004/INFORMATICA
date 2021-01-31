let ilandfinalistas = [
    {Nombre: "Sunoo", Edad: "17", PosiciónVG: "1", Perfil: "https://i.pinimg.com/originals/db/c3/d2/dbc3d2697f9db61d3256abcdda244d3a.jpg"},
    {Nombre: "Daniel", Edad: "14", PosiciónVG: "2", Perfil: "https://i.pinimg.com/236x/21/9a/bc/219abc50497970f6ccc64d4528662cb7.jpg"},
    {Nombre: "Heeseung", Edad: "19", PosiciónVG: "3", Perfil: "https://i.pinimg.com/736x/0f/a7/c6/0fa7c68291bb831ba9038fe67e42d638.jpg"},
    {Nombre: "Sunghoon", Edad: "18", PosiciónVG: "4", Perfil: "https://pbs.twimg.com/media/EfE96-WWsAE1YgZ.jpg"},
    {Nombre: "K", Edad: "23", PosiciónVG: "5", Perfil: "https://i.pinimg.com/originals/ed/15/fb/ed15fbc13ebd3301ef3d47b263834cf5.jpg"},
    {Nombre: "Jay", Edad: "18", PosiciónVG: "6", Perfil: "https://i.pinimg.com/originals/0a/57/81/0a5781064d2c38d5d4b4e440b93fd8bb.jpg"},
    {Nombre: "Jungwon", Edad: "16", PosiciónVG: "7", Perfil: "https://i.pinimg.com/736x/ff/0c/d9/ff0cd96fe1857f3857b2cda77764b150.jpg"},
    {Nombre: "Jake", Edad: "18", PosiciónVG: "8", Perfil: "https://i.pinimg.com/originals/1f/67/df/1f67df0141ec8583a898bcebe2dd0105.jpg"},
    {Nombre: "Niki", Edad: "15", PosiciónVG: "9", Perfil: "https://pbs.twimg.com/media/EiNt_G5UwAERIjL.jpg"},
    {Nombre: "Taki", Edad: "15", PosiciónVG: "10", Perfil: "https://i.pinimg.com/originals/b4/0b/6e/b40b6e059140ded2eef963da2426fb78.jpg"},
    {Nombre: "Geonu", Edad: "19", PosiciónVG: "11", Perfil: "https://pbs.twimg.com/media/EgU0qjdU0AAXo86.jpg"},
    {Nombre: "Hanbin", Edad: "23", PosiciónVG: "12", Perfil: "https://i.pinimg.com/originals/7a/4d/51/7a4d51c0df5cf7c748bcd5bf7e705456.jpg"}
]
let tabla = document.querySelector('#ilandfinalistas')
let contenidoTabla = '<tr><th>Nombre</th><th>Edad</th><th>Posición por Votación Global</th><th>Perfil</th></tr>'
for (ilandfinalista of ilandfinalistas) {
    contenidoTabla = contenidoTabla + `<tr><td>${ilandfinalista.Nombre}</td><td>${ilandfinalista.Edad}</td><td>${ilandfinalista.PosiciónVG}</td>
    <td><img width="100px" src="${ilandfinalista.Perfil}" alt=""></td></tr>`
}
tabla.innerHTML = contenidoTabla