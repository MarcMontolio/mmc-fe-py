let valorA = prompt ('Introduce el primer valor');
let valorB = prompt ('Introduce el segundo valor');
let valorC = prompt ('Introduce el tercer valor');
let valorAbs = '0'

let result = compare (valorAbs);
alert ('El numero mayor es ' +result);

function compare (valorAbs) {
    if (valorA > valorB && valorA > valorC) { 
        return 'A';
    }
    else if (valorB > valorC) {
            return 'B';
        }
        else {
            return 'C';
        }
    };

