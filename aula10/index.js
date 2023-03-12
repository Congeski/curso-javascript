/**
 * Aritméticos
 * + Adição / Concatenação (- / *)
 * ** Potenciação
 * % Resto da divisão 
*/
const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log(num1 % num2);
console.log((num1 + num2) * num3);

/*
    Incremento = ++
    Decremento = --
*/
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);

contador--;
console.log(contador);

/*
Incremento mais de 1 em 1
*/
const passo = 2;
let contador2 = 0;

contador2 += passo; // contador2 = contador2 + 2;

// NaN - Not a Number
const num4 = 10;
const num5 = 'Vinicius';
console.log(num4 * num5);

// Converter strings em numeros - parseInt(Inteiros), parseFloat(Flutuantes, Real), melhor opção: Number(Faz os dois);
const num6 = 10;
const num7 = Number('5.3');
console.log(num6 + num7);