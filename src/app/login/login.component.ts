import { Component, OnInit } from '@angular/core';

import { LogserviceService } from '../logservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response:string;

  constructor(private log:LogserviceService) {
    this.response="";
   }

  ngOnInit():void {}
    loginHere(u:string , p:string){

   this.response= this.log.login(u,p);

    
  }

}
