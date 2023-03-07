/*
Vinicius Felipe Congeski tem 25 anos, pesa 100 kg
tem 1.84 de altura e seu IMC é de 29.536862003780715
Vinicius Felipe nasceu em 1998;
*/
const nome = 'Vinicius Felipe';
const sobrenome = 'Congeski';
const idade = '25';
const peso = 100;
const alturaEmMetros = 1.84;
let indiceMassaCorporal; // peso / (altura * altura);
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2023 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);