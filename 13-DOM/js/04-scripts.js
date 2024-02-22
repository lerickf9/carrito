//QuerySelector Te permite seleccionar clases no como el getElement y encuentra el primero que encuentre

const card = document.querySelector('.card');
console.log(card);

//Podemos tener selectores especifico como en CSS
//Cuidado con tener el espacio para abarcar la clase .info
const info = document.querySelector('.premium .info');
console.log(info);

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);



//Seleccionar el formulario

const formulario = document.querySelector('#formulario');
console.log(formulario);


//seleccionar elemento html
const navegacion = document.querySelector('nav');
console.log(navegacion);

