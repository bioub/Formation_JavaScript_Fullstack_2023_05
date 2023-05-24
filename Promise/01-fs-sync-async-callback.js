import { readFile, readFileSync } from 'node:fs';

// Sync
// Avantage : simple à lire, les lignes s'éxecutent dans l'ordre (ici 5, 6, 7, 8)
// Inconvénient : perf, le thread est bloqué lorsque le fichier est en lecture
const buffer = readFileSync('.prettierrc');
console.log(buffer.toString('utf-8'));

// Async callback
// Inconvénient : plus difficile à lire, les lignes ne s'exécutent pas dans l'ordre
// (ici 13, 16, ... plus tard la ligne 14)
// Avantage : perf, le thread est disponible lorsque le fichier est en lecture
readFile('.prettierrc', (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});
console.log('Fin')
