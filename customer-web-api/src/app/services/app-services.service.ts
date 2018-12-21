import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Coupon } from '../componennts/common/Coupon';


@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  constructor(private _http: Http) { }
  /**get all the coupons that the user didnt purchased yet */
  getPurchesedCoupons() {
    return this._http.get("http://localhost:8080/coupon/customer/getAllPurchesedCoupons");
  }
  /**get all the usuer purchased coupons from specific price and lower */
  getCouponsByPrice(price: number) {
    return this._http.get(`http://localhost:8080/coupon/customer/getAllPurchesedCouponsByPrice/${price}`);
  }
  /**get all the usuer purchased coupons from specific type*/
  getByType(type: string) {
    return this._http.get(`http://localhost:8080/coupon/customer/getAllPurchesedCouponsByType/${type}`);
  }
  /**get all the coupon the user dindt purchased so he can buy some(usued in the purchase coupons componnent) */
  getUnPurchaseCoupon() {
    return this._http.get("http://localhost:8080/coupon/customer/getAllCoupons");
  }
  PurchaseCoupon(coupon: Coupon) {
    return this._http.put("http://localhost:8080/coupon/customer/purchaseCoupon", coupon);
  }
}
