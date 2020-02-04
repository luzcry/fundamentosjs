const MAYORIA_DE_EDAD = 18

// const esmayordeedad = function (persona) {
// return persona.edad >= MAYORIA_DE_EDAD
// }

const esmMayordeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayordeEdad(persona)) {
        console.log (`${persona.nombre} es mayor de edad`)
    } else { 
        console.log (`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso() {
    if (!esMayordeEdad(persona)) {
        console.log ('acceso denegado')
    }
}