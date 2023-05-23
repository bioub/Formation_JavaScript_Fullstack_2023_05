setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// 1 - A B C D E
// 2 - B E A D C
// 3 - E B A D C <----

// ^
// |
// |                                                            [lg]
// |[setTimeout][setTimeout][setTimeout][setTimeout][lg] ..⟳.. [taskB] ..⟳..         [taskA][taskD]       [taskC]
// +------------0-----------------------------------------------3ms------------------500--------------------> temps
// Sortie                                           E            B


// File d'attente de timers (0ms) : taskB
// File d'attente de timers (3ms) :
// File d'attente de timers (500ms) : taskA - taskD
// File d'attente de timers (501ms) : taskC
// File d'attente de timers (502ms) :
// File d'attente de timers (1000ms) : taskD
// File d'attente de timers (1001ms) :

// Jake Archibald - Conférence In The Loop (Jsconf.asia 2018)
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
