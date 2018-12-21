import { Component } from '@angular/core';
import { AppServicesService } from './services/app-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'company-web-api';
  constructor(private _service:AppServicesService) {
  }
  logOut(){
    this._service.logOut().subscribe(
      (resp)=>{
        console.log(resp);
      }
    )
  }
}
