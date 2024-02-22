//Operador ternario

const autenticado = true;
const puedePagar = true;

console.log(autenticado && puedePagar ? 'Si puede pagar': 'No, no está autenticado');

//otra forma de anillar un operador terniario es:

console.log(autenticado ? puedePagar ? 'Si está autenticado y puede pagar': 'Si está autenticado pero no puede pagar' : 'No está autenticado')