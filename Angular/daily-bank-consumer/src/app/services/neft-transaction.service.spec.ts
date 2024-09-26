import { TestBed } from '@angular/core/testing';

import { NeftTransactionService } from './neft-transaction.service';

describe('NeftTransactionService', () => {
  let service: NeftTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeftTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
