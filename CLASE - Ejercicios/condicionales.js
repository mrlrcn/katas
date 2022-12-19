/**
 * 1- Una función que devuelva "Boca pequeña" para cualquier
 * animal que no sea un cocodrilo y que tenga menos de 10 
 * dientes.
 */

const comoEsLaBoca = function (tipoAnimal, numDientes) {
  if (tipoAnimal === 'cocodrilo') {
    if (numDientes > 10) {
      return 'boca grande';
    } else {
      return 'boca pequeña';
    }
  } else {
    return 'boca pequeña';
  }
};

console.log(comoEsLaBoca('cocodrilo', 9));
console.log(comoEsLaBoca('cocodrilo', 12));
console.log(comoEsLaBoca('rata', 12));
