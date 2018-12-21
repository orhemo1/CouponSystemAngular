import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PurchaseCouponComponent } from './componennts/purchase-coupon/purchase-coupon.component';
import { GetAllPurchesedCouponsComponent } from './componennts/get-all-purchesed-coupons/get-all-purchesed-coupons.component';
import { GetAllPurchesedCouponsByTypeComponent } from './componennts/get-all-purchesed-coupons-by-type/get-all-purchesed-coupons-by-type.component';
import { GetAllPurchesedCouponsByPriceComponent } from './componennts/get-all-purchesed-coupons-by-price/get-all-purchesed-coupons-by-price.component';
import { AppServicesService } from './services/app-services.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    PurchaseCouponComponent,
    GetAllPurchesedCouponsComponent,
    GetAllPurchesedCouponsByTypeComponent,
    GetAllPurchesedCouponsByPriceComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpModule,RouterModule.forRoot(
      [
        {
          path: 'purchasecoupon',
          component: PurchaseCouponComponent,
        },
        {
          path: 'getallpurchasecoupons',
          component: GetAllPurchesedCouponsComponent,
        },  
        {
          path: 'getallpurchasecouponsbytype',
          component: GetAllPurchesedCouponsByTypeComponent,
        },
        {
          path: 'getallpurchasecouponsbyprice',
          component: GetAllPurchesedCouponsByPriceComponent,
        }
      ]
    )
  ],
  providers: [AppServicesService,{ provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
