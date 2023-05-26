import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
  choices = ['Yes', 'No', 'Maybe'];
  currentValue = 'No';

  /*
  Exercice 2 :
  Afficher dans le bouton du template la valeur currentValue
  Au clic de ce bouton afficher la prochaine valeur du tableau (si No -> Maybe)
  Arrivé en bout de tableau afficher le premier élement (si Maybe -> Yes)
  */
  select(choice: string) {
    this.currentValue = choice;
  }
}
