import {JwtHelperService} from '@auth0/angular-jwt';
import { Credentials } from '../../model/credentials';
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
  upload: any;

  constructor(private jwtHelper: JwtHelperService) {
    this.credential = new Credentials('atanu@bosenet.com','123456');
  }
  login(data: Credentials): Observable<any> {

      this.sessiondata = sessionStorage.getItem('access_token');
      localStorage.setItem('access_token', this.sessiondata);
      this.token = this.jwtHelper.tokenGetter();
      const tokendata = JSON.parse(this.token)?.token;

      if (tokendata ) {
        const isExpired = this.jwtHelper.isTokenExpired(tokendata as string);
        if (!isExpired) {
          if (this.credential.userid === data.userid && this.credential.password === data.password){
            this.status = true;
              sessionStorage.removeItem('access_token');
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
  }
  fileupload(file:any):Observable<any>{
    const fileInput = file.target as HTMLInputElement;
      const upload = fileInput.files?.[0];

      if (upload) {
        const reader = new FileReader();

        reader.onloadend = () => {
          if (reader.result && typeof reader.result === 'string') {
            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
            localStorage.setItem('file', base64String);
            document.body.style.background = `url(data:image/png;base64,${base64String})`;
          }
        };

        reader.readAsDataURL(upload);
      }

    return of({ message: 'Upload successful' });
  }


}


