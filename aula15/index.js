//                  0          1        2
const alunos = ['Vinicius', 'Maria', 'João'];

// Remover do Começo
const removido1 = alunos.shift();
console.log(removido1);
console.log(alunos);

// Remover elementos do fim
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

// Adiciona no começo do array
alunos.unshift('Luiza');
alunos.unshift('Fábio');

// Adiciona no fim
alunos.push('Luiza');
alunos.push('Fábio');
// alunos[alunos.length] = 'Luiza'

// Fatiar Array
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -2));

// Type do aluno (object), aluno é instance de Array?
console.log(typeof alunos);
console.log(alunos instanceof Array);

// Remover indice, retornara undefined no indice 1
delete alunos[1];
console.log(alunos);

// Const com valores Mutaveis
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]