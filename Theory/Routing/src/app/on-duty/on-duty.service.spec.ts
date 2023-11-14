import { TestBed } from '@angular/core/testing';

import { OnDutyService } from './on-duty.service';

describe('OnDutyService', () => {
  let service: OnDutyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnDutyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
