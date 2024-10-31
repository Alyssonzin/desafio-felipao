const calcularVitorias = (vitorias, derrotas) => {
    return vitorias - derrotas;
}

const calcularRanking = (saldoVitorias) => {
    switch (true) {
        case saldoVitorias <= 10:
            return 'Ferro';
        case saldoVitorias <= 20:
            return 'Bronze';
        case saldoVitorias <= 50:
            return 'Prata';
        case saldoVitorias <= 80:
            return 'Ouro';
        case saldoVitorias <= 90:
            return 'Diamante';
        case saldoVitorias <= 100:
            return 'Lendario';
        default:
            return 'Imortal';
    }
}

// Altere o valor para testar
const partidasGanhas = 100; 
const partidasPerdidas = 10; 


const resultado = calcularVitorias(partidasGanhas, partidasPerdidas);
const ranking = calcularRanking(resultado);

console.log(`O jogador tem um saldo de ${resultado} vitórias e está no ranking ${ranking}`);