let valorA = prompt ('Introduce tu nota');

let result = compare(valorA);
alert ('El usuaria ha ' +result)

function compare (valorA) {
    if (valorA >= 70) {
        return 'aprovado'
    }
    else {
        return 'suspendido'
    }
}