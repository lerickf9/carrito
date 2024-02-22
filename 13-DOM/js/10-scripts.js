//Creacion del DOM desde JS

const enlace = document.createElement('a');
//Agregando el texto
enlace.textContent = 'Nuevo Enlace';
//Agregandoel href
enlace.href = '/nuevo-Enlace';

enlace.target = '_blank';//Se agregan nuevos atributos gracias al createElement

enlace.setAttribute('data-enlace', 'nuevo-enlace');//Se agregan nuevos atributos gracias al createElement

enlace.classList.add('alguna-clase');//Se agregan nuevos atributos gracias al createElement

enlace.onclick = miFunction;

console.log(enlace);


const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);//lo deja al final de los hijos
console.log(navegacion.children);//muestra las pocisiones de los hijos
navegacion.insertBefore(enlace, navegacion.children[1]); //node de referencia y requiere el segundo argumento.

function miFunction(){
    alert('Diste un click');
}

//Crear un card de forma dinamica
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');

//Crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//Crar el card por ser el Padre
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asiganar info
card.appendChild(info);

//Insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
// contenedor.appendChild(card);//Se crea al final de los elementos card
contenedor.insertBefore(card, contenedor.children[0]);


