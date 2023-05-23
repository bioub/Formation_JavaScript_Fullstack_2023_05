import { hello } from './01-hello.js';

const names = ['Romain', 'Jean', 'Eric', 123];

for (const n of names) {
  console.log(hello(n));
}

