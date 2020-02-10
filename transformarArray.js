var luz = {
    nombre: 'Maria',
    apellido: 'Rodríguez',
    altura: 1.60
}

var kichi = {
    nombre: 'kichichao',
    apellido: 'bermúdez',
    altura: 0.40
}

var chumel = {
    nombre: 'Chumel',
    apellido: 'Torres',
    altura: 1.70
}

var alan = {
    nombre: 'Alan',
    apellido: 'Peréz',
    altura: 1.86
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const pasarAlturaACms = persona => {
    // persona. altura = persona.altura * 100
    //hay que retornar un nuevo objeto con la altura modificada
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

var personas = [luz, paula, alan, kichi, chumel]

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)
//map nos devuelve un nuevo array en el cual va a modificar cada uno de los elementos del array original


