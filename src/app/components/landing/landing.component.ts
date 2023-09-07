import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import {JwtHelperService} from '@auth0/angular-jwt';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  loginform = new FormGroup({
    token:new FormControl(),
    userid:new FormControl()
  });
  // constructor(private jwtHelper: JwtHelperService){}

  loginsubmit(){
    localStorage.setItem('data',JSON.stringify(this.loginform.value));
    // let token2 = localStorage.getItem('token');
    // if (this.jwtHelper.isTokenExpired(token2)) {
    //   alert('Token expired');
    // } else {
    //   alert('Token valid');
    // }
  }

  ngOnInit(): void {

  }

}
