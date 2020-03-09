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

//const esAlta = (persona) => {
//    return persona.altura > 1.8
//}
const T_ALTURA = 1.8;

var personas = [luz, alan, kichi, chumel, paula];

const esAlta = ({
    altura
}) => altura > T_ALTURA;
const esBaja = ({
    altura
}) => altura <= T_ALTURA;


var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
console.log(personasAltas);
console.log(personasBajas);

//filter lleva como parametro una condicion
//la condicion tiene que ser una funcion 

//map devuelve un nuevo array modificando el array original
// persona.altura = persona.altura * 100
const pasarAlturaaCms = persona => ({

    //nuevo objeto que no modifica el original
    //...desglozar un nuevo objeto
    ...persona,
    altura: persona.altura * 100
});
personas[0] === personasCms[0];

let personasCms = personas.map(pasarAlturaAcms)