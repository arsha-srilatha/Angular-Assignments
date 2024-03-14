import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberValidityComponent } from './number-validity.component';

describe('NumberValidityComponent', () => {
  let component: NumberValidityComponent;
  let fixture: ComponentFixture<NumberValidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberValidityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberValidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
