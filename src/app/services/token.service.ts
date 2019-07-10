import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  async setToken(token: string){

    const result = await localStorage.setItem('token', token);

    return result;

  }

  getToken(){

    return localStorage.getItem('token')

  }



}
