const array = ['gol', 'hb20', 'hillux', 'gol', 'gol']
const array2 = ['toyota', 'fiat', 'ford', 'gm', 'vw']
const array3 = [1, 4, 2, 7, 3]

// length
console.log(array.length)

// unshift
// adiciona no início e retorna o novo tamanho
console.log(array.unshift('gol quadrado'))
console.log(array)

// shift
// remove o 1º item e retorno o item apagado
console.log(array.shift())
console.log(array)

// push
// adiciona no final e retorna o novo tamanho
console.log(array.push('gol quadrado'))
console.log(array)

// pop
// remove o último item e retorna o item apagado
console.log(array.pop())
console.log(array)

// from
// transforma algo que parece um array em um array de verdade
// precisa de mais coisa que não foi mostrado por isso ficará como comentário
// console.log(Array.from())

// isArray
// verifica se é array retornando um booleano
console.log(Array.isArray(array))
console.log(Array.isArray('array'))

// join
// transforma o array em string, separando por padrão por vírgula
console.log(array.join())
// podemos escolher o separador
console.log(array.join('$'))

// concat
// junta 2 arrays
console.log(array.concat(array2))

// os 3 próximos são tipos diferentes de criar array
// of
console.log(Array.of(1,2,3,4))

// new Array
console.log(new Array(1,2,3,4))

// Array
console.log(Array(1,2,3,4))

// includes
// verifica se item existe no array e retorna um boolen
console.log(array.includes('hb20'))
console.log(array.includes('celta'))

// sort
// ordena o array
console.log(array3.sort())

// reverse
// inverte o array
console.log(array.reverse())

// indexOf
// retorna o 1º índice do valor procurado
console.log(array.indexOf('gol'))
// quando não encontrar o valor retorna -1
console.log(array2.indexOf('gol'))

// lastIndexOf
// retorna o último índice do valor procurado
console.log(array.lastIndexOf('gol'))
// quando não encontrar o valor retorna -1
console.log(array2.lastIndexOf('gol'))