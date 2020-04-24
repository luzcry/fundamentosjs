class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    let { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido);
    }
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

  saludar(fn) {
    let nombre = this.nombre;
    let apellido = this.apellido;
    console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }

  responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
      console.log(`No sabía que codeabas`);
    }
  }
}

let liz = new Persona("liz", "Birmudez", 1.55);
let lez = new Persona("lez", "Bermudez", 1.35);
let laz = new desarrollador("laz", "Barmudez", 1.85);

liz.saludar();
lez.saludar(responderSaludo);
laz.saludar(responderSaludo);
