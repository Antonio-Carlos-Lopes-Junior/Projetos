function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa('Paulo', 22);
const pessoa2 = new Pessoa('João', 30);

console.log(`O ${pessoa1.nome} tem ${pessoa1.idade} anos.`);
console.log(`O ${pessoa2.nome} tem ${pessoa2.idade} anos.`);