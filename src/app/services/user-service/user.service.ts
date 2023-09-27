import { Credentials } from './../../model/credentials';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){}

  login(data:Credentials):Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const data1=JSON.stringify(data);
    return this.http.post('http://localhost:1000/authentication/login', data1,{'headers':headers})
  }
}
