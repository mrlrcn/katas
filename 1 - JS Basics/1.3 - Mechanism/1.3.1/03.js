// Crea una función que devuelva el saludo que corresponda
// al idioma proporcionado a partir del objeto

const saludos = { /* es un objeto con propiedades, no un array */
  en: 'Hello',
  es: 'Hola',
  eu: 'Kaixo',
  jp: 'Konnichiwa',
};

const sayHi = (lang) => {
  // 👇🏻 Añade tu lógica aquí
  // METODO SWITCH
  switch (lang) {
    case 'en':
      return saludos.en;
    case 'es':
      return saludos.es;
    case 'eu':
      return saludos.eu;
    case 'jp':
      return saludos.jp;
    default:
      return 'undefined language';
  }
  // 👆🏻
};

// Metodo objetos más corto
// const sayHi = (lang) => {
// return saludos[lang];
// }

console.log(sayHi('es')); // "Hola"
console.log(sayHi('jp')); // "Konnichiwa"
console.log(sayHi('eu')); // "Kaixo"
