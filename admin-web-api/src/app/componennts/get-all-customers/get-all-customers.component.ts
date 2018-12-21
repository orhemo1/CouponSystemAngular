import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { AppServicesService } from './../../../services/app-services.service';
@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  customerAdd: Customer = new Customer(0, "", "");
  customers: Customer[];

  constructor(private _services: AppServicesService) {
    this._services.getAllCustomers().subscribe(
      (resp) => {
        this.customers = resp.json();
      })
  }

  ngOnInit() {
  }
  deleteCustomer(i) {
    let customer: Customer = this.customers[i];
    this._services.deleteCustomer(customer).subscribe(
      (resp) => {
        this.customers.splice(i, 1);
      }
    )
  }
}
