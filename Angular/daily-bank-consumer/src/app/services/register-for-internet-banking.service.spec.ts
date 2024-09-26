import { TestBed } from '@angular/core/testing';

import { RegisterForInternetBankingService } from './register-for-internet-banking.service';

describe('RegisterForInternetBankingService', () => {
  let service: RegisterForInternetBankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterForInternetBankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
