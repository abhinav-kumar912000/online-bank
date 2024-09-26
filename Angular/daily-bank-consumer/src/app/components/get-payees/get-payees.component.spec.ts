import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPayeesComponent } from './get-payees.component';

describe('GetPayeesComponent', () => {
  let component: GetPayeesComponent;
  let fixture: ComponentFixture<GetPayeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPayeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPayeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
