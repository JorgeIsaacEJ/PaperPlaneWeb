import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: StatusCreateComponent;
  let fixture: ComponentFixture<StatusCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
