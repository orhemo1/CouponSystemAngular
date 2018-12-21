import { Component } from '@angular/core';
import { AppServicesService } from './../services/app-services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-web-api';
  constructor(private _services: AppServicesService) {
  }
  logOut(){
 this._services.logOut().subscribe(
   (resp)=>{
     console.log(resp);
     
   }
 )
  }
}
