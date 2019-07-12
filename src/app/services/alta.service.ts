import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AltaService {

  constructor(
    private http: HttpClient,
    private tokenSrv: TokenService
  ) { }

  insertPool(newPool: Object){
      const url: string = `https://eat2meet.herokuapp.com/eatwithrandom/registerQueue`;
      const body = newPool;
      const jwt = this.tokenSrv.getToken();

        const headers = new HttpHeaders({
            Authorization: `Bearer ${jwt}`
        })
      return this.http.post(url, body, {headers});

  }
  //jwt
}
