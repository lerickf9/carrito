localStorage.setItem('nombre', 'Erick'); //Solo lee string

const producto ={
    nombre: 'Monitor',
    precio: 300
}

const productoString = JSON.stringify( producto );//Transforma el objeto a un string 
localStorage.setItem('producto', productoString);


const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify( meses ));