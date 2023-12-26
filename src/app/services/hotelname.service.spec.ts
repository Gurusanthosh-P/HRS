import { TestBed } from '@angular/core/testing';

import { HotelnameService } from './hotelname.service';

describe('HotelnameService', () => {
  let service: HotelnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
