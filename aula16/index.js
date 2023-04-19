// Função básica
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Vinicius');
console.log(variavel)

// X E Y assumem valor 1 caso não for passado valores;
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 5));

// função anonima
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// Aero function
// const raizQuadrada = n => n ** 0.5;
const raizQuadrada = (n) => {
    return n ** 0.5;
};

console.log(raizQuadrada(10));