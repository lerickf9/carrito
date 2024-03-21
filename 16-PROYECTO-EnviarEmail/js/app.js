document.addEventListener('DOMContentLoaded', function(){
    //Selecionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //Resistrar un evento
    //Asignar evento
    // inputEmail.addEventListener('blur', function(e){
    //     //console.log('Sali del evento');//********Se dispara el evento 'blur' cuando salgo del campo*************
    //     console.log(e.target.value);//target me identifica la etiqueta /* e.target.value arroja en consola lo que escribe en el campo 'inputEmail'
    // });
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    


    function validar(e){
        if(e.target.value.trim() ===''){//Trim asegura los campos con espacios
            mostrarAlerta();
        }else{
            console.log(e.target.value);
        }
    }

    //Alertas
    function mostrarAlerta(){
        const error = document.createElement('P');
        error.textContent = ' Hubo un error ';
        error.classList.add('bg-red-600', 'text-white', 'p-2' , 'text-center');//Tailwind aclara a toda clase una propiedad

        //Inyectar un error al formulario
        formulario.appendChild(error);
        // formulario.innerHTML = error.innerHTML
    }
});