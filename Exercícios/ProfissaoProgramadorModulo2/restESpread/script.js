// Rest
// 1º Exemplo usando array
function estados(...estados) {
    // imprimindo todos os parâmetros
    console.log(estados)
    // imprimindo um parâmetro
    console.log(estados[2])
}

estados('CE', 'RJ', 'SP', 'RR', 'SC')

// 2º Exemplo usando array
function estados1(estado1,...estados1) {
    // imprimindo todos os parâmetros
    console.log(estados1)
    // imprimindo um parâmetro
    console.log(estados1[1])
    // imprimindo parâmetro fora do rest
    console.log(estado1)
}

estados1('CE', 'RJ', 'SP', 'RR', 'SC')

// Usando objeto
function pessoa(...pessoa) {
    console.log(pessoa)
}

const Pessoa1 = {
    nome: 'Paulo',
    idade: 22,
    cidade: 'Fortaleza'
}

const {nome, idade, cidade} = Pessoa1

pessoa(nome, idade, cidade)

// Spread
// Usando array
const carrosAltos = ['hilux', 's10', 'pajero', 'ranger']
const carrosBaixos = ['hb20', 'gol', 'celta', 'corsa']

// pode adicionar intens, como feito com logan
const carros = [...carrosAltos, ...carrosBaixos, 'logan']
console.log(carros)
console.log(carros[5])

// Usando objeto
const Pessoa2 = {
    nome: 'Paulo',
    idade: 22,
    profissao: 'programador'
}

const Endereco = {
    cidade: 'Fortaleza',
    estado: 'CE'
}

// Pode adicionar parâmetros, como feito no altura
const Dados = {
    ...Pessoa2,
    ...Endereco,
    altura: 1.72
}

console.log(Dados)
console.log(Dados.profissao)