import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
  ) { }

  doRegister(registroData: Object){
      const url: string = `http://18.185.48.95:4444/eatwithrandom/signup`;
      const body = registroData;
      return this.http.post(url, body);

  }
  //jwt
}
