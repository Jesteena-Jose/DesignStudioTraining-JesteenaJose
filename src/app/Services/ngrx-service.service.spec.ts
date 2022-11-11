import { TestBed } from '@angular/core/testing';

import { NgrxServiceService } from './ngrx-service.service';

describe('NgrxServiceService', () => {
  let service: NgrxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
