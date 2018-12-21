import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPurchesedCouponsComponent } from './get-all-purchesed-coupons.component';

describe('GetAllPurchesedCouponsComponent', () => {
  let component: GetAllPurchesedCouponsComponent;
  let fixture: ComponentFixture<GetAllPurchesedCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllPurchesedCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPurchesedCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
