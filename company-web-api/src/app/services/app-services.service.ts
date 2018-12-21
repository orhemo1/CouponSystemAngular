import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Coupon } from './../componennts/common/Coupon';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  constructor(private _http: Http) {}
  /*company can create new coupons and send them to the database */
  addCoupon(c: Coupon) {
    this._http.post("http://localhost:8080/coupon/company/createCoupon", c).subscribe(
      (resp) => {
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Your coupon has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }, (error) => {
        swal({
          title: 'error!',
          text: 'one or more of your details are missing',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })
      }
    )
  }
  /**get all the company coupons from the database */
  getAllCoupons() {
    return this._http.get("http://localhost:8080/coupon/company/getAllCoupons");
  }
  /**delete company coupon from the database */
  deleteCoupon(c: Coupon) {
    this._http.delete("http://localhost:8080/coupon/company/removeCoupon", new RequestOptions({
      body: c
    })).subscribe(
      (resp) => {
        console.log(resp);
      }
    )
  }
  /**get specific coupon from the database */
  getCoupon(id: number) {
    return this._http.get("http://localhost:8080/coupon/company/getCoupon/" + id);
  }
/**update the price or the expiration date of the coupon */
  updateCoupon(coupon:Coupon){
    this._http.put("http://localhost:8080/coupon/company/updateCoupon",coupon).subscribe(
    (resp)=>{
      swal({
        title: 'nice!',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
      })       
    }
  )
  }
  /**get all the coupons that end in a specific date and before */
  getCouponByEndDate(end:Date){
  return  this._http.get(`http://localhost:8080/coupon/company/getCouponByEndDate/${end}`);
      
  }
/** get all the coupons from a specific price and lower*/
  getCompanyByPrice(price:number){
   return this._http.get(`http://localhost:8080/coupon/company/getCouponByPrice/${price}`);
  }
  /**get all the coupons  from specific type*/
  getByType(type:string){
   return this._http.get(`http://localhost:8080/coupon/company/getCouponByType/${type}`);
  }
  /**log out from the coupon system */
  logOut(){
    return this._http.delete(`http://localhost:8080/coupon/company/logOut`);
  }
}
