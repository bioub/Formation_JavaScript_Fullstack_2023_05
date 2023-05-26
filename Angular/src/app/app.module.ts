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

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FilterComponent,
    CounterComponent,
    UserFormComponent,
    ExHelloworldComponent,
    ExMultiStateButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
