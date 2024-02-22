const carrito =[
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700}
]

//filter se puede hacer muchas operaciones en el arreglo

let resultado;

resultado = carrito.filter( producto => producto.precio > 400);
resultado = carrito.filter( producto => producto.precio < 600)
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos')


console.log(resultado);

