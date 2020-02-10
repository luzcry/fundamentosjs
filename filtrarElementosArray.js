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

const esAlta = ({altura}) => altura > T_ALTURA;
const esBaja = ({altura}) => altura <= T_ALTURA;


var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
console.log(personasAltas);
console.log(personasBajas);

//filter lleva como parametro una condicion 

//map devuelve un nuevo array en el cual va a modificar cada uno de los elemntos del array original

const pasarAlturaaCms = persona => {
    // persona.altura = persona.altura * 100
    persona.altura *= 100
    return persona
}
var personasCms = personas.map(pasarAlturaAcms)