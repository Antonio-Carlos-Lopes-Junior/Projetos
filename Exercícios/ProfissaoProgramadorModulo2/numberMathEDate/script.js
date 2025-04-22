const numero1 = 10.8
const numero2 = 10.5
const numero3 = 10.3
const numero = 10
const string = '20.8'

// Number
// retorna um número com casas decimais a partir de uma string
console.log(Number.parseFloat(string))

// retorna um número inteiro decimal a partir a partir de uma string
// podendo passar 2 parâmetros, onde o 2º é a base de origem da string
console.log(Number.parseInt(string))

// arredonda um número com base nas casas decimais, retorna uma string e posso passar como parâmetro
// quantas casas decimais retornar
console.log(numero1.toFixed())
console.log(numero2.toFixed())
console.log(numero3.toFixed())

// retorna uma string a partir de um número
// podemos passar como parâmetro a base do número de destino
console.log(numero.toString())

// Math

// retorna o valor absoluto
console.log(Math.abs(5))
console.log(Math.abs(-5))

// arredonda o valor para cima
console.log(Math.ceil(numero1))
console.log(Math.ceil(numero2))
console.log(Math.ceil(numero3))

// arredonda o valor para baixo
console.log(Math.floor(numero1))
console.log(Math.floor(numero2))
console.log(Math.floor(numero3))

// arredonda o valor para o número mais próximo
console.log(Math.round(numero1))
console.log(Math.round(numero2))
console.log(Math.round(numero3))

// retorna um numero aleatório entre 0 e 1
console.log(Math.random())
//  se quiser um numero entre um 0 e um valor x é só multiplicar por esse valor
console.log(Math.random() * 100)
// se quiser só número inteiro usar o método .parseInt ou o .toFixed
console.log(Number.parseInt(Math.random() * 100))
console.log((Math.random() * 100).toFixed())

// retorna o maior número dentre os listados
console.log(Math.max(2, 12, 7, 3))

// retorna o menor número dentre os listados
console.log(Math.min(2, 12, 7, 3))

// Date
const hoje = new Date()

// retorna o dia atual
const diaIndex = hoje.getDate()
console.log(diaIndex)

// retorna o mês atual em forma de número onde 0 é Jeneiro e assim por diante
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const mesIndex = hoje.getMonth()
console.log(meses[mesIndex])

// retorna o ano atual
const anoIndex = hoje.getFullYear()
console.log(anoIndex)

// retorna a hora atual
const horaIndex = hoje.getHours()
console.log(horaIndex)

const minutoIndex = hoje.getMinutes()
// retorna o minuto atual
console.log(minutoIndex)

// retorna o dia da semana atual em forma de número onde 0 é Domingo e assim por diante
const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const semanaIndex = hoje.getDay()
console.log(diasSemana[semanaIndex])

// formatação para visualização no console
console.log(`${diaIndex}/${mesIndex+1}/${anoIndex} (${diasSemana[semanaIndex]})`)
console.log(`${horaIndex}:${minutoIndex}`)