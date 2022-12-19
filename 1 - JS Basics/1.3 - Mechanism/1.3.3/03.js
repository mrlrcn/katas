// Crea una función que devuelva el nombre de la persona que tenga 26 años

const userList = [
  { name: 'Pedro', age: 21 },
  { name: 'Maria', age: 26 },
  { name: 'Marta', age: 34 },
];

// 👇🏻 Añade tu lógica aquí utilizando la función find
const selectedUser = userList.find(function(user) {
  return user.age === 26;
});

console.log(selectedUser.name);
// 👆🏻
