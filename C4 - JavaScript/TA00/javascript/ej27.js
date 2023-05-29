let number = prompt ('Ingrese un número');
let i = 0
let result = 0

while (i <= number) {
    if (i%2 != 0){
        result += i;
    }
    i++;
}

console.log(result)