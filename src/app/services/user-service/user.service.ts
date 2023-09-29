import { Credentials } from './../../model/credentials';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){}
  register(data:Credentials):Observable<any>{
    // alert(JSON.stringify(data));
    data.roles = [];
    data.roles.push('admin');
    const headers = { 'content-type': 'application/json'};
    // if(data.roles === undefined || data.roles === null){
    //   alert('this is undefined')
    // }

    const data1=JSON.stringify(data);
    // alert('-------------'+data1);
    return this.http.post('http://localhost:1000/authentication/register',data1,{headers});
  }

  login(data:Credentials):Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const data1=JSON.stringify(data);
    // alert('login success'+data1);
    return this.http.post('http://localhost:1000/authentication/login', data1,{headers})
  }
}
