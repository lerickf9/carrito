//.map es similar al foreach
//.map te va allenar una variable con un nuevo arreglo

const carrito =[
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700}
]

const nuevoArreglo = carrito.map( function(producto){
    return (`${producto.nombre} : ${producto.precio} $ USD`);
}); 

const nuevoArreglo2 = carrito.forEach( function(producto){
    return (`${producto.nombre} : ${producto.precio} $ USD`);
}); 

console.log(nuevoArreglo);
console.log(nuevoArreglo2);