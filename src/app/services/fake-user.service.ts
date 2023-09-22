import { Credentials } from '../model/credentials';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserServiceInterface {
  login(data: Credentials): Observable<any>;
}
@Injectable({
  providedIn: 'root'
})

export class FakeUserService implements UserServiceInterface {
  // private credential!: Credentials;
  constructor(private credential: Credentials) {
    this.credential = new Credentials('atanu@bosenet.com','123456');
  }
  login(data: Credentials): Observable<any> {
    if (this.credential.userid === data.userid && this.credential.password === data.password){
      console.log(data);

    }
    throw new Error('Method not implemented.');
  }

}


