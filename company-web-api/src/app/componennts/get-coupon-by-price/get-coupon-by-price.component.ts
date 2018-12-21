import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import { AppServicesService } from './../../services/app-services.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-get-coupon-by-price',
  templateUrl: './get-coupon-by-price.component.html',
  styleUrls: ['./get-coupon-by-price.component.css']
})
export class GetCouponByPriceComponent implements OnInit {
  coupons:Coupon[];
  couponPrice:number
  constructor(private _service:AppServicesService) {
 }
  ngOnInit() {
  }
  getCompanyByPrice(){
   this._service.getCompanyByPrice(this.couponPrice).subscribe(
      (resp)=>{
        this.coupons=resp.json()
        
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
  
      })
  }
  removeCoupon(i){
    let coupon:Coupon= this.coupons[i];
     this._service.deleteCoupon(coupon);
     this.coupons.splice(i,1);
   }
}
