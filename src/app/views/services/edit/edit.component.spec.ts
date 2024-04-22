import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: ServicesEditComponent;
  let fixture: ComponentFixture<ServicesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
