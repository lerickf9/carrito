document.addEventListener('DOMContentLoaded', function(){
    //Selecionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    const email={
        email: '',
        asunto: '',
        mensaje: ''
    }
    //Resistrar un evento
    //Asignar evento
    // inputEmail.addEventListener('blur', function(e){
    //     //console.log('Sali del evento');//********Se dispara el evento 'blur' cuando salgo del campo*************
    //     console.log(e.target.value);//target me identifica la etiqueta /* e.target.value arroja en consola lo que escribe en el campo 'inputEmail'
    // });
    //Se puede poner ¡¡¡¡¡input!!!! en vez de blur para un campo en tiempo real.
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    formulario.addEventListener('submit', enviarEmail);
    
    btnReset.addEventListener('click', function(e) {
        e.preventDefault(); //PREVEE POR DEFECTO EL COMPORTAMIENTO LUEGO SE DEBE PONER QUE ACCIONES QUIERES PREVEER
        //Reiniciar el objeto
        resetFormulario();
    });

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(()=>{
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //Crear una alerta
            const alertaExisto = document.createElement('P');
            alertaExisto.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10',
            'font-bold', 'text-sm', 'uppercase');

            alertaExisto.textContent = 'mensaje enviado correctamente';

            formulario.appendChild(alertaExisto);

            setTimeout(() => {
                alertaExisto.remove();
            }, 3000);
        }, 3000)
    }


    function validar(e){
        //console.log(e.target.parentElement.nextElementSibling.nextElementSibling);
        if(e.target.value.trim() ===''){//Trim asegura los campos con espacios
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comporbarEmail();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El Email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comporbarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //console.log(email);

        //Comprobar el objeto email
        comporbarEmail();
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

    function comporbarEmail(){
        //console.log(Object.values(email).includes(''));//valores del lado derecho Y LO VA ASIGNAR EN UN ARRREGLO TRUE O FALSE
        //VERIFICA QUE TODOS LOS CAMPOS ESTEN LLENOS
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;            
        
        
    }

    function resetFormulario(){
        email.email = '';
        email.asunto= '';
        email.mensaje='';
        formulario.reset();
        comporbarEmail();
    }
});