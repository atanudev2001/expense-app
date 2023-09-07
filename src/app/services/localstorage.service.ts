import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private http: HttpClient) { }

  login(){
    this.http.get("http://localhost:3000/tokens").subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}
