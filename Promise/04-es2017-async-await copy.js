import { readFile, writeFile } from 'node:fs/promises';

// Async
// Avantage : simple à lire, les lignes s'éxecutent dans l'ordre
// Avantage : perf, le thread est bloqué lorsque le fichier est en lecture
async function copyPrettierRc() {
  try {
    const buffer = await readFile('.prettierrc');
    await writeFile('.prettierrc.copy', buffer);
    console.log('Copy async done');
  } catch (err) {
    console.log('Err', err.message);
  }
}

copyPrettierRc();
