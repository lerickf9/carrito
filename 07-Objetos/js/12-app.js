//El object constructor

//Object literal
const producto = {
    nombre: "Monitor de 34 pulgadas",
    precio: 300,
    disponible: true
}

//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor de 20 pulgadas", 300);
console.log(producto2);

const producto3 = new Producto("Televicion", 100);
console.log(producto3);

