import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCliComponent } from './by-cli.component';

describe('ByCliComponent', () => {
  let component: ByCliComponent;
  let fixture: ComponentFixture<ByCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
