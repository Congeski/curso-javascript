// Aula - Closures - Habilidade que a função tem de acessar seu escopo léxico 

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