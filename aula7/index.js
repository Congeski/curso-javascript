// Não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// Não pode começar o nome de uma constantes com um número
// Não pode conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constantes
// Não utilize var, utilize Const.
// String = Text | Number = Número
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);

resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);
console.log(resultaDuplicado);
console.log(resultado);

console.log(typeof primeiroNumero);