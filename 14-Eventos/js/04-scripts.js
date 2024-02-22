//Evento de formulario.

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(evt){
    evt.preventDefault();//preveniene la accion por defecto. 
    console.log(evt);
    console.log(evt.target.action);
}

