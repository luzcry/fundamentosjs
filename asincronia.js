/*JS solo puede ejecutar una tarea a la vez, pero puede delegar tareas a otros procesos. Esto es llamado Event Loop

Call stack: Es donde JS va poniendo las llamadas a funciones según el orden de ejecución del programa, cuando termina de realizar una función la “elimina” del call stack.
*/

console.log('a');
setTimeout(() => {
    console.log('b');

}, 0)
console.log('c');
setTimeout(() => console.log('d'), 2000)
for (let i = 0; i < 1000000; i++) {

}