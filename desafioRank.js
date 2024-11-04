let playerName = "paulo"
let playerWins = calRank(32, 2)
let ranking = ""

if (playerWins <= 10){
        ranking = "cobre"
    }
    if (playerWins > 10 && playerWins <=20){
        ranking = "bronze"
    }
    if (playerWins > 20 && playerWins <= 50){
        ranking = "prata"
    }
    if (playerWins > 50 && playerWins <= 80){
        ranking = "ouro"
    }
    if (playerWins > 80 && playerWins <= 90){
        ranking = "diamante"
    }
    if (playerWins >90 && playerWins <= 100){
        ranking = "lendário"
    }
    if (playerWins > 100){
        ranking = "imortal"
    }
    console.log(playerName + " possui " + playerWins + " vitórias, e está no rank " + ranking)

function calRank(win, loss){
    let saldoWins = win - loss;
        return saldoWins
}
