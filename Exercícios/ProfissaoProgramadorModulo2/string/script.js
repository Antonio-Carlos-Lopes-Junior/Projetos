const string1 = 'Linguagem Javascript'
const string2 = 'de programação'

// length
// retorna o tamanho
console.log(string1.length)

// charAt
// retorna o caracter do índice informado
console.log(string1.charAt(1))

// toLowerCase
console.log(string1.toLowerCase())

// toUpperCase
console.log(string2.toUpperCase())

// endsWith
// retorna um valor booleano sendo case sensitive
console.log(string1.endsWith('ript'))

// starsWith
// igual a endsWith
console.log(string1.startsWith('Lin'))

// includes
// igual a endsWith
console.log(string1.includes('em J'))

// concat
console.log(string1.concat(` ${string2}`))

// substring
console.log(string1.substring(1, 4))

// slice
// retorna os primeiros caracteres
console.log(string1.slice(1, 4))
// retornando os últimos caracteres
console.log(string1.slice(-3))
console.log(string1.slice(-4, -1))
// exclui do retorno o número de caracter informado
console.log(string1.slice(4))

// padStart
// completa com o caracter informado no começo até ter o número informado
console.log(string1.padStart(25, '='))

// padEnd
// completa com o caracter informado no final até ter o número informado
console.log(string1.padEnd(25, '='))

// split
// vai construir um array cortando a string de acordo ao padrão informado
console.log(string1.split(' '))

// replace
// substitui o(s) primeiro(s) caracter(es) encontrado pelo(s) outro(s) caracter(es)
console.log(string1.replace('in', 'om'))

// replaceAll
// substitui todo(s) o(s) caracter(es) encontrado pelo(s) outro(s) caracter(es)
console.log(string1.replaceAll('a', '@'))

const nome = 'Antonio Carlos'
const sobreNome = 'Lopes Junior'

function completarComCaracter(string){
    const stringConcat = ` ${string} `
    const tamanhoString = stringConcat.length
    const tamanhoTela = 40
    if (tamanhoString < tamanhoTela) {
        const media = (tamanhoTela - tamanhoString) / 2
        const padStart = tamanhoString + media
        const stringComPadStart = stringConcat.padStart(padStart, '=')
        const padEnd = padStart + media
        const stringComPadEnd = stringComPadStart.padEnd(padEnd, '=')
        console.log(stringComPadEnd)
    }
}

completarComCaracter(string1)
completarComCaracter(string2)
completarComCaracter(nome)
completarComCaracter(sobreNome)