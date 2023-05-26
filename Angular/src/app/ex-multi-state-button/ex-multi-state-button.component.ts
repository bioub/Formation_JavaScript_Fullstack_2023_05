import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-multi-state-button',
  templateUrl: './ex-multi-state-button.component.html',
  styleUrls: ['./ex-multi-state-button.component.css']
})
export class ExMultiStateButtonComponent {
  choices = ['Yes', 'No', 'Maybe'];
  currentValue = 'No';

  /*
  Exercice 2 :
  Afficher dans le bouton du template la valeur currentValue
  Au clic de ce bouton afficher la prochaine valeur du tableau (si No -> Maybe)
  Arrivé en bout de tableau afficher le premier élement (si Maybe -> Yes)
  */
  next() {
    const currentIndex = this.choices.indexOf(this.currentValue);
    const nextIndex = (currentIndex + 1) % this.choices.length;
    this.currentValue = this.choices[nextIndex];
  }
}
