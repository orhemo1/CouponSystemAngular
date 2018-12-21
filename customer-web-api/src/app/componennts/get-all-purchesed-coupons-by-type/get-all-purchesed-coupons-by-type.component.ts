import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import { AppServicesService } from './../../services/app-services.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-purchesed-coupons-by-type',
  templateUrl: './get-all-purchesed-coupons-by-type.component.html',
  styleUrls: ['./get-all-purchesed-coupons-by-type.component.css']
})
export class GetAllPurchesedCouponsByTypeComponent implements OnInit {
  coupons:Coupon[];
  couponType:string
  constructor(private _services:AppServicesService) { }

  ngOnInit() {
  }
  getCouponByType(){
   
   this._services.getByType(this.couponType).subscribe(
      (resp)=>{
        this.coupons=resp.json()
       
      },(error)=>{
        let err=error._body;
        console.log(err);
        swal({
          title: 'ops..',
          text:err ,
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })
      }
    )
  }
}
