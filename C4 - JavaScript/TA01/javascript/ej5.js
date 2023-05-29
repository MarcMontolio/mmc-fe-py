let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];
let newArray = [];

for (let index = 0; index < arrayUno.length; index++) {
    newArray.push(arrayUno[index]);
    newArray.push (arrayDos[index]);
}

arrayUno = [];
arrayDos = [];

console.log (newArray);
console.log (arrayUno);
console.log (arrayDos);