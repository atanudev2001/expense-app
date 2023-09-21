import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin = new FormGroup({
    userid:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });
  constructor(private snackBar: MatSnackBar,private router:Router){}

  ngOnInit(): void {
  }
  userloginfun(){
    if(this.userlogin.valid){
      this.snackBar.open('Login Successful','', {duration:5000,verticalPosition: 'bottom'});
      this.router.navigate(['/home']);
    }
  }

}
