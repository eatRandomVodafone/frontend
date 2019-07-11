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
      const url: string = `http://18.185.48.95:4444/eatwithrandom/registerQueue`;
      const body = newPool;
      const jwt = this.tokenSrv.getToken();

        const headers = new HttpHeaders({
            Authorization: `Bearer ${jwt}`
        })
      return this.http.post(url, body, {headers});

  }
  //jwt
}
