import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCultivationComponent } from './order-cultivation.component';

describe('OrderCultivationComponent', () => {
  let component: OrderCultivationComponent;
  let fixture: ComponentFixture<OrderCultivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCultivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCultivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
