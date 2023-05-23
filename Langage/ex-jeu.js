import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = createInterface({
  input: stdin,
  output: stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    // si le nombre a été trouvé :
    // rl.close();

    // sinon revenir à la ligne 11
    jouer();
  });
}

jouer();
