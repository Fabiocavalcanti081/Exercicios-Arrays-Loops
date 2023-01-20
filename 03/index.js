const numeros = [54, 22, 14, 10, 284];
let naoEncontrado = false;

for (const indice of numeros) {
    if (indice === 10) {
        console.log(numeros.indexOf(indice));
        naoEncontrado = true;
    }
}
if (!naoEncontrado) {
    console.log(numeros.indexOf());
}