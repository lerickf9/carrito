//traversi on the DOM

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.children);// Los espacio en blanco son considerado en elementos
//dIFERENTE TIPOS DE CODIGO
// console.log(navegacion.children[1].nodeName); //Text_node 
// console.log(navegacion.children[1].nodeType); //documentacion NODE_ELEMENT etiqueta de html

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM';
// console.log(card.children[1].children[1].textContent);

// card.children[0].src = 'img/hacer2.jpg';
// console.log(card.children[0]);

//Traversing the Hijo al Padre

// console.log(card.parentNode);
//console.log(card.parentElement.parentElement.parentElement);

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling);


