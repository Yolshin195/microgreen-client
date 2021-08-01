import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMarketingComponent } from './main-marketing.component';

describe('MainMarketingComponent', () => {
  let component: MainMarketingComponent;
  let fixture: ComponentFixture<MainMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
