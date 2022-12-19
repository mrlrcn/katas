/**
 * 1 - Crea variables para almacenar tu nombre y tu edad,
 *   y construye, utilizando esas variables, la cadena de texto siguiente:
 const nombre = 'Jon';
const edad = 30;
const saludo = 'Soy ' + name + ' y tengo ' + age + ' años.';
 *   'Soy JON y tengo 30 años'

 * 2 - Muestra por consola la longitud de la cadena de texto resultante
 *
 * 3 - Reemplaza tu nombre por 'CARMEN' (a no ser que te llames Carmen, en ese caso, pon otro 😅)
 * 
 * 4 - Construye un objeto que tenga las propiedades nombre, edad y saludo
 *     (un texto que suelas utilizar para saludar)
 * 
 * 5 - Crea una función que reciba el objeto creado arriba y muestre por consola
 *     el nombre y el saludo
 */

const saludo = 'Soy ....'
const saludoOp2 = `Soy ${nombre} y tengo ${edad} años`;
const saludoOp3 = 'Soy Jon y tengo 30 años.';

console.log(saludo);

console.log(saludo.length);

console.log(saludo.replace(nombre, 'Carmen'));

const user = {
    name: 'Vicente',
    age: 33,
    greeting: 'Hola, soy Vicente!',
};

console.log(user.greeting);

const sayHi = function(user) {
  console.log(user.name + ': ' + user.greeting);
}

sayHi(user);
sayHi({ name: 'Maria', greeting: 'Soy Maria qué tal'});