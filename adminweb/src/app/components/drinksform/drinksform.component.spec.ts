import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksformComponent } from './drinksform.component';

describe('DrinksformComponent', () => {
  let component: DrinksformComponent;
  let fixture: ComponentFixture<DrinksformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinksformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
