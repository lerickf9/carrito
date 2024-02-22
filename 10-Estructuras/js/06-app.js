//Operador &&

const usuario = false;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
}else if(!usuario && !puedePagar){
    console.log('Usted no puede pagar');
}else if(!usuario){
    console.log('Inicia sesion o crea una cuenta');
}else if(!puedePagar){
    console.log('Saldo insuficientes');
}