let continuar = true;

while (continuar) {
    let nomeHeroi = prompt("Digite o nome do herói:");
    let xpHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));
    let nivelHeroi;

    if (xpHeroi < 1000) {
        nivelHeroi = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivelHeroi = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivelHeroi = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivelHeroi = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }

    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);

    // Pergunta se deseja continuar
    let resposta = prompt("Deseja continuar? (Digite 's' para sim ou qualquer outra tecla para sair):");
    continuar = resposta.toLowerCase() === 's';
}

console.log("Até mais! Obrigado por usar o Classificador de Nível de Herói.");

