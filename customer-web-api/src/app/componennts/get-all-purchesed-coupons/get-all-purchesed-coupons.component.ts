import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import { AppServicesService } from './../../services/app-services.service';
import swal from 'sweetalert2';
import { Http } from '@angular/http';


@Component({
  selector: 'app-get-all-purchesed-coupons',
  templateUrl: './get-all-purchesed-coupons.component.html',
  styleUrls: ['./get-all-purchesed-coupons.component.css']
})
export class GetAllPurchesedCouponsComponent implements OnInit {
coupons:Coupon[];

  constructor( private _services:AppServicesService , private _http:Http) {
    this._services.getPurchesedCoupons().subscribe(
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
    )
   }

  ngOnInit() {
  }

}
