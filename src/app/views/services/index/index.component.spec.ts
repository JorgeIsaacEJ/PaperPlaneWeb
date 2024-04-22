import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: ServicesIndexComponent;
  let fixture: ComponentFixture<ServicesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
