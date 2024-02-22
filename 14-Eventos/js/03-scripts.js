//Eventos con el teclado

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () =>{
    console.log('Escribiendo...');
})

busqueda.addEventListener('keyup', () =>{
    console.log('Escribiendo...');
})

busqueda.addEventListener('blur', () =>{
    console.log('blur "click en otro lado"');
})

busqueda.addEventListener('copy', () =>{
    console.log('copiar el text ctrl + C');
})

busqueda.addEventListener('paste', () =>{
    console.log('pegar el text ctrl + V');
})

busqueda.addEventListener('cut', () =>{
    console.log('cortar el text ctrl + X');
})

//Realizas cualquier eventos mencionados menos el blur
busqueda.addEventListener('input', () =>{
    console.log('Todo en uno');
})

busqueda.addEventListener('input', (evt) =>{
    console.log(evt);
})

busqueda.addEventListener('input', (evt) =>{
    console.log(evt.type);
})

busqueda.addEventListener('input', (evt) =>{
    console.log(evt.target);
})

busqueda.addEventListener('input', (evt) =>{
    console.log(evt.target);
})

busqueda.addEventListener('input', (evt) =>{
    if(evt.target.value === ''){
        console.log('fallo la validacion');
    }

})