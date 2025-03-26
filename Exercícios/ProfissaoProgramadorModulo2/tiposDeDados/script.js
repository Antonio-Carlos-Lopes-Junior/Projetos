const string = 'Profissão Programador'

// isso é um template string. Usamos a crase.
console.log(`Estou estudando o curso ${string}`);

const numero = 2e10;

// o typeof informa o tipo da variável.
console.log(typeof numero, numero);

const valorDaCompra = null;
console.log(typeof valorDaCompra);

// tipo undefined
let valor;
console.log(typeof valor);

const boolean = false;

const faltosos = NaN; // Not a number, pode ser considerado falso.

// valores que representam false:
// false
// 0
// NaN
// null
// undefined
// '' sem nada entre as aspas

// valores que representam true:
// true
// ' ' com qualquer coisa entra as aspas podendo ser até 1 espaço
// qualquer número diferente de 0