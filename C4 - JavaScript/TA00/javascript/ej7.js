let valorA = prompt ('Introduce tu edad');

let result = edad (valorA);
alert (`La persona es ${result}`);

function edad (valorA) {
    if (valorA >= 18) {
        return 'mayor de edad';
    }
    else {
        return 'menor de edad'
    }
}
