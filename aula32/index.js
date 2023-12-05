const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Congeski',
    idade: 25,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome = '', sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);

const { endereco: { rua, numero }, endereco} = pessoa;
console.log(rua, numero, endereco);