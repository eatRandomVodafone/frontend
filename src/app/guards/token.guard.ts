import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanLoad {

  constructor(private router: Router,
              private tokenSrv: TokenService ){

  }

 async canLoad(route: Route) {

    const token = await this.tokenSrv.getToken();

    if(token){
      return Promise.resolve(true);
    }

    this.router.navigate(['/login'])
    return Promise.resolve(false);

 }


}
