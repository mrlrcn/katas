// Crea una función que muestre los nombres de los usuarios que tenemos en la lista
const userList = [
  { name: 'Jon' },
  { name: 'Carmen' },
  { name: 'Maria' },
];

/* userList.forEach(function(user) {
  console.log(user.name);
}); */
const showUserNames = (names) => {
// 👇🏻 Añade tu lógica aquí
  for (let contador = 0; contador < names.length; contador = contador + 1) {
    console.log(names[contador].name);
    // entras en un array - dentro hay [OBJETOS] entras en el objeto y quieres la propiedad name (.name)
  }
};
// 👆🏻
showUserNames(userList);

/* Suma edades de todo el mundo
const userList = [
  { name: 'Jon' },
  { name: 'Carmen' },
  { name: 'Maria' },
For - variable contador sumando el .age */
