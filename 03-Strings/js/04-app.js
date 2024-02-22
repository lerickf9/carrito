const producto = '                             Monitor 24 pulgadas     ';

console.log(producto);
console.log(producto.length);

//eliminar el principio en blancos
console.log(producto.trimStart());
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());

console.log(producto.trim());