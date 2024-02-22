//Eventos que suceden con el scroll del mouse...

// window.addEventListener('scroll', () =>{
//     //console.log('scrolling');

//     const scrollPX = window.scrollY;
//     console.log(scrollPX);
// });

window.addEventListener('scroll', () =>{

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    // console.log(ubicacion);

    if(ubicacion.top < 784){
        console.log('El elemento ya esta visible');
    }else{
        console.log('Aún no está visible. Sigue scroleando');
    }
});