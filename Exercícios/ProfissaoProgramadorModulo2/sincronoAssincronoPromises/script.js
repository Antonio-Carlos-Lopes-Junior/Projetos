// Sincrono -> processamento que acontece em sequência, ou seja, ordenado
// Assincrono -> os processos podem acontecer ao mesmo tempo

// Promises - é um processo assincono
const minhaPromise1 = new Promise((resolve, reject) => {
    const condicao = false
    if(condicao){
        resolve('Resolvido Promisse1')
    } else {
        reject(Error('Um erro aconteceu na nossa Promise1'))
    }
})

// then e catch
minhaPromise1.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
})

// novo Promise
const minhaPromise2 = new Promise((resolve, reject) => {
    const condicao = true
    if(condicao){
        resolve('Resolvido Promisse2')
    } else {
        reject(Error('Um erro aconteceu na nossa Promise2'))
    }
})

// then e catch
minhaPromise2.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
})