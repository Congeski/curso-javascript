// Escreva uma função que recebe 2 números e retorne o maior deles

// Função normal
function numeroMaior (numb1, numb2) {
  return (numb1 > numb2) ? `${numb1} é maior` : `${numb2} é maior`;
}

//Usando Arrow Function pra quando possui apenas uma linha dentro do bloco.
const max2 = (x, y) => x > y ? x : y;

console.log(numeroMaior(7, 6));
console.log(max2(10, 20));