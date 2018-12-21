import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CreateCouponComponent } from './componennts/create-coupon/create-coupon.component';
import { GetCouponComponent } from './componennts/get-coupon/get-coupon.component';
import { GetAllCouponsComponent } from './componennts/get-all-coupons/get-all-coupons.component';
import { GetCouponByTypeComponent } from './componennts/get-coupon-by-type/get-coupon-by-type.component';
import { GetCouponByPriceComponent } from './componennts/get-coupon-by-price/get-coupon-by-price.component';
import { GetCouponByEndDateComponent } from './componennts/get-coupon-by-end-date/get-coupon-by-end-date.component';
import { AppServicesService } from './services/app-services.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CreateCouponComponent,
    GetCouponComponent,
    GetAllCouponsComponent,
    GetCouponByTypeComponent,
    GetCouponByPriceComponent,
    GetCouponByEndDateComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path: 'createcoupon',
          component: CreateCouponComponent,
        },
          {
          path: 'getcoupon',
          component: GetCouponComponent,
        },  
          {
          path: 'getallcoupons',
          component: GetAllCouponsComponent,
        },     
        {
          path: 'getallcouponsbytype',
          component: GetCouponByTypeComponent,
        },
        {
          path: 'getallcouponsbyprice',
          component: GetCouponByPriceComponent ,
        },
        {
          path: 'getallcouponsbyenddate',
          component: GetCouponByEndDateComponent,
        }
      ]
    )
  ],
  providers: [AppServicesService, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
