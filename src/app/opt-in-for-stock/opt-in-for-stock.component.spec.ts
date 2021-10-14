import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptInForStockComponent } from './opt-in-for-stock.component';

describe('OptInForStockComponent', () => {
  let component: OptInForStockComponent;
  let fixture: ComponentFixture<OptInForStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptInForStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptInForStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
