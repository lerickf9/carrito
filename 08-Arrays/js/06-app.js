
const carrito = [];

// DEfinir un producto

const producto1 = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 600
}


const producto3 = {
    nombre: 'Teclado',
    precio: 45
}
//forma imperativa 
let resultado;

resultado = [...carrito, producto1];

resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];


console.table(resultado);