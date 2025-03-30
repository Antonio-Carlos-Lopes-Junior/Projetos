const idade = 24;
const tipo = 'admin';

if (idade > 29 && tipo == 'admin') {
    console.log('Ele tem mais de 29 anos e é admin.');
}

if (idade > 29 || tipo == 'admin') {
    console.log('Ele tem mais de 29 anos e/ou é admin.');
}

if (!(idade > 29) && tipo == 'admin') {
    console.log('Ele tem menos de 30 anos e é admin.');
}

if (idade > 29) {
    console.log('Ele tem mais de 29 anos');
} else if (idade > 25) {
    console.log('Ele tem mais de 25 anos');
} else {
    console.log('Ele não tem a idade mínima');
}

switch (idade) {
    case 30:
        console.log('Ele tem 30 anos');
        break;
    case 29:
        console.log('Ele tem 29 anos');

    default:
        console.log('Ele não tem nenhuma das idade anteriores');
        break;
}