// function (exports, require, module, __filename, __dirname) {
const hello = require('./hello.js');
const MyMath = require('./my-math.js');

console.log(hello('Romain')); // Hello Romain
console.log(MyMath.sum(1, 2)); // 3
console.log(MyMath.sub(10, 3)); // 7
// }
