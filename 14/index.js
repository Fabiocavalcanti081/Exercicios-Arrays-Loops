const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];
let i = 0;

for (const numero of arrayA) {
    if (numero < arrayB[i]) {
        console.log(numero);
        i++
    } else if (numero > arrayB[i]) {
        console.log(arrayB[i]);
        i++
    }
}