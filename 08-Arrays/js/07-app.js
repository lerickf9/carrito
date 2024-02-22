const carrito = [];

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 600
}

const producto4 = {
    nombre: 'Celular 2',
    precio: 470
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);


const producto3 = {
    nombre: 'Teclado',
    precio: 45
}

carrito.unshift(producto3);
console.table(carrito);



//Eliminar el ultimo elemento del arreglo

// carrito.pop();

// console.table(carrito);

// carrito.pop();

// console.table(carrito);

//Eliminar el elemento del inicio del arreglo

carrito.splice(0,1);
console.table(carrito);


