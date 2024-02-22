//Objeto Math

const num1 = 30;
const num2 = 20;

let resultado;

//PI
resultado = Math.PI;
//Redondear hacia abajo
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.26);
resultado = Math.round(2.4);
//Redondear hacia arriba
resultado = Math.ceil(2.1);
//Redondear hacia abajo
resultado = Math.floor(2.1);
//Sacar la raiz cuadrada 
resultado = Math.sqrt(144);
//Valor absoluto
resultado = Math.abs(-500);
//potencia
resultado = Math.pow(2,3);

//Minimo
resultado = Math.min(1,2,3,4,5);

//MAximo valor
resultado = Math.max(34,53,55,67);

//numero random
resultado= Math.random();

//random de un random
resultado= Math.floor(Math.random() * 30);

console.log(resultado);