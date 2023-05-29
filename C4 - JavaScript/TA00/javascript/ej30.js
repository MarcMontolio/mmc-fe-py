let numero = parseInt(prompt("Ingrese un número:"));
let sumaDivisores = 0
let divisor = 0

while (divisor < numero) {
    if (numero % divisor === 0) {
        sumaDivisores += divisor;
    }
    divisor++;
}

if (sumaDivisores === numero) {
    console.log(numero, "es un número perfecto.");
} else {
    console.log(numero, "no es un número perfecto.");
}

