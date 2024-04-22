import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: BusinessIndexComponent;
  let fixture: ComponentFixture<BusinessIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
