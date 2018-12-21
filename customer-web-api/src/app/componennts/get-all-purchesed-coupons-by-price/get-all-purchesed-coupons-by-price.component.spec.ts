import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPurchesedCouponsByPriceComponent } from './get-all-purchesed-coupons-by-price.component';

describe('GetAllPurchesedCouponsByPriceComponent', () => {
  let component: GetAllPurchesedCouponsByPriceComponent;
  let fixture: ComponentFixture<GetAllPurchesedCouponsByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllPurchesedCouponsByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPurchesedCouponsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
