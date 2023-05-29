let valorA = prompt ('Introduce un número')

while (valorA > 0) {
    if (valorA % 2 == 0) {
        console.log (valorA)
        valorA = valorA -2
    }
    else {
        valorA = valorA - 1
        console.log (valorA)
        valorA = valorA -2
    }
}