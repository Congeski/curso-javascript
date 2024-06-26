// return
// Retorna um valor
// Termina a função
// Função Closure - Função que está dentro de outra função
function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador
  }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))