import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPurchesedCouponsByTypeComponent } from './get-all-purchesed-coupons-by-type.component';

describe('GetAllPurchesedCouponsByTypeComponent', () => {
  let component: GetAllPurchesedCouponsByTypeComponent;
  let fixture: ComponentFixture<GetAllPurchesedCouponsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllPurchesedCouponsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPurchesedCouponsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
