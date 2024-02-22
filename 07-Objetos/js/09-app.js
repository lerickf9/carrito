
//Seal te permite modificar la propiedad pero no se agregar o eliminar
const producto = {
    nombre: "Monitor de 34 pulgadas",
    precio: 300,
    desponible: true
}
Object.seal(producto);

producto.desponible = false;
//producto.imagen = "imagen-jpg";

console.log(producto);

//Object metod

console.log(Object.isSealed(producto));