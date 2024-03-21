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
        //console.log(e.target.parentElement.nextElementSibling.nextElementSibling);
        if(e.target.value.trim() ===''){//Trim asegura los campos con espacios
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El Email no es valido', e.target.parentElement);
            return;
        }

        limpiarAlerta(e.target.parentElement);

        
    }

    //Alertas
    function mostrarAlerta(mensaje, referencia){
        //Comprueba si ya tiene una alerta
        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2' , 'text-center');//Tailwind aclara a toda la clase una propiedad

        //Inyectar un error al formulario
        referencia.appendChild(error);
        // formulario.innerHTML = error.innerHTML
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){
        //Expresion regular para email
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }
});