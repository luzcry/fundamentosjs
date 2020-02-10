//sacar la cuenta de cuantos libros hay
var luz = {
    nombre: 'Maria',
    apellido: 'Rodríguez',
    altura: 1.60,
    cantidadDeLibros: 84
}

var kichi = {
    nombre: 'kichichao',
    apellido: 'bermúdez',
    altura: 0.40,
    cantidadDeLibros: 120
}

var chumel = {
    nombre: 'Chumel',
    apellido: 'Torres',
    altura: 1.70,
    cantidadDeLibros: 65
}

var alan = {
    nombre: 'Alan',
    apellido: 'Peréz',
    altura: 1.86,
    cantidadDeLibros: 86

}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 130
}

var personas = [luz, paula, alan, kichi, chumel]

const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}
//reduce recibe dos parametros, reducer que establecera arriba y un contador en 0
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
