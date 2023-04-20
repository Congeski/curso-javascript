/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Só retorna falso quando todos é false
! -> NOT -> Não
*/
const expressaoAnd = true && true && true && false;
const expressaoOr = false || false || true || false;
console.log(expressaoAnd);
console.log(expressaoOr);

//exemplo
const usuario = 'Vinicius';
const senha = '123456';

//                       True                    False
const vaiLogar = usuario === 'Vinicius' && senha === '12345';
console.log(vaiLogar);

console.log(!true);