const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);


console.log(encabezado.textContent);//Se trae el texto
console.log(encabezado.innerHTML);//Se trae el texto con el html

const nuevoHeading = 'Nuevo Heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
// console.log(imagen);
//No me funciona el src 
