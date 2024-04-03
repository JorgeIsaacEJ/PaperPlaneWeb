import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoooterViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: FoooterViewComponent;
  let fixture: ComponentFixture<FoooterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoooterViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoooterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
