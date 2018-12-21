import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import swal from 'sweetalert2';
import { AppServicesService } from './../../../services/app-services.service';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {
  theId:number;
  constructor(private _services: AppServicesService) { }
  customerAdd:Customer
  updatedPassword:string
  ngOnInit() {
  } 
  getCustomer(){
this._services.getCustomer(this.theId).subscribe(
  (resp)=> {
    this.customerAdd=resp.json()
  },(error)=>{
    var err=error._body;
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

  changePassword(){
    this.customerAdd.password=this.updatedPassword
   this._services.changeCustomerPassword(this.customerAdd);
  }



}
