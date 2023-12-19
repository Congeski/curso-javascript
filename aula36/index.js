//For específico para objetos iteráveis (strings, array, que possuem indices)
// const nome = 'Vinicius Congeski';
const nome = ['Vinicius', 'Joao', 'Juliana', 'Vitor'];

// Palavra OF vem o valor, e não o indice.
for (let valor of nome) {
    console.log(valor);
}

// For Clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)