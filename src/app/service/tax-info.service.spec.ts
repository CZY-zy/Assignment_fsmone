import { TestBed } from '@angular/core/testing';

import { TaxInfoService } from './tax-info.service';

describe('TaxInfoService', () => {
  let service: TaxInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
