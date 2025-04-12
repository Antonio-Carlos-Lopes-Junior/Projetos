const pessoa = {
    nome: 'Paulo',
    idade: 22,
    endereco: {
        cidade: 'Fortaleza',
        estado: 'CE'
    },
    altura: 1.80
}

// Um modo de desestruturar o objeto
// const {nome, idade, endereco} = pessoa;
// const {cidade, estado} = endereco

// Outro modo de desestruturar objeto
const {nome, idade, endereco, endereco:{cidade, estado}} = pessoa

// Mais um modo de desestruturar objeto
// const {nome, idade, endereco} = pessoa;
// const {cidade, estado} = pessoa.endereco;

// Criar um valor padrão de uma propriedade do objeto caso não exita essa propriedade
const {altura = 1.72} = pessoa;

console.log(pessoa)
console.log(nome)
console.log(idade)
console.log(endereco)
console.log(cidade)
console.log(estado)
console.log(altura)

const carros = ['hb20', 'hillux', 'corola'];

// Num array a desustruturação e de acordo a posição do item
const [carro1, carro2] = carros;

// Como fazer para obter somente o terceiro item, colocando vírgula para os itens anteriores
const [, , carro3] = carros;

console.log(carro1)
console.log(carro2)
console.log(carro3)