//               0123456789...
let umaString = 'O rato roeu a roupa do rei de roma.';

console.log(umaString.charAt(8)); // irá pegar o caractere que está na posição 6
console.log(umaString.concat(' em', ' um')); //Não utiliza no dia a dia

console.log(umaString.indexOf('roupa')); //Indice da palavra texto, retorna onde começa a palavra (Indice 3 neste exemplo).
console.log(umaString.lastIndexOf('r', 2)); //Busca indice de trás pra frente

//Expressão regulares
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g)); //Retorna o indice da expressao regular
console.log(umaString.replace(/r/g, '#')); //Substitui a string

//Tamanho da string
console.log(umaString.length);

//Fatiar a string
console.log(umaString.slice(2, 6)); //Ira fatiar a String (Rato)
console.log(umaString.slice(-5, -1)); 

console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); //faz a mesma coisa do slice

//Dividir a string
console.log(umaString.split(' ', 3));

// String toda maiúscula e minúscula
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());