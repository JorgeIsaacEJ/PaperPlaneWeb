import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: StatusViewComponent;
  let fixture: ComponentFixture<StatusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
