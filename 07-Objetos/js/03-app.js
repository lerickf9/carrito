const producto = {
    nombre: "Monitor de 34 pulgadas",
    precio: 300,
    desponible: true
}

//Agregar nueva propiedad al objeto
producto.imagen = "imagen.jpg"

//Eliminar propiedad del objeto
delete producto.desponible;

console.log(producto);