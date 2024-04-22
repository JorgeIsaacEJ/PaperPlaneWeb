import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: BusinessEditComponent;
  let fixture: ComponentFixture<BusinessEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
