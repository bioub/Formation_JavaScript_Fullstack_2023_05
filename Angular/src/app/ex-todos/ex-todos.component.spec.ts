import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExTodosComponent } from './ex-todos.component';

describe('ExTodosComponent', () => {
  let component: ExTodosComponent;
  let fixture: ComponentFixture<ExTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExTodosComponent]
    });
    fixture = TestBed.createComponent(ExTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
