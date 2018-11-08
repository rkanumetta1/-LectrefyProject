import { TestBed } from '@angular/core/testing';

import { LibserviceService } from './libservice.service';

describe('LibserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibserviceService = TestBed.get(LibserviceService);
    expect(service).toBeTruthy();
  });
});
