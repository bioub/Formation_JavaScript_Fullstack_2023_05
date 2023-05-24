import { readFile, writeFile } from 'node:fs/promises';

// Async callback
// Callback Hell / Pyramid of Doom
// Problème : triangle que forme le code, la gestion d'erreur qui n'est pas centralisable
// readFile('.prettierrc', (err, buffer) => {
//   if (err) {
//     console.log('Err', err.message);
//   } else {
//     writeFile('.prettierrc.copy', buffer, (err) => {
//       if (err) {
//         console.log('Err', err.message);
//       } else {
//         console.log('Copy async done');
//       }
//     });
//   }
// });

// Ici toujours le callback hell
// readFile('.prettierrc')
//   .then((buffer) => {
//     writeFile('.prettierrc.copy', buffer)
//       .then(() => {
//         console.log('Copy async done');
//       })
//       .catch((err) => {
//         console.log('Err', err.message);
//       });
//   })
//   .catch((err) => {
//     console.log('Err', err.message);
//   });

// Si le callback d'un .then ou d'un .catch retourne une promesse
// (ici le retour de writeFile), on peut ne pas imbriquer, donc :
// - plus de triangle
// - un seul catch
// readFile('.prettierrc')
//   .then((buffer) => {
//     return writeFile('.prettierrc.copy', buffer)
//   })
//   .then(() => {
//     console.log('Copy async done');
//   })
//   .catch((err) => {
//     console.log('Err', err.message);
//   });

// En version condensée (sans accolades, ce qui suit la flèche =>, est la valeur de retour)
readFile('.prettierrc')
  .then((buffer) => writeFile('.prettierrc.copy', buffer))
  .then(() => console.log('Copy async done'))
  .catch((err) => console.log('Err', err.message));

