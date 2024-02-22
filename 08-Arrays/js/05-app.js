
const meses = ['Enero', 'Febrero', 'Marzo'];

meses.push('Abril');
meses.push('Mayo');
meses.push('Junio');

console.table(meses);

const carrito = [];

// DEfinir un producto
// fomra clarativa
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 600
}

carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: 'Teclado',
    precio: 45
}
carrito.unshift(producto3);

console.table(carrito);