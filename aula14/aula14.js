let num1 = 9.54578;
let num2 = Math.floor(num1); //Irá arredondar para baixo
num2 = Math.ceil(num1); //Irá arredondar para numero inteiro pra cima
num2 = Math.round(num1); //Irá arredondar para cima ou para baixo, depende dos numeros após o ponto

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Irá mostrar o número maior da sequencia
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Irá mostrar o número menor da sequencia

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //gera um numero aleatorio entre 10 e 5, e virá arredondado
console.log(aleatorio); 

// potenciação
console.log(Math.pow(2, 10)); 
console.log(2 ** 10);

// Numero PI
console.log(Math.PI);

// Raiz Quadrada
let raiz = 9;
console.log(raiz ** (1/2));
console.log(raiz ** 0.5); // Pode utilizar essa anotação tbm

// Falta grave - dividir numero por 0
console.log(100 / 0); // retorna infinity e é True