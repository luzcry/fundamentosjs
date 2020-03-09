//si hablamos de objetos hablamos de prototipos, mas que de clases
//para definir un prototipo se define una funcion
var luz = {
  nombre: "luz maria",
  apellido: "rodriguez torres",
  edad: 24
};
var dario = {
  nombre: "dario",
  apellido: "perez",
  edad: 27
};

function imprimirNombreEnMayusculas(persona) {
  //var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

//imprimirNombreEnMayusculas(luz)
//imprimirNombreEnMayusculas(dario)

function imprimirNombreYEdad() {
  // hola me llamo luz y tengo 24 años

  function cumpleanos(persona) {
    return {
      //desglosamos a la persona en este objeto,copiar su contenido
      ...persona,
      edad: persona.edad + 1
    };
  }
}
var luzMasViejo = cumpleanos(luz);
