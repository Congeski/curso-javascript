/*
Primitivos (imutáveis) valores copiados - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) apontam para o mesmo valor na memoria - Arrays, Object, function 
*/
// Referencia
let a = [1, 2, 3];
let b = [...a]; // Para copiar igual tipos primitivos, utiliza let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz')
console.log(c);

const d = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const e = {...d};

d.nome = 'João';
console.log(d);
console.log(e);