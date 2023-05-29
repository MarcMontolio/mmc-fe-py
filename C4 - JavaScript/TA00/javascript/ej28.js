let number = prompt ('Ingrese un número');

if (number == 1){
    console.log('El número debe ser mayor que 1')
} else { 
    for (let i = 2; i <= number; i++) {
        if (number%2 == 0) {
        console.log (number + ' no es un numero primo')
        } else {
        console.log (number + ' es un numero primo')
        }
    }
}