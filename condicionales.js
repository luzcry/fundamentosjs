var luz = {
    nombre: 'luz',
    apellido: 'rodriguez',
    edad: 24,
    sommelier: true,
    cocinera: false,
    dj: false,
    guitarrista: false,
    estudianteJs: true
}

function imprimirProfesiones(persona) {
    //interpolar variables
    console.log(`${persona.nombre} es:`)

    if (persona.sommelier) {
        console.log('estudiante')
    }
    if (persona.cocinera) {
        console.log('estudiante')
    }
    if (persona.dj) {
        console.log('DJ')
    }
    if (persona.guitarrista) {
        console.log('guitarrista')
    }
    if (persona.estudianteJs) {
        console.log('Estudiante de desarrollo web')
    }
}

imprimirProfesiones(luz)

var luz = {
    edad: 24,
    apellido: "rodriguez"
}

var kichichao = {
    edad: 15,
    apellido: "bermudez"
}

function imprimirSiEsMayorDeEdad(persona) {
    
    if (persona.edad < 18) {
        console.log('Eres menor de edad')
    } else { 
        console.log('Eres mayor de edad') 
    }
    console.log(`${persona.edad}`);

}

imprimirSiEsMayorDeEdad (luz);
imprimirSiEsMayorDeEdad (kichichao);

// para establecer constantes es una buena practica nombrarlas en mayus con separaciones de _ ej: const MAYORIA_DE_EDAD