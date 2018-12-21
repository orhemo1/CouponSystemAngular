import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import { AppServicesService } from './../../services/app-services.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-get-coupon-by-type',
  templateUrl: './get-coupon-by-type.component.html',
  styleUrls: ['./get-coupon-by-type.component.css']
})
export class GetCouponByTypeComponent implements OnInit {
  coupons:Coupon[];
  couponType:string
  constructor(private _services:AppServicesService) {
   }

  ngOnInit() {
  }
  getCouponByType(){
    this._services.getByType(this.couponType).subscribe(
      (resp)=>{
        this.coupons=resp.json()
        console.log(this.coupons)
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
        }) 
  
      }
    )
  }
  removeCoupon(i){
    let coupon:Coupon= this.coupons[i];
     this._services.deleteCoupon(coupon);
     this.coupons.splice(i,1);
   }
}
