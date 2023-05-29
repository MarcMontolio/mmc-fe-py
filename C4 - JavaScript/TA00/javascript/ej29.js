let word = prompt('Ingrese una palabra')
let vocalCounter = ''

for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLowerCase()
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        vocalCounter++
    }
}

console.log('La palabra ', +word, ' tiene', +vocalCounter, ' vocales')