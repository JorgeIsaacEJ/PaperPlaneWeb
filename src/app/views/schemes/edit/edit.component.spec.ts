import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: SchemesEditComponent;
  let fixture: ComponentFixture<SchemesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchemesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
