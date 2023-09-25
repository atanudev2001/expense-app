import { FakeUserService } from 'src/app/services/user-service/fake-user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  constructor(private snackBar: MatSnackBar,private router:Router,private userservice:FakeUserService){}

  ngOnInit(): void {
  }
  formsubmit(){

      if (!this.userlogin.valid) {
        this.snackBar.open('Invalid Credentials','', {duration:3000,verticalPosition: 'bottom'});
        this.router.navigate(['/login']);
      } else{
        this.userservice.login(this.userlogin.value).subscribe((res)=>{
          if(res.message === "Login successful"){
            this.snackBar.open('Login Succesful','', {duration:2000,verticalPosition: 'bottom'});
            this.router.navigate(['/home']);
          }else{
            this.snackBar.open('Invalid Credentials','', {duration:2000,verticalPosition: 'bottom'});
            this.router.navigate(['/login']);
          }
        },(err)=>{
          console.log(err);
        });

      }

  }
}
