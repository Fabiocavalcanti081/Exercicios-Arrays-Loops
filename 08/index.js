const numeros = [3, 4, 1, 8, 11, 7, 5];
let maiorNumero = 0;

for (const numero of numeros) {
    if (maiorNumero < numero) {
        maiorNumero = numero;
    }
}

console.log(maiorNumero);