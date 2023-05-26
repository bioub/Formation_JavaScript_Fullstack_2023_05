import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ex-todos',
  templateUrl: './ex-todos.component.html',
  styleUrls: ['./ex-todos.component.css'],
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
  ];

  // Dans l'idéal on injecte HttpClient dans un service intermédiaire
  // qui lui est injecté dans le composant (permet de créer une abstraction)
  constructor(private httpClient: HttpClient) {
    httpClient
      .get<Todo[]>('http://localhost:8000/api/todos')
      .subscribe((data) => {
        this.todos = data;
      });
  }

  save(event: SubmitEvent) {
    event.preventDefault();
    const body = { title: this.saisie, completed: false };
    this.httpClient
      .post<Todo>('http://localhost:8000/api/todos', body)
      .subscribe((todo) => {
        this.todos.push(todo);
        this.saisie = '';
      });
  }

  delete(todo: Todo) {
    this.httpClient
      .delete(`http://localhost:8000/api/todos/${todo._id}`)
      .subscribe(() => {
        const indexToDelete = this.todos.indexOf(todo);
        this.todos.splice(indexToDelete, 1);
      });
  }
}
