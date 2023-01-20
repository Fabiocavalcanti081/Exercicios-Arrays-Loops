const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];
let n = filaDeDentro.length;

while (n < 5) {
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift();
    n++;
    if (filaDeFora.length === 0) {
        break;
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);