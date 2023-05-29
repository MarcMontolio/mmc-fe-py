let valorA = prompt ('Introduce un número')

let result = compare (valorA);
alert ('El numéro ' +result);

function compare (valorA) {
    if (valorA % 3 == 0) {
        return 'sí es divisible entre 3'
    }
    else {
        return 'no es divisible entre 3'
    }
}