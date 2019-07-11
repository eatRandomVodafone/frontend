import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AltaService {

  constructor(
    private http: HttpClient,
  ) { }

  insertPool(newPool: Object){
      const url: string = `http://18.185.48.95:4444/eatwithrandom/registerQueue`;
      const body = newPool;
      return this.http.post(url, body);

  }
  //jwt
}
