import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ServicesViewComponent;
  let fixture: ComponentFixture<ServicesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
