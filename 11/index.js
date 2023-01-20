const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];
let filtrando = [];

for (const numero of original) {
    if (numero >= 10 && numero <= 20 || numero > 100) {
        filtrando.push(numero);
    }
}

console.log(filtrando);