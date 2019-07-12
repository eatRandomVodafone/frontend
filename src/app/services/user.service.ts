import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  checkLogin(loginData: Object){
      const url: string = `/eatwithrandom/signin`;
      const body = loginData;
      return this.http.post(url, body);
  }
  //jwt
}
