import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { CreateCompanyComponent } from './componennts/create-company/create-company.component';
import { GetCompanyComponent } from './componennts/get-company/get-company.component';
import { GetAllCompaniesComponent } from './componennts/get-all-companies/get-all-companies.component';
import { CreatCustomerComponent } from './componennts/creat-customer/creat-customer.component';
import { GetCustomerComponent } from './componennts/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './componennts/get-all-customers/get-all-customers.component';
import { AppServicesService } from './../services/app-services.service';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    
    GetCompanyComponent,
    GetAllCompaniesComponent,
    CreatCustomerComponent,
    GetCustomerComponent,
    GetAllCustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path: 'createcompany',
          component: CreateCompanyComponent,
        },
         {
          path: 'getcompany',
          component: GetCompanyComponent,
        },  {
          path: 'getallcompanies',
          component: GetAllCompaniesComponent,
        },  {
          path: 'createcustomer',
          component: CreatCustomerComponent,
        },     
        {
          path: 'getcustomer',
          component: GetCustomerComponent,
        },
        {
          path: 'getallcustomers',
          component: GetAllCustomersComponent,
        }
            
      ]
    )
  ],
  providers: [AppServicesService,{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
