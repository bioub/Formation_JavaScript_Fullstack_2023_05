// En JS de nombreux objets sont pré-existants
console.log(typeof Math); // object
console.log(Math instanceof Object); // true

console.log(typeof JSON); // object
console.log(JSON instanceof Object); // true

console.log(typeof Array); // function
console.log(Array instanceof Object); // true (une fonction est object en JS)

// Le navigateur rajoute ses propres objets (API Web)
console.log(typeof document); // object/undefined
console.log(typeof window); // object/undefined
console.log(typeof navigator); // object/undefined

// Node rajoute ses propres objets
console.log(typeof process); // object/undefined

// L'objet JS est un dictionnaire

// On peut ajouter des clés/valeurs (extension d'objet)
console.log(Math.sum); // undefined
Math.sum = function (a, b) {
  return a + b;
};
console.log(Math.sum(1, 2));

// Modifier des clés/valeurs
Math.sum = function (a, b) {
  return Number(a) + Number(b);
};

// Supprimer des clés/valeurs
delete Math.sum;
console.log(Math.sum); // undefined

// 2 systèmes pour créer des objets

// Objet Literal
// use cases :
// - objets créé une seule fois
// - si plusieurs instances éviter les méthodes (qui seraient dupliquée)
const coordsA = {
  x: 1,
  y: 2,
};

const coordsB = {
  x: 3,
  y: 4,
};

// Constructor (syntaxe historique) / Class (syntaxe moderne)
// use case : plusieurs instances avec méthodes
// function User(name) {
//   this.name = name; // extension
// }

// User.prototype.hello = function () {
//   return `Hello ${this.name}`;
// };

class User {
  constructor(name) {
    this.name = name; // extension
  }
  hello() {
    return `Hello ${this.name}`;
  }
}

const user1 = new User('romain');
console.log(typeof user1); // object
console.log(user1.name);
console.log(user1.hello());

const user2 = new User('Toto');
console.log(user2.name);
// delete User.prototype.hello;
console.log(user2.hello());
