//estrutura de repetição ou loops

for (let numero = 0; numero < 10; numero++) {
    console.log(`Repetição de numero ${numero}`);
    if (numero == 5) {
        break
    }
}

const objeto = {
    nome: 'Paulo',
    idade: 22,
    cidade: 'Fortaleza'
}

for (const chave in objeto) {
    console.log(`${chave}: ${objeto[chave]}`);
}

const array = ['hb20', 'hilux', 'corolla'];

for (const item of array) {
    console.log(item);
}

let numero = 0

while (numero < 5) {
    console.log(`Repetição de numero ${numero}`);
    numero++
}