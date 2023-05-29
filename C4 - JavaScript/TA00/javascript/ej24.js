let number = prompt ('introduce un número');
let result = 0;

while (number>0) {
    let digit = number%10;
    result += digit;
    number = Math.floor(number/10)
}

console.log ('La suma de los dígitos es: '+result);