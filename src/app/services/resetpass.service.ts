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
      const url: string = `http://18.185.48.95:4444/eatwithrandom/recoverpwd`;
      const body = resetPassData;
      return this.http.post(url, body);

  }
  //jwt
}
