// estructuras de datos que agrupan tipos de datos dentro de una coleccion y luego se pueden realizar operaciones sobre esa coleccion

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
//dentro de los corchetes vamos a poner cada uno de las variables que componen nuestro array, pueden ser numeros,texto, objetos, funciones.. 
var personas = [luz, kichi, chumel, alan, paula]
// como acceder a los atributos de las variables:
//personas [0] 
//personas[0].altura
//otra forma de hacer lo mismo que arriba: personas [0]['altura']

for (let i = 0; i < personas.length; i++) {
    var persona = personas [i]
    console.log(`${persona.nombre} mide {persona.altura} mts`)
    
}

// los arreglos tiene la propiedad length que nos indicara cuantos elementos tiene luego va guardando cada uno de las personas con el indice que pusimos en el for
