import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import { AppServicesService } from './../../services/app-services.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {
  coupons: Coupon[]
  constructor(private _services: AppServicesService) {
    /**in this componnent the user first see al the coupons that he didnt purchased 
    and choose one or more (he can only buy one of each kind) */
    this._services.getUnPurchaseCoupon().subscribe(
      (resp) => {
        this.coupons = resp.json();
      })
  }
  ngOnInit() {
  }
  purchesCoupon(index) {
    let coupon: Coupon = this.coupons[index];
    this._services.PurchaseCoupon(coupon).subscribe(
      (resp) => {
        swal({
          position: 'top-end',
          type: 'success',
          title: 'nice!',
          showConfirmButton: false,
          timer: 1500
        })
      }, (error) => {

        swal({
          title: 'ops..',
          text: error._body,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tkx_kWmPGBqjtDRU0D8BBpJn_kJTZ_7RorxmN7x2Ohij5KSs',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })

      }
    )

  }
}
