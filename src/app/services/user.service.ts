import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private tokenSrv: TokenService
  ) { }

  checkLogin(loginData: Object){


      const url: string = `http://18.185.48.95:4444/eatwithrandom/signin`;

      return this.http.post(url, loginData);
  }

  userStatus(){
    const url: string = `http://18.185.48.95:4444/eatwithrandom/status`;
    const jwt = this.tokenSrv.getToken();

        const headers = new HttpHeaders({
            Authorization: `Bearer ${jwt}`
        })
    return this.http.get(url, {headers})
  }
  //jwt


}
