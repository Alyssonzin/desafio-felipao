class Heroi {
    constructor(nome, tipo, idade) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

        switch (tipo) {
            case "guerreiro":
                this.habilidade = "espada";
                break;
            case "mago":
                this.habilidade = "magia";
                break;
            case "monge":
                this.habilidade = "artes marciais";
                break;
            case "ninja":
                this.habilidade = "shuriken";
                break;
            default:
                this.habilidade = "desconhecida";
                break;
        }
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.habilidade}`);
    }
}

module.exports = Heroi;