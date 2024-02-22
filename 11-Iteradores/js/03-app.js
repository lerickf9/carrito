// fizz buzz - 100 numeros

//3 6 9 12 15....  fizz
//5 10 15 20... buzz
//15 30 45 ... FIZZBUZZ

let numero = 100;

for(let i = 1 ; i<=100; i++){
    if(i % 15 === 0){
        console.log(`El numero ${i} es FIZZBUZZ!!!!`);
    }else if(i % 3 === 0){
        console.log(`El numero ${i} es FIZZ`);
    }else if(i % 5 === 0){
        console.log(`El numero ${i} es BUZZ`);
    }
}