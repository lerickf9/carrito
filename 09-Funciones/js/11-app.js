const aprendiendo = function (tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo("JavaScript", 'Node JS');

//En arrow function no es necesario parentesis cuando envio solo 1 paramero a la funcion
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('JavaScript', 'Node JS'));