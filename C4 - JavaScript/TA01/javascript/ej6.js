let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayOdd = arrayNumbers.filter (element => element%2 == 0)
let arrayEven = arrayNumbers.filter (element => element%2 ==! 0)

console.log(arrayEven.concat(arrayOdd))

