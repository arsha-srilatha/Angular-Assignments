import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsEditComponent } from './employee-details-edit.component';

describe('EmployeeDetailsEditComponent', () => {
  let component: EmployeeDetailsEditComponent;
  let fixture: ComponentFixture<EmployeeDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
