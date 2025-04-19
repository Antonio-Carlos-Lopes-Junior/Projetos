const Pessoa = {
    nomePessoa: 'Paulo',
    idade: 22
}

const Profissao = {
    nomeProfissao: 'programador',
    stack: 'javascript'
}

const Dados = {
    cidade: 'Fortaleza',
    estado: 'CE',
    ...Pessoa // usado Spread para adcionar um objeto em outro 
}

// adiciona um objeto em outro objeto
console.log('Usando .assign()')
console.log(Object.assign(Dados, Profissao))

// retorna as chaves do objeto
console.log('Usando .keys()')
console.log(Object.keys(Pessoa))
console.log(Object.keys(Profissao))
console.log(Object.keys(Dados))

// retorna os valores do objeto
console.log('Usando .values()')
console.log(Object.values(Pessoa))
console.log(Object.values(Profissao))
console.log(Object.values(Dados))