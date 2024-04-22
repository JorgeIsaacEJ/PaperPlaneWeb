import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ClientsViewComponent;
  let fixture: ComponentFixture<ClientsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
