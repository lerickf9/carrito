


const pendiente = ['Tarea','Comer','Proyecto','Estudiar JavaScript'];

pendiente.forEach( (pendiente, indice) =>{
    console.log(`${indice} : ${pendiente}`);
})

const carrito =[
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700}
]

const nuevoArreglo = carrito.forEach(producto => console.log( producto.precio));

const nuevoArreglo2 = carrito.map( producto => ( producto.precio));// Crea un nuevo arreglo

console.log(nuevoArreglo);
console.log(nuevoArreglo2);