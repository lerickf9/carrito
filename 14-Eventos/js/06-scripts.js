// Event Bubbling  uno o varios eventos se disparan por ser el padre.

const cardDiv = document.querySelector('.card'); 
const infoDiv = document.querySelector('.info'); 
const titulo = document.querySelector('.titulo'); 

cardDiv.addEventListener('click', (evt) =>{
    evt.stopPropagation();
    console.log('Click en card');
});

infoDiv.addEventListener('click', (evt) =>{
    evt.stopPropagation();
    console.log('Click en el info');
});

titulo.addEventListener('click', (evt) =>{
    evt.stopPropagation();
    console.log('Click en el titulo');
});
