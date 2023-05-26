import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FilterComponent } from './filter/filter.component';
import { CounterComponent } from './counter/counter.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ExHelloworldComponent } from './ex-helloworld/ex-helloworld.component';
import { ExMultiStateButtonComponent } from './ex-multi-state-button/ex-multi-state-button.component';
import { ShowColorComponent } from './show-color/show-color.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { FormsModule } from '@angular/forms';
import { ExTodosComponent } from './ex-todos/ex-todos.component';
import { HomeComponent } from './home/home.component';
import { ExamplesComponent } from './examples/examples.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FilterComponent,
    CounterComponent,
    UserFormComponent,
    ExHelloworldComponent,
    ExMultiStateButtonComponent,
    ShowColorComponent,
    ButtonGroupComponent,
    ExTodosComponent,
    HomeComponent,
    ExamplesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
