//Eventos del mouse

const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () =>{
    console.log('click en nav');
})

nav.addEventListener('mouseenter', () =>{
    nav.style.backgroundColor = 'white';
    console.log('entrando en la nav');
})

nav.addEventListener('mouseout', () =>{
    nav.style.backgroundColor = 'trasparent';
    console.log('saliendo de la nav');
})


//Es similar al evento click
nav.addEventListener('mousedown', () =>{
    console.log('Entrando...');
})

nav.addEventListener('mouseup', () =>{
    console.log('Soltando el click');
})

nav.addEventListener('dblclick', () =>{
    console.log('Doble click');
})

