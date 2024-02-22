const producto = {
    nombre: "Monitor de 34 pulgadas",
    precio: 300,
    disponible: true,
    informacion:{
        medidas:{
            peso: '1Kh',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);

