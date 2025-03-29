const Paulo = {
    nomeCompleto: 'Paulo Victor Maia Borges',
    idade: 22,
    showMessage: function(){
        alert('Mensagem')
    },
    estado: 'Ceará'
}

console.log(Paulo)
console.log(`O nome completo é ${Paulo.nomeCompleto}`);
console.log(`Tem ${Paulo.idade} anos`);
console.log(`Mora no ${Paulo.estado}`);
console.log(Paulo.showMessage())