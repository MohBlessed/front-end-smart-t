import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotemanagementComponent } from './quotemanagement.component';

describe('QuotemanagementComponent', () => {
  let component: QuotemanagementComponent;
  let fixture: ComponentFixture<QuotemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotemanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
