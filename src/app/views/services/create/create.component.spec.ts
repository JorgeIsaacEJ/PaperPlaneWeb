import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: ServicesCreateComponent;
  let fixture: ComponentFixture<ServicesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
