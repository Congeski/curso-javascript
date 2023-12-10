// const frutas = ['Pera', 'Maçã', 'Uva'];

// Lê os indices do array, mais interessante em objetos.
// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Nunes',
    idade: 25
};

// Lê as chaves do objeto;
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// Maneiras de acessar a propriedade do objeto.
console.log(pessoa.nome);
console.log(pessoa['nome']);