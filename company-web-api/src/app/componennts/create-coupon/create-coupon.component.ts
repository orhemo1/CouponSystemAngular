import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import { AppServicesService } from './../../services/app-services.service'
@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {
  /**This is an empty coupon that will be filled with details from the html  */
  couponAdd: Coupon = new Coupon(0, "", new Date(11 / 11 / 2000), new Date(11 / 11 / 2000), 0, "", "", 0, "")
  constructor(private service: AppServicesService) { }
  addCoupon() {
    var c: Coupon = this.couponAdd;
    this.service.addCoupon(c);
    this.couponAdd.id = 0
    this.couponAdd.title = ""
    this.couponAdd.start_date = new Date(11/11/ 2000)
    this.couponAdd.end_date = new Date(11/11/ 2000)
    this.couponAdd.amount = 0
    this.couponAdd.type = ""
    this.couponAdd.massage = ""
    this.couponAdd.price = 0
    this.couponAdd.image = ""
   
  }
ngOnInit() {
}

}
