import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: NavBarViewComponent;
  let fixture: ComponentFixture<NavBarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
