function minhaFuncao(mesage, username) {
    console.log(mesage, username);
}

minhaFuncao('Primeira mensagem, Paulo');
minhaFuncao('Segunda mensagem, Andressa');
minhaFuncao('Terceira mensagem, Gabriel');

function novaFuncao(username) {
    return `${username} é um programador.`
}

console.log(novaFuncao('Paulo'))