// Crea una función que muestre la suma de todos los números presentes en el array
const sumNumbers = (numberList) => {

  // Utiliza esta variable para ir acumulando la suma
  let counter = 0;
  // 👇🏻 Añade tu lógica aquí
 /* for  ( let contador = 0; contador < numberList.lenght; contador = contador + 1;) {
    return counter = counter + numberList[contador]; */
    numberList.forEach(function(number) {
   counter = counter + number;
  });
  return counter;
  // 👆🏻
};

console.log(sumNumbers([3, 6, 9])); // 18
console.log(sumNumbers([1, 6, 2])); // 9
