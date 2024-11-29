// Aula - Closures - quando declara função dentro de outra

//Global
function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Vinicius')
const funcao2 = retornaFuncao('Congeski')

console.log(funcao())
console.log(funcao2())