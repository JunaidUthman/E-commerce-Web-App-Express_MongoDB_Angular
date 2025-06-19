import { TestBed } from '@angular/core/testing';

import { PruductServiceService } from './pruduct-service.service';

describe('PruductServiceService', () => {
  let service: PruductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
