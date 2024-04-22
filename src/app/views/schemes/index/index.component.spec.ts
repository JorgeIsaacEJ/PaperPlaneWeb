import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: SchemesIndexComponent;
  let fixture: ComponentFixture<SchemesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemesIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchemesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
