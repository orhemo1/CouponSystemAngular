import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/common/company';
import { AppServicesService } from './../../../services/app-services.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
   /**this is an empty company that will get the detail from the user and sent to the data base  */
  companyAdd= new Company(0,"","","");
  constructor(private _services:AppServicesService) { }

  ngOnInit() {
  }
  addCompany(){
this._services.addCompany(this.companyAdd);
    this.companyAdd.jsonid=0
    this.companyAdd.jsonname = ""
    this.companyAdd.jsonpassword = ""
    this.companyAdd.jsonemail=""

  }
}
