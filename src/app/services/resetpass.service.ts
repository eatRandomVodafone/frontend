import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResetPassService {

  constructor(
    private http: HttpClient,
  ) { }

  resetPass(resetPassData: Object){
      const url: string = `https://eat2meet.herokuapp.com/eatwithrandom/recoverpwd`;
      const body = resetPassData;
      return this.http.post(url, body);

  }
  //jwt
}
