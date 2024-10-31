class Hero {
    constructor(nome, xp) {
        this.nome = nome;
        this.xp = xp;

        if (xp < 0) {
            console.log("valor de XP invalido. Insira um valor maior que zero.");
        }
        else {
            if (xp <= 1000) {
                this.ranking = "Ferro";
            }
            else if (xp <= 2000) {
                this.ranking = "Bronze";
            }
            else if (xp <= 5000) {
                this.ranking = "Prata";
            }
            else if (xp <= 7000) {
                this.ranking = "Ouro";
            }
            else if (xp <= 8000) {
                this.ranking = "Platina";
            }
            else if (xp <= 9000) {
                this.ranking = "Ascendente";
            }
            else if (xp <= 10000) {
                this.ranking = "Imortal";
            }
            else {
                this.ranking = "Radiante";
            }
        }
    }
}

module.exports = Hero;