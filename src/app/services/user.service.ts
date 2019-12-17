import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private tokenSrv: TokenService
  ) {
  }

  checkLogin(loginData: Object) {
    const url: string = `https://eat2meet.herokuapp.com/eatwithrandom/signin`;
    return this.http.post(url, loginData);
  }

  // Todo: El status ya lo recibimos en el checkLogin
  userStatus() {
    const url: string = `https://eat2meet.herokuapp.com/eatwithrandom/status`;
    const jwt = this.tokenSrv.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwt}`
    });
    return this.http.get(url, {headers});
  }
}
