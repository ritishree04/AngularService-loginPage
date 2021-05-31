import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor() { }
  login(u: string, p: string ):string{
    let response:string ="";
    //take the username and password and pass it to API
  if(u=='riti' && p=='123'){
    response='successfully login'
  }
  else{
    response="Incorrect username and password "
  }
  return response;
  }

}
