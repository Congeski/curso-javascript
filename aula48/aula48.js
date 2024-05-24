// argumentos que sustenta todos os argunmentos enviados
function funcao() {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }

  console.log(total)
}

funcao(1, 2, 3)

// Maneira Antiga para atribuir valor padrão caso não passe numero para o argumento
function soma(a, b) {
  b = b || 0
  console.log(a + b)
}
funcao(2)

// Maneira Moderna para atribuir valor padrão caso não passe numero para o argumento
function soma2(a, b = 2, c = 4) {
  console.log(a + b + c)
}
soma2(2, undefined, 20)  // Não é uma maneira adequada de mandar

// Atibuição via destruturação - Via Objeto / Funciona com Array []
function funcao2({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade)
}
funcao2({ nome: 'Vinicius', sobrenome: 'Congeski', idade: 20 })

// Exemplo mais real - Usando rest operator (sempre deve ser o ultimo parametro)
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero
    if (operador === '-') acumulador -= numero
    if (operador === '/') acumulador /= numero
    if (operador === '*') acumulador *= numero
  }
  console.log(acumulador)
}

conta('+', 1, 20, 30, 40, 50)

// Usando rest operator com arrow function
const conta2 = (...args) => {
  console.log(args)
}
conta2('+', 1, 20, 30, 40, 50)