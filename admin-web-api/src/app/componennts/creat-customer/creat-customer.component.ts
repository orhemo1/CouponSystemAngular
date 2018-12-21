import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { AppServicesService } from './../../../services/app-services.service';
@Component({
  selector: 'app-creat-customer',
  templateUrl: './creat-customer.component.html',
  styleUrls: ['./creat-customer.component.css']
})
export class CreatCustomerComponent implements OnInit {
 /**this is an empty customer that will get the detail from the user and sent to the data base  */
  customerAdd =new Customer(0,"","");
  constructor(private _services:AppServicesService) { }

  ngOnInit() {
   
  }
  addCustomer(){
    this._services.addCustomer(this.customerAdd)
    this.customerAdd.id = 0
    this.customerAdd.username = ""
    this.customerAdd.userpassword = ""
  }
}

