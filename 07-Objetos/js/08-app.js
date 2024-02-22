//Freeze no te permite realizar ningunca opcion ni modificar ni agregar

const producto = {
    nombre: "Monitor de 34 pulgadas",
    precio: 300,
    desponible: true
}
Object.freeze(producto);


producto.desponible = false;
producto.imagen = "imagen-jpg";

console.log(producto);

//Object metod

console.log(Object.isFrozen(producto));