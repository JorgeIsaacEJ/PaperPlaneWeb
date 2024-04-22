import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: ClientsIndexComponent;
  let fixture: ComponentFixture<ClientsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
