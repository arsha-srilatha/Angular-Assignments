import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMediaComponent } from './travel-media.component';

describe('TravelMediaComponent', () => {
  let component: TravelMediaComponent;
  let fixture: ComponentFixture<TravelMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
