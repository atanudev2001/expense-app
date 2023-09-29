import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  islogin():boolean {
    return localStorage.getItem('token')? true : false;
  }
}
