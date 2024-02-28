import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConidtionsComponent } from './terms-conidtions.component';

describe('TermsConidtionsComponent', () => {
  let component: TermsConidtionsComponent;
  let fixture: ComponentFixture<TermsConidtionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsConidtionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsConidtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
