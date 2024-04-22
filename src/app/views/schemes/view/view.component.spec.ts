import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: SchemesViewComponent;
  let fixture: ComponentFixture<SchemesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchemesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
