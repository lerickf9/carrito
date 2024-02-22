const producto = {
    nombre: "Monitor de 34 pulgadas",
    precio: 300,
    disponible: true
}

//const nombre = producto.nombre
//console.log(nombre);


//Destructuring
const{ nombre} = producto;

console.log(nombre);

//Destruturin con arreglos
const numeros = [10, 20, 30,40];

//const [primero, segundo , tercero] = numeros; primera opcion para querer el elemnto dentro del arrays

//segunda opcion para ignorar los 2 primeros elementos y querer solo el tercero "30"
//const[ , , tercero] = numeros;

//console.log(primero); // para ignorar los 2 primero y querer el tercero debo comentar el console.log(primero);
//console.log(tercero);

const [primero, segundo, ...tercero] = numeros;

console.log(tercero);