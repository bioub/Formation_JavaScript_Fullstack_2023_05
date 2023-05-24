import { readFile, readFileSync, writeFile, writeFileSync } from 'node:fs';

// Sync
try {
  const buffer = readFileSync('.prettierr');
  writeFileSync('.prettierrc.copy', buffer);
  console.log('Copy sync done');
} catch (err) {
  console.log('Err', err.message);
}

// Async callback
// Callback Hell / Pyramid of Doom
// Problème : triangle que forme le code, la gestion d'erreur qui n'est pas centralisable
readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log('Err', err.message);
  } else {
    writeFile('.prettierrc.copy', buffer, (err) => {
      if (err) {
        console.log('Err', err.message);
      } else {
        console.log('Copy async done');
      }
    });
  }
});
console.log('Fin');


// ^
// |
// |                            [writeFile   ]                 [lg]
// |[readFile][lg] ..⟳..        [taskReadline] ..⟳..          [taskWriteFile]
// +--------------------------------------------------------------------------> temps



