// String, number, undefined, null, boolean, symbol
const nome = 'Vinicius'; // String
const nome1 = "Felipe"; // String
const nome2 = `Nunes`; // String
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> ão aponta pra local nenhum na memória
const aprovado = true; // Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2,2

a = 3;
console.log(a, b); // 3,2