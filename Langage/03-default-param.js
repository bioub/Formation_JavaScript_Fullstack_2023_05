// function hello(name) {
//   if (name === undefined) {
//     name = 'Romain'
//   }
//   return `Hello ${name}`;
// }

// function hello(name) {
//   name = name || 'Romain'; // à utiliser si la valeur défaut est falsy (équivalent à false)
//   return `Hello ${name}`;
// }

// ES2020 Nullish Coalescing Operator
// function hello(name) {
//   name = name ?? 'Romain';
//   return `Hello ${name}`;
// }

// ES2015 Default Param
function hello(name = 'Romain') {
  return `Hello ${name}`;
}

console.log(hello());
console.log(hello('Toto'));
console.log(hello(''));
