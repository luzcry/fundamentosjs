var luz = {
    nombre: "luz",
    apellido: "rodriguez",
    edad: 24,
    peso: 63
}

console.log(`Al inicio del año ${luz.nombre} pesa ${luz.peso}`)
// entre las llaves va el codigo a repetir. el for entre los parentesis tiene 3 partes: la inicial, la condicion y el incremento 
//i es un contador
//function aumentarDePeso = (persona) => {
//persona.peso += 200 }

const INCREMENTO_PESO = 0.2
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const DIAS_DEL_AÑO = 365

for (let i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()
    
        if (random < 0.25) {
            aumentarDePeso(luz)
        } else if (random < 0.5) {
            adelgazar (luz)
        }
    }
console.log (`al final del año ${luz.nombre} pesa ${luz.peso.toFixed(2)}kg`)
//tofixed determina cuantos decimales quieres que se devuelvan