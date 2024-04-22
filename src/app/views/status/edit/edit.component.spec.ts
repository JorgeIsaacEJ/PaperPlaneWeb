import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: StatusEditComponent;
  let fixture: ComponentFixture<StatusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
