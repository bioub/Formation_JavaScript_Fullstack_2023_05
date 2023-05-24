// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// timeout(1000)
//   .then(() => {
//     console.log('1s');
//   });
import { Observable } from 'rxjs'

function interval(delayMs) {
  return new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next();
    }, delayMs);
  });
}

setInterval(() => {
  console.log('1s setInterval');
}, 1000);

interval(1000)
  .subscribe({
    next: () => {
      console.log('1s interval');
    },
    error: (err) => {

    },
    complete: () => {

    }
  });
