globalThis.globalVar = 'globalVar';

const moduleVar = 'moduleVar';

function externe() {
  const closureVar = 'closureVar';

  function interne() {
    const localVar = 'localVar';

    if (true) {
      const blockVar = 'blockVar';
      console.log(blockVar);
      console.log(localVar);
      console.log(closureVar);
      console.log(moduleVar);
      console.log(globalVar);
    }
  }
  interne();
}

externe();

// ^
// |   [lg][lg][lg][lg][lg]
// |   [interne           ]
// |[externe              ]
// +-------------------------------> temps
