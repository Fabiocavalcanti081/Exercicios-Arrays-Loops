const numeros = [8, 11, 4, 1];
let maiorNumero = 0;
let menorNumero = 0;
let indice = 0;

for (const numero of numeros) {
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
}
for (const numero of numeros) {
    if (numero <= maiorNumero) {
        menorNumero = numero;
        if (numero < menorNumero) {
            menorNumero = numero;
        }
    }
}

console.log(maiorNumero - menorNumero);