import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FakeUserService } from 'src/app/services/fake-user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [FakeUserService]
})
export class LandingComponent implements OnInit {

  isvalid:boolean = false;
  loginform = new FormGroup({
    token:new FormControl(),
    userid:new FormControl()
  });

  user: any;
  isExpired!: boolean;
  expirationDate!: Date;

  constructor(private jwtHelper: JwtHelperService, private router: Router,private snackBar: MatSnackBar){

  }

  ngOnInit(): void {

  }

  onSubmit(){
    localStorage.setItem('access_token',JSON.stringify(this.loginform.value));
    const token = this.jwtHelper.tokenGetter();
    if (token) {
      this.user = this.jwtHelper.decodeToken(token as string);
      this.isExpired = this.jwtHelper.isTokenExpired(token as string);
      console.log(this.isExpired);
      if(!this.isExpired) {
        this.snackBar.open('Token is valid','', {duration:5000,verticalPosition: 'bottom'});
        this.router.navigate(['/login']);
      } else{
        this.snackBar.open('Token is Expired','', {duration:5000,verticalPosition: 'bottom'});
        this.router.navigate(['/landing']);
      }
    }
  }

}

