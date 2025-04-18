const estoque1 = ['', 'arroz', 'feijão', 'arroz', 'macarrão', 'batata', '']
const estoque2 = ['arroz', 'feijão', 'arroz', 'macarrão', 'batata']
const estoque3 = ['', '', '', '', '']
const precos = [3.50, 5, 3.50, 2, 2.50, 0]
const pessoas = [{nome: 'Paulo', idade: 22}, {nome: 'Andressa', idade: 25}]

console.log('Usando forEach():')
estoque1.forEach((valor, index, array) => {
    array.push(valor)
    console.log(valor, index, array)
    array.pop()
})

pessoas.forEach((valor, index, array) => {
    console.log(valor, index, array)
    console.log(valor.nome, valor.idade)
})

console.log('Usando .map():')
const retornoMap = estoque1.map((valor, index, array) => {
    return `${valor} ${index}`
})
console.log(retornoMap)

console.log('Usando .reduce():')
const total = precos.reduce((acc, valor, index, array) => {
    return acc + valor
}, 0)
console.log(total)

// retorna o 1º valor true do array e não o 1º valor do array
console.log('Usando .find()')
const retornoFind = estoque1.find((valor, index, array) => valor)
console.log(retornoFind)

console.log('Usando .findIndex()')
const retornoFindIndex = estoque1.findIndex((valor, index, array) => valor)
console.log(retornoFindIndex)

// se pelo menos um item do array for true retorna true
console.log('Usando .some()')
const retornoSome1 = estoque1.some((valor, index, array) => valor)
const retornoSome2 = estoque2.some((valor, index, array) => valor)
const retornoSome3 = estoque3.some((valor, index, array) => valor)
console.log(retornoSome1)
console.log(retornoSome2)
console.log(retornoSome3)

// se somente todos os item for true retorna true
console.log('Usando .every()')
const retornoEvery1 = estoque1.every((valor, index, array) => valor)
const retornoEvery2 = estoque2.every((valor, index, array) => valor)
const retornoEvery3 = estoque3.every((valor, index, array) => valor)
console.log(retornoEvery1)
console.log(retornoEvery2)
console.log(retornoEvery3)

console.log('Usando .filter()')
const retornoFilter1 = estoque1.filter((valor, index, array) => valor === 'arroz')
const retornoFilter2 = estoque2.filter((valor, index, array) => valor === 'arroz')
console.log(retornoFilter1)
console.log(retornoFilter2)