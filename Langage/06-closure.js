function myClosure(param) {
  return function() {
    console.log(param);
  };
}

const hello = myClosure('Hello');
hello();

// ^
// |
// |
// |[myClosure              ]  [hello  ]
// +--------------------------------------> temps

// Pas de closure
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// ^
// |
// |
// |for { [setTimeout] [setTimeout] [setTimeout] } i=3      [lg][lg][lg]
// +---------------------------------------------------------1s-------------> temps


// A - ..1s.. 0 ..1s.. 1 ..1..s 2
// B - ..1s.. 0 1 2
// C - ..1s.. 3 3 3

// Closure (permet de sauvegarder i)
for (var i=0; i<3; i++) {
  setTimeout(myClosure(i), 1000);
}

// Closure (permet de sauvegarder i)
for (let i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
