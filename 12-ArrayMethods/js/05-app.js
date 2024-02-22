//find
const carrito =[
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700}
]

//con un foreach
let resultado = '';
carrito.forEach((producto, index)=>{
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index]
    }
});

console.log(resultado);

//.find encuentra y asigna el primer valor en el array
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2);