const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesA = [];
let verificador = String;

for (const letra of nomes) {
    verificador = letra;
    if (verificador[0] === "A" || verificador[0] === "a") {
        nomesA.push(letra)
    }
}

console.log(nomesA);