//Al ser una constante un objeto si se puede modificar sus prpiedades.

const producto = {
    nombre: "Monitor de 34 pulgadas",
    precio: 300,
    desponible: true
}

producto.desponible = false;
delete producto.precio;

console.log(producto);