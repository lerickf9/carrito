const producto = {
    nombre: "Monitor de 34 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1 kg",
    medida : "1m"
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

//spread Operator o Rest Operador
const resultado2={...producto, ...medidas}

console.log(resultado);
console.log(resultado2);