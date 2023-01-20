const original = [1, 4, 12, 21, 53, 88, 112];
const pares = [];

for (const numeros of original) {
    if (numeros % 2 == 0) {
        pares.push(numeros);
    }

}
console.log(pares);