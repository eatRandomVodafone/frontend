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
      const url: string = `http://18.185.48.95:4444/eatwithrandom/signin`;
      let params = new HttpParams().append('username', loginData['email']);
      params = params.append('password', loginData['password']);
      return this.http.post(url,{ params});
  }
  //jwt


}
