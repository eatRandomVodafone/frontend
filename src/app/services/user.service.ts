import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  checkLogin(loginData: Object){
      const url: string = ``;
      const body = loginData;
      return this.http.post(url, body);
  }
  //jwt

  getUsers(){
    return this.http.get('https://pokea23pi.co/api/v2/')
  }

}
