let nomeHeroi = "Felipao"
let nivelHeroi = 6500
let xpHeroi = ""

if (nivelHeroi <= 1000) {
    xpHeroi = "Ferro"
} else if (nivelHeroi > 1000 && nivelHeroi <= 200) {
    xpHeroi = "Bronze"
} else if (nivelHeroi > 2001 && nivelHeroi <= 5000) {
    xpHeroi = "Prata"
} else if (nivelHeroi > 5001 && nivelHeroi <= 7000) {
    xpHeroi = "Ouro"
} else if (nivelHeroi > 7001 && nivelHeroi <= 8000) {
    xpHeroi = "Platina"
} else if (nivelHeroi > 8001 && nivelHeroi <= 9000) {
    xpHeroi = "Ascendente"
} else if (nivelHeroi > 9001 && nivelHeroi <= 10000) {
    xpHeroi = "Imortal"
} else if (nivelHeroi > 10000) {
    xpHeroi = "Radiante"
}

for (let i = 0; i < 5; i++) {
    console.log(`O herói ${nomeHeroi} está no nível ${xpHeroi}.`)
}