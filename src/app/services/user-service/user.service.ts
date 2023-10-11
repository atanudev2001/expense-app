import { Credentials } from './../../model/credentials';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){}
  register(data:Credentials):Observable<any>{
    data.roles = [];
    data.roles.push('admin');
    const headers = { 'content-type': 'application/json'};

    const data1=JSON.stringify(data);
    return this.http.post('http://localhost:1000/authentication/register',data1,{headers});
  }

  login(data:Credentials):Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const data1=JSON.stringify(data);
    return this.http.post('http://localhost:1000/authentication/login', data1,{headers})
  }
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append( 'fileDto', JSON.stringify({ userId: 1, fileDescription: 'screenshot', }) );

    console.log(formData);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post('http://localhost:1000/files/upload', formData, { headers, });
  }


}
