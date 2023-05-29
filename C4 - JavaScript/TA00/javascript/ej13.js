let valorA = prompt ('Introduce el primer número')
let valorB = prompt ('Introduce el segundo número')

let result = compare (valorA)
alert ('Los números son ' +result)

function compare (valorA) {
    if (valorA == valorB) {
        return 'iguales'
    }
    else {
        return 'diferentes'
    }
}