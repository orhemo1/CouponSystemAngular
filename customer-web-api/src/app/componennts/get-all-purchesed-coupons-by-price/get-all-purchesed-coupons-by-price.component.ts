import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import { AppServicesService } from './../../services/app-services.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-purchesed-coupons-by-price',
  templateUrl: './get-all-purchesed-coupons-by-price.component.html',
  styleUrls: ['./get-all-purchesed-coupons-by-price.component.css']
})
export class GetAllPurchesedCouponsByPriceComponent implements OnInit {
  coupons:Coupon[];
  thePrice:number;
  constructor(private _services:AppServicesService ) { }

  ngOnInit() {
  }

  bringCouponsByPrice(){
  
    this._services.getCouponsByPrice(this.thePrice).subscribe(
      (resp)=>{
        this.coupons=resp.json();
      },(error)=>{
        swal({
          title: 'ops..',
          text: error._body ,
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
