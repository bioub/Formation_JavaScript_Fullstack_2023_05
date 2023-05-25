import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name = 'Romain';

  constructor() {
    setTimeout(() => {
      this.name = this.name.toUpperCase();
    }, 2000);
  }
}
