const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para próxima iteração
// Break sai do laço

for (let numero of numeros) {
  if (numero === 2 || numero === 5) {
    console.log(`Pulei o numero: ${numero}`);
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log(`${numero} encontrado, saindo....`);
    break;
  }
}
