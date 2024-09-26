import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForInternetBankingComponent } from './register-for-internet-banking.component';

describe('RegisterForInternetBankingComponent', () => {
  let component: RegisterForInternetBankingComponent;
  let fixture: ComponentFixture<RegisterForInternetBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterForInternetBankingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterForInternetBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
