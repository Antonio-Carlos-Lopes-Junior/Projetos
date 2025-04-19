// As funçoes também são criadas com um  construtor, o function, por isso ele
// herda seus métodos e propriedades

function retornaNome(nome){
    console.log(nome, this.profissao, this.cidade)
}

// propriedades
console.log(retornaNome.length) // retorna a quantidade de argumentos da funcção
console.log(retornaNome.name) //retorna o nome da funcão


// metodos
// executa a função podendo passar um novo valor para this
retornaNome.call({profissao: 'programador', cidade: 'Fortaleza'}, 'Paulo', 22)

// executa a função podendo passar um novo valor para this, agora com os argumento passados em um array
retornaNome.apply({profissao: 'programador', cidade: 'Fortaleza'}, ['Paulo', 22])

// retorna a função podendo passar um novo valor para this
const novaFuncao = retornaNome.bind({profissao: 'programador', cidade: 'Fortaleza'}, 'Paulo', 22)

novaFuncao()