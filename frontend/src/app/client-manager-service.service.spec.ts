import { TestBed } from '@angular/core/testing';

import { ClientManagerServiceService } from './client-manager-service.service';

describe('ClientManagerServiceService', () => {
  let service: ClientManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
