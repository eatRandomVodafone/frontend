import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenSrv: TokenService,
    private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Interceptor');

    const jwt = this.tokenSrv.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
      crossOrigin: 'false'
    });
    const reqClone = req.clone({ headers });

    console.log('Peticion: ', reqClone);

    return next.handle(reqClone);

  }
}
