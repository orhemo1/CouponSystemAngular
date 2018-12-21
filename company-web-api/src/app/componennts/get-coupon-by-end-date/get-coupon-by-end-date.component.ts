import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import swal from 'sweetalert2';
import { AppServicesService } from './../../services/app-services.service';


@Component({
  selector: 'app-get-coupon-by-end-date',
  templateUrl: './get-coupon-by-end-date.component.html',
  styleUrls: ['./get-coupon-by-end-date.component.css']
})
export class GetCouponByEndDateComponent implements OnInit {
  coupons:Coupon[];
  expDate:Date
  constructor(private _services:AppServicesService) {
  }
  ngOnInit() {
  }
  getCouponByEndDate(){
   this._services.getCouponByEndDate(this.expDate).subscribe(
     (resp)=>{
       this.coupons=resp.json();
     },(error)=>{
      var err=error._body;
      swal({
        title: 'sorry',
        text: err,
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
      }) }
   )}

   removeCoupon(i){
    let coupon:Coupon= this.coupons[i];
     this._services.deleteCoupon(coupon);
     this.coupons.splice(i,1);
   }
}
