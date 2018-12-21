import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Coupon } from '../common/Coupon';
import { AppServicesService } from './../../services/app-services.service';
import swal from 'sweetalert2';
 
@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {
  coupons: Coupon[];
  constructor(private _appServices: AppServicesService, private _http: Http) {
    this._appServices.getAllCoupons().subscribe(
      (resp) => {
        this.coupons = resp.json();
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
        }) })}

  ngOnInit() {
  }
  removeCoupon(i) {
    let c: Coupon = this.coupons[i]
    this._appServices.deleteCoupon(c);
    this.coupons.splice(i,1);
  }
}
