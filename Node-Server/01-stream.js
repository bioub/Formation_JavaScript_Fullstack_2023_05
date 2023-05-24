import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

createReadStream('.prettierrc')
  .pipe(createGzip())
  .pipe(createWriteStream('.prettierrc.zip'));

// cat .prettierrc | gzip > .prettierrc.zip
