import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamplesComponent } from './examples/examples.component';
import { ExTodosComponent } from './ex-todos/ex-todos.component';

const routes: Routes = [{
  path: '', // === URL sans le slash de départ
  component: HomeComponent,
}, {
  path: 'examples',
  component: ExamplesComponent,
}, {
  path: 'todos',
  component: ExTodosComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
