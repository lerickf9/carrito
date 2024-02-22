const producto = 'Monitor 24 pulgadas';

//.replace para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));

console.log(producto.replace('Monitor', 'Monitor curvo'));


//.slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(4));
//JAVASCRIPT NO HACE NADA, NO RECONOCE QUE CORTAR Y EL SEGUNDO NUMERO DEBE SER MAYOR AL PRIMERO
console.log(producto.slice(2, 1));

//Alternativa slice
console.log(producto.substring(0, 10));
//ES DIFERENTE A SLICE MUESTRA DEL CARCATER DE LA POSICION 2 HASTA UN CARACETER A LA DERECHA
console.log(producto.substring(3, 1));

const usuario = "Erick";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));

