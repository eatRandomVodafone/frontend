import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private tokenSrv: TokenService,
                private router: Router){}

    intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>{

        console.log();

        const jwt = this.tokenSrv.getToken();
        
        const headers = new HttpHeaders({
            Authorization: `Bearer ${jwt}`
        })
        let reqClone = req.clone({headers});
    
        return next.handle(reqClone);
       
    }

}
