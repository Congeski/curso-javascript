// argumentos que sustenta todos os argumentos enviados
function funcao() {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }

  console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7)

//Utilizando objetos e desestruturação
function funcao1({ nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade)
}
funcao1({ nome: 'Vinicius', sobrenome: 'Nunes', idade: 26})

// Utilizando Array
function funcao2([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3)
}
funcao2(['Vinicius', 'Nunes', 26])

// Exemplo mais real - Usando rest operator
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    console.log(numero)
  }
}

conta('+', 0, 20, 30, 40, 50)