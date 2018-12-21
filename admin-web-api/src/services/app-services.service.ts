import { Injectable } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import swal from 'sweetalert2';
import { Http, RequestOptions } from '@angular/http';
import { Company } from 'src/app/common/company';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  constructor(private _http: Http) { }

  /**only admin can create new customer */
  addCustomer(customer: Customer) {
    this._http.post("http://localhost:8080/coupon/createCustomer", customer).subscribe
      (
        (resp) => {

          console.log(resp);

          swal({
            title: 'Sweet!',
            text: 'a new customer !',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false
          })
        }, (error) => {
          var txt = error._body;
          swal({
            title: 'error',
            text: txt,
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false
          })
        }
      )
  }
  /**only admin can create new companies */
  addCompany(company: Company) {
    this._http.post("http://localhost:8080/coupon/CreateCompany", company).subscribe(
      (resp) => {

        console.log(resp);

        swal({
          title: 'Sweet!',
          text: 'a new company !',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })
      }, (error) => {
        var err = error._body;
        swal({
          title: 'error!',
          text: err,
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })
      }
    )
  }
  /**admin can get all the compenies  details */
  getAllCompenies() {
    return this._http.get("http://localhost:8080/coupon/getAllCompanies");
  }
  /**admin can delete company and all their coupons */
  deleteCompany(company: Company) {
    return this._http.delete("http://localhost:8080/coupon/removeCompany", new RequestOptions({
      body: company
    }))
  }
  /**admin can get all the customers  details */
  getAllCustomers() {
    return this._http.get("http://localhost:8080/coupon/getAllCustomers");
  }
  /**admin can delete customers and all their coupons */
  deleteCustomer(customer: Customer) {
    return this._http.delete("http://localhost:8080/coupon/removeCustomer", new RequestOptions({
      body: customer
    }))
  }
  /**admin can get a specific company */
  getCompany(companyId: number) {
    return this._http.get("http://localhost:8080/coupon/getCompany/" + companyId);
  }
  /**part of company update */
  changePassword(company: Company) {
    this._http.put("http://localhost:8080/coupon/updateCompany", company).subscribe(
      (resp) => {
      }
    )
  }
  /**part of company update */
  changeEmail(company: Company) {
    this._http.put("http://localhost:8080/coupon/updateCompany", company).subscribe(
      (resp) => {
      }
    )
  }
  /**admin can get specific customer details */
  getCustomer(theId: number) {
    return this._http.get("http://localhost:8080/coupon/getCustomer/" + theId);
  }
  /**part of customer update */
  changeCustomerPassword(customer: Customer) {
    this._http.put("http://localhost:8080/coupon/updateCustomer", customer).subscribe(
      (resp) => {
      }
    )
  }

  logOut() {
    return this._http.delete("http://localhost:8080/coupon/logOut");

  }
} 