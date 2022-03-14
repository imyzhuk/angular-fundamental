import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() {
  }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  deleteToken(){
    sessionStorage.removeItem('token');
  }
}
