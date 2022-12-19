// Crea una función que muestre los números del 1 al 100

const showNumbers = () => {
  let contador = 0;
  // 👇🏻 Añade tu lógica aquí
  while (contador < 100) {
    contador = contador + 1;
    console.log(contador);
  }
  // 👆🏻
};
 /*Se puede hacer con un FOR tambien
 for (let contador = 0; contador <100; contador = contador +1) {
  console.log(contador +1)*/
showNumbers();
