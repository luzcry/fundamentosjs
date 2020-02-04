var luz = {
    nombre: "luz maria",
    apellido: "rodriguez",
    edad: 24,
    peso: 63
}

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const realizaDeporte = () => Math.random() < 0.4
const comeMucho = () => Math.random() < 0.3
const META = luz.peso - 3
var dias = 0

while (luz.peso > META) { 

    if (comeMucho()) {
        //aumentar peso
    }
    if (realizaDeporte()) {
        adelgazar(luz)
    }
    dias += 1
}
console.log (`Pasaron ${dias} días hasta que ${luz.nombre} adelgazó 3kg`)
