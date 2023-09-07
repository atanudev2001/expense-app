import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
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
  constructor(private jwtHelper: JwtHelperService,
  private router: Router){}

  onSubmit(){
    localStorage.setItem('data',JSON.stringify(this.loginform.value));
    let token2 = localStorage.getItem('token');
    if (this.jwtHelper.isTokenExpired(token2)) {
      alert('Token expired');
      this.router.navigate(['']);
    } else {
      alert('Token not expired');
      this.router.navigate(['/home']);
    }


  }

  ngOnInit(): void {

  }

}
