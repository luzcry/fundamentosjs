class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}
//heredar de otra clase
class desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar() {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
    );
  }
}
