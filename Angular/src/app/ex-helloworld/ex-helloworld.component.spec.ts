import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExHelloworldComponent } from './ex-helloworld.component';

describe('ExHelloworldComponent', () => {
  let component: ExHelloworldComponent;
  let fixture: ComponentFixture<ExHelloworldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExHelloworldComponent]
    });
    fixture = TestBed.createComponent(ExHelloworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
