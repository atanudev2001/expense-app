import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user-service/user.service';


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

  constructor(private snackBar: MatSnackBar,private router:Router,private Apiservice:UserService){}

  ngOnInit(): void {
  }
  formsubmit(){
      if (!this.userlogin.valid) {
        this.snackBar.open('Invalid Credentials','', {duration:3000,verticalPosition: 'bottom'});
        this.router.navigate(['/login']);
      } else{
        this.Apiservice.login(this.userlogin.value).subscribe((res)=>{
          console.log(res);
          this.snackBar.open('Login Successful','', {duration:3000,verticalPosition: 'bottom'});
          this.router.navigate(['/home']);

        },(err)=>{
          console.log(err);
        });
      }
  }
}
