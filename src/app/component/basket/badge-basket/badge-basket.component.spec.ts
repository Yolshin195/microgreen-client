import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeBasketComponent } from './badge-basket.component';

describe('BadgeBasketComponent', () => {
  let component: BadgeBasketComponent;
  let fixture: ComponentFixture<BadgeBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
