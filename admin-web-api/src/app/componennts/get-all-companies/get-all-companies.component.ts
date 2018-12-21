import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/common/company';
import { AppServicesService } from './../../../services/app-services.service';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {
companyAdd :Company = new Company(0,"","","");
  companies:Company[];

  constructor(private _services:AppServicesService) { 
   this._services.getAllCompenies().subscribe(
      (resp)=>{
      this.companies =resp.json();
      } ) }
  ngOnInit() {
  }
  deleteCompany(i){
   let company:Company= this.companies[i];
this._services.deleteCompany(company).subscribe(
  (resp)=>{
    this.companies.splice(i,1);
  }
)
  
}
}
