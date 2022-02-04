import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setToken(data:string){
    sessionStorage.setItem('token', data);
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  deleteToken(){
    sessionStorage.removeItem('token');
  }
}
