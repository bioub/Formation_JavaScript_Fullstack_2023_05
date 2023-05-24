const fs = require('node:fs/promises');
const path = require('node:path');
const md5 = require('md5');
const { minify } = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function build() {
  await fs.rm(distPath, { force: true, recursive: true });
  await fs.mkdir(distPath);

  // const bufferHorloge = await fs.readFile(horlogeJsPath);
  // const bufferIndex = await fs.readFile(indexJsPath);

  const [bufferHorloge, bufferIndex] = await Promise.all([fs.readFile(horlogeJsPath), fs.readFile(indexJsPath)]);

  await fs.appendFile(appJsDistPath, bufferHorloge);
  await fs.appendFile(appJsDistPath, bufferIndex);

  const bufferHtml = await fs.readFile(indexHtmlPath);

  let contentHtml = bufferHtml.toString('utf-8');

  contentHtml = contentHtml
                .replace('<script src="./js/horloge.js"></script>', '<script src="./app.js"></script>')
                .replace('<script src="./js/index.js"></script>', '');

  await fs.writeFile(indexHtmlDistPath, contentHtml);
}

build();
