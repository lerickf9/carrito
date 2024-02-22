//Prevenir event dubbling con Delegation

const cardDiv = document.querySelector('.card'); 

cardDiv.addEventListener('click', (evt) =>{
    console.log(evt.target);
});

cardDiv.addEventListener('click', (evt) =>{
    if(evt.target.classList.contains('titulo')){
        console.log('Diste click en título');
    }
    if(evt.target.classList.contains('precio')){
        console.log('Diste click en precio');
    }
    if(evt.target.classList.contains('card')){
        console.log('Diste click en card');
    }
});

