class Mamifero {
    constructor(patas){
        this.especie = 'Mamiferos'
        this.patas = patas
    }

    dormir(){
        alert('esse mamífero dormiu')
    }

    // o static faz o método só funcionar na superclasse
    static som(){
        alert('esse mamífero emitiu som')
    }
}

class Pessoa extends Mamifero {
    constructor(name, idade){
        super(2)
        this.name = name
        this.idade = idade
        this.cidade = 'Fortaleza'
    }

    dormir(){
        super.dormir()
    }

    andou(){
        alert(`${this.name} andou`)
    }
}