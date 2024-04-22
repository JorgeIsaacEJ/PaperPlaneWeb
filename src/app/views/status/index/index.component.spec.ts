import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: StatusIndexComponent;
  let fixture: ComponentFixture<StatusIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
