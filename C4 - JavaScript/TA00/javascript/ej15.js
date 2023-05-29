let valorA = prompt ('Escribe un año')

if ((valorA%4 == 0 && valorA%100 != 0)|| valorA%400 == 0) {
    alert(valorA + ' es un año bisiesto')
} else {
    alert(valorA + ' no es un año bisiesto')
}