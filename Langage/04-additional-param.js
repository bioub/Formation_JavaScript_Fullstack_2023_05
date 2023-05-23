// pseudo variable est une variable créée automatiquement
// par JavaScript au moment de l'appel d'une fonction
// 4 pseudo-variables :
// this (contexte objet, l'objet)
// arguments (params de la fonction)
// super (contexte héritage objet)
// new.target (contexte objet self, la classe)

// function sum(a, b) {
//   let result = a + b;
//   for (let i=2; i<arguments[i]; i++) {
//     result += arguments[i];
//   }
//   return result;
// }

function sum(a, b, ...others) {
  let result = a + b;

  for (const nb of others) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4));
