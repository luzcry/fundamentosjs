//definir prototipo de persona que salude

function Persona() {

    //this hace referencia al objeto que se acaba de construir
    this.nombre = nombre
    this.apellido = apellido
}

Persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}
//new crea un nuevo objeto 
let lu = new Persona('lu', 'Rodriguez')
let erika = new persona('erika', 'luna')
let arturo = new persona('arturo', 'perez')

//es alta

functionPerson(fName, lName, height) {
    this.fName = fName
    this.lName = lName
    this.height = height
}

personas.prototype.salute = function () {
    console.log(`hola, me llamo ${this.fName}${this.lName}`)
}

person.prototype.myHeight = function () {
        if (this.height > 1.7) {
            console.log(`mido ${this.height} m de altura, soy alto`)

        } else if (this.height < 1.5) {
            console.log(`mido ${this.height}m de altura`)
        } else {
            console.log(`mido ${this.height}m de altura`)
        }