const factoryFunction = (nome) => {
    return {
        logou: () => console.log(`O usuário ${nome} logou`),
        deslogou: () => console.log(`O usuário ${nome} deslogou`),
    }
}

factoryFunction('Paulo').logou();
factoryFunction('Paulo').deslogou();