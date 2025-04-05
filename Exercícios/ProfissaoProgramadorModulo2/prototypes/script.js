function Game() {
    this.pulou = () => alert('O personagem pulou');
    this.deitou = () => alert('O personegem deitou');
}

Game.prototype.correu = () => alert('O personagem correu');

const novoJogo = new Game();

console.log(novoJogo);