const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

const carrito =[
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700}
]

//comprobar si un valor existe en un arreglo

meses.forEach((mes) => {
    console.log(mes);
})

meses.forEach((mes) => {
    
    if(mes==='Enero'){
        console.log('Enero si existe');
    }
})

//En un arreglo solo se ocupa el includes
const resultado = meses.includes('Diciembre');
console.log(resultado);

//Para un arreglo de objeto se ocupa el some
const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe);


//En un arreglo tradicional con .some
const exist2 = meses.some ( mes => mes ==='Febrero');
console.log(exist2);