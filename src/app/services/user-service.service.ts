import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseURL = 'http://localhost:1011/files/';

  constructor(private http:HttpClient) { }

  login(data: Credential): Observable<any>{
    return this.http.post(this.baseURL,data);
  }
}
