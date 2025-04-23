localStorage.setItem('nome', 'Paulo')
const nome = localStorage.getItem('nome')
console.log(`localStorage: ${nome}`)

sessionStorage.setItem('idade', 22)
const idade = sessionStorage.getItem('idade')
console.log(`sessionStorage: ${idade}`)

const chave = 'preferencia='
const cookieSet = document.cookie = 'preferencia = carro'
const cookieReplaceAll = cookieSet.replaceAll(' ', '')
const chaveTamanho = chave.length
const cookieReplaceAllTamanho = cookieReplaceAll.length
const valor = cookieReplaceAll.substring(chaveTamanho, cookieReplaceAllTamanho)
console.log(`cookie: ${valor}`)