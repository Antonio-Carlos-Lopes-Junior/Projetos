// Uma variável criada fora de uma função ou do bloco pode ser acessada dentro
// Uma variável criada dentro de uma função ou do bloco não pode ser acessada fora
// Para criar uma variável use sempre const e let

const valor1 = 'teste1'

function teste1(){
    console.log(valor1)
}

teste1()

function teste2(){
    // isso é um escopo de função
    const valor2 = 'teste2'
    console.log(valor2)
}
// dará erro informando que variável não está declarada
// console.log(valor2)

teste2()

if(1 > 2){
    // isso é um escopo do bloco do if
}

for(// isso é um escopo de bloco de loop
    let i = 0; i < 2; i++){
    
}