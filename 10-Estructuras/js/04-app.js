
const dinero = 500;
const totalAPagar = 500;
tarjeta = true;

if( dinero >= totalAPagar){
    console.log('Si podemos pagar');
}else if(tarjeta){
    console.log('Si pudo pagar porque tengo la tarjeta');
} else {
    console.log('Fondos insuficientes');
}
