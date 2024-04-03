import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsservicesIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: ClientsservicesIndexComponent;
  let fixture: ComponentFixture<ClientsservicesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsservicesIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsservicesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
