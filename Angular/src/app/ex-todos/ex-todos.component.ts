import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-ex-todos',
  templateUrl: './ex-todos.component.html',
  styleUrls: ['./ex-todos.component.css']
})
export class ExTodosComponent {
  saisie = 'ABC';
  todos: Todo[] = [
    // {
    //   _id: 1,
    //   title: 'GHI',
    //   completed: false,
    // },
    // {
    //   _id: 2,
    //   title: 'XYZ',
    //   completed: true,
    // }
  ]

  save(event: SubmitEvent) {
    event.preventDefault();
    this.todos.push({
      _id: Math.random(),
      title: this.saisie,
      completed: false,
    });
    this.saisie = '';
  }

  delete(todo: Todo) {
    const indexToDelete = this.todos.indexOf(todo);
    this.todos.splice(indexToDelete, 1);
  }
}
