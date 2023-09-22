import {JwtHelperService} from '@auth0/angular-jwt';
import { Credentials } from '../model/credentials';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';

export interface UserServiceInterface {
  login(data: Credentials): Observable<any>;
}
@Injectable({
  providedIn: 'root'
})

export class FakeUserService implements UserServiceInterface {
  private credential!: Credentials;
  sessiondata: any;
  isExpired!: boolean;
  status:boolean = false;
  token:any;

  constructor(private jwtHelper: JwtHelperService) {
    this.credential = new Credentials('atanu@bosenet.com','123456');
  }
  login(data: Credentials): Observable<any> {

      this.sessiondata = sessionStorage.getItem('access_token');
      localStorage.setItem('access_token', this.sessiondata);
      sessionStorage.removeItem('access_token');
      this.token = this.jwtHelper.tokenGetter();
      const tokendata = JSON.parse(this.token)?.token;

      // alert(tokendata);

      console.log(this.credential);
      console.log(data);
      console.log(tokendata);
      if (tokendata ) {
        const isExpired = this.jwtHelper.isTokenExpired(tokendata as string);
        alert(isExpired)
        if (!isExpired) {
          if (this.credential.userid === data.userid && this.credential.password === data.password){
            this.status = true;
            localStorage.removeItem('access_token');
          }else{
            this.status = false;
          }
        }
      }
      if (this.status) {
        return of({ message: 'Login successful' });
      } else {
          return of({ message: 'Unsuccessful' });
      }
    throw new Error('Method not implemented.');
  }



}


