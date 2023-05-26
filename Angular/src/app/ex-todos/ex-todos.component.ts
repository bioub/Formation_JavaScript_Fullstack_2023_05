import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-todos',
  templateUrl: './ex-todos.component.html',
  styleUrls: ['./ex-todos.component.css']
})
export class ExTodosComponent {
  saisie = 'ABC';
  todos = [
    {
      _id: 1,
      title: 'GHI',
      completed: false,
    },
    {
      _id: 2,
      title: 'XYZ',
      completed: true,
    }
  ]
}
