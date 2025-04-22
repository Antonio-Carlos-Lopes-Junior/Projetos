// Fetch
// HTTP
// then e o cath

// Então é com uma requisição HTTP que vamos conseguir enviar, receber, deletar, alterar um
// determinado valor 

// Adicionar um novo usuário
// front end --> fetch --> http --> back end --> banco de dados

// verbos HTTP

// GET --> solicita algum dado
// POST --> enviar algum dado
// DELETE --> deletar algum dado
// PATCH --> alterar um dado mais abrangente
// PUT --> alterar algum dado específico

// CRUD --> Create Read Update Delete

// endpoint --> Nada mais é do que uma URL
// O responsável para criar os endpoints, e denominar a responsabilidade de cada endpoint é o back end

// um endpoint para criar um usuário
// um endpoint para deletar um usuário
// um endpoint para altarar dados de um usuário


// API --> Application programing interface --> back end que estamos interajindo
// https://api.coingecko.com/api/v3/exchange_rates

// HTTP -> 4 tipos de parâmetros em uma requisição HTTP

// Route Params
// exemplo: https://api.coingecko.com/api/v3/exchange_rates/123664565
// onde o /123664565 é o ID de um usuário
// No back end estaria assim: https://api.coingecko.com/api/v3/exchange_rates/:ID

// Query Params
// exemplo: https://api.coingecko.com/api/v3/exchange_rates?name=Paulo

// Body Params
// como estamos fazendo uma requisição a um cliente externo, precisamos colocar mode: 'cors'
// por padrão o method é GET, não há necessidade de declarar, os outro precisa
const endpoint = 'https://api.coingecko.com/api/v3/exchange_rates'

fetch(endpoint, {mode: 'cors'}).then((data) => {
    data.json().then((json) => {
        console.log(json)
    })
})

// usando o method: 'POST'
// o código ficará commentdo para não dar erro, pois o endpoint é só para obter informação
// fetch(endpoint, 
//     {
//         mode:'cors', 
//         method:'POST',
//         body: {
//             name: 'Paulo',
//             age: 22
//         }
//     }).then((data) => {
//     console.log(data)
// })

// Header Params
// podemos passar tipo/formato de dados que está sendo enviado (JSON por exemplo), 
// um token de autenticação, etc.
// será passado mais detalhe para frente
// fetch(endpoint, 
//     {
//         mode:'cors', 
//         method:'POST',
//         headers: {
           
//         }
//     }).then((data) => {
//     console.log(data)
// })

// Status
// Sucesso: 200 - 299
// Redirecionamento: 300 - 399
// Erro do cliente: 400 - 499
// Erro do servidor: 500 - 599
// Para saber os tipos de Status acessar o site:
// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/

// Json -> Javascript Object Notation
// é um formato de organização de dados
// parece um objeto de javascript o que diferencia é sua chave ser em formato de string
// também é comum ser usado como extensão de arquivo, porém normalmente de configuração

const obj = {
    nome: 'Paulo',
    age: 22
}

const json = '{"nome": "Paulo", "age": 22}'

console.log(JSON.parse(json)) // transforma JSON em Objeto
console.log(JSON.stringify(obj)) // transforma Objeto em JSON

// site com API gratuito
// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/