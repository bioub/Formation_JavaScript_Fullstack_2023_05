import { Component } from '@angular/core';

@Component({
  selector: 'app-show-color',
  templateUrl: './show-color.component.html',
  styleUrls: ['./show-color.component.css']
})
export class ShowColorComponent {
  color = 'blue';
  hover = false;
}
