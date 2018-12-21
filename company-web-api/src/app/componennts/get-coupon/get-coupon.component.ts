import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Coupon } from '../common/Coupon';
import swal from 'sweetalert2';
import { AppServicesService } from './../../services/app-services.service';



@Component({
  selector: 'app-get-coupon',
  templateUrl: './get-coupon.component.html',
  styleUrls: ['./get-coupon.component.css']
})
export class GetCouponComponent implements OnInit {
   
  couponId: number
  couponAdd: Coupon
  newPrice: number
  newEndDate: Date
  constructor(private _services: AppServicesService) {
  }
  ngOnInit() {
  }
  getCoupon() {
    this._services.getCoupon(this.couponId).subscribe(
      (resp) => {
        this.couponAdd = resp.json();
      }, (error) => {
        var err = error._body;
        swal({
          title: 'error',
          text: err,
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })
      })
  }
  /**in get coupon we  do the coupon updata to  */
  updateCouponPrice() {

    this.couponAdd.price = this.newPrice
    this._services.updateCoupon(this.couponAdd);
  }
  updateCouponDate() {
    this.couponAdd.end_date = this.newEndDate
    this._services.updateCoupon(this.couponAdd);
  }


}
