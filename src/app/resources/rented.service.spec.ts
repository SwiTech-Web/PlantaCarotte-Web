import { TestBed } from '@angular/core/testing';

import { RentedService } from './rented.service';

describe('RentedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentedService = TestBed.get(RentedService);
    expect(service).toBeTruthy();
  });
});
