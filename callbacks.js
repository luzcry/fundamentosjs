const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {
    crossDomain: true
}

const onPeopleResponse = function (person) {
    console.log(`hola, yo soy ${person.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)

//arguments es una variable que tienen todas las funciones que nos devuelven un array con los parametros que recibe la funcion