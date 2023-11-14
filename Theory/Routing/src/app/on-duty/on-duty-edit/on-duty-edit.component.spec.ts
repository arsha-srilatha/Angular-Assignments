import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDutyEditComponent } from './on-duty-edit.component';

describe('OnDutyEditComponent', () => {
  let component: OnDutyEditComponent;
  let fixture: ComponentFixture<OnDutyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDutyEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDutyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
