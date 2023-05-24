import { readFile, writeFile } from 'node:fs/promises';

// Top-level await, un ou plusieurs await à la racine
// du module (fichier)
// Uniquement disponible en Module ESM

try {
  const buffer = await readFile('.prettierrc');
  await writeFile('.prettierrc.copy', buffer);
  console.log('Copy async done');
} catch (err) {
  console.log('Err', err.message);
}
