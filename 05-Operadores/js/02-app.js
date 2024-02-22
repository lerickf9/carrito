const num1 = 20;
const num2 = "20";
const num3 = 30;

// REVISAR SI 2 NUMERO SON IGUALES

console.log(num1 == num2);
console.log(num1 == num3);

//comparador estrcito se fija en el valor y el tipo de dato
console.log(num1 === num2);
console.log(typeof num1);
console.log(typeof num2);
console.log(num1 === parseInt(num2));

//Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(num1 != num2);