let valorA = prompt ('Introduce un numero');

let result = compare (valorA);


function compare (valorA) {
    if (valorA > 0) {
        return 'positivo';
    } 
    else if (valorA == 0) {
        return 'igual a 0';
        } 
        else {
        return 'negativo';
        }
    }

alert (`El resultado es ${result}`);
