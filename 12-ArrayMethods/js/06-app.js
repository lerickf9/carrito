const carrito =[
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700}
]

//every  se debe cumplir toda la condicion.

const resultado = carrito.every( producto => producto.precio < 500);
console.log(resultado);

const resultado2 = carrito.some( producto => producto.precio < 500);
console.log(resultado2);