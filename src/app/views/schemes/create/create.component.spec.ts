import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesCreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: SchemesCreateComponent;
  let fixture: ComponentFixture<SchemesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemesCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchemesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
