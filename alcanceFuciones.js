//la variable n tiene un alcance local, solo esta definida dentro de la funciion
function imprimirNombresEnMayusculas(n) {
    n = n.toUpperCase()
    console.log(n)
}

imprimirNombresEnMayusculas()
//si ponemos de parametro nombre solo afecta el valor local, no el global