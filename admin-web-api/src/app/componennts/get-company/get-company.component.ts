import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/common/company';
import swal from 'sweetalert2';
import { AppServicesService } from './../../../services/app-services.service';
@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {
  theId:number
  companyAdd:Company
  updatedPassword:string
  updatedemail:string
  constructor(private _services: AppServicesService) {
   }

  ngOnInit() {
  }
  getCompany(){
   this._services.getCompany(this.theId).subscribe(
      (resp)=>{
           this.companyAdd=resp.json()
      },(error)=>
      {
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
      })}
  changePassword(){
    this.companyAdd.password=this.updatedPassword
    this._services.changePassword(this.companyAdd);
  }

  changeEmail(){
    this.companyAdd.email=this.updatedemail
    this._services.changeEmail(this.companyAdd);
  }
}
