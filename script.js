let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")


// Voy a escoger los colores del rectangulo del lápiz

ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"

// Voy a dibujar el rectángulo del lápiz

ctx.fillRect(150, 100 , 250, 40)
ctx.strokeRect(150,100,250, 40)

// Voy a dibujar la punta del lápiz, no sin antes escoger los colores

ctx.fillStyle = "grey"
ctx.strokeStyle = "black"

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(120, 120);
ctx.lineTo(150, 140);
ctx.fill();
ctx.stroke();

// Voy a dibujar el borrador, no sin antes escoger los colores

ctx.fillStyle = "pink"
ctx.strokeStyle = "black"

ctx.beginPath();
ctx.moveTo(400,100)
ctx.arc(400, 120, 20, -Math.PI/2, Math.PI/2)
ctx.fill();
ctx.stroke();

// Ahora voy a dibujar el celular
// Empiezo por la forma del celular, no sin antes escoger los colores 

ctx.fillStyle = "gold"

ctx.beginPath();
ctx.fillRect(145, 195, 140, 260);

// Sigo con la pantalla del celular

ctx.fillStyle = "DimGray"

ctx.beginPath();
ctx.fillRect(150, 200 , 130, 250);
