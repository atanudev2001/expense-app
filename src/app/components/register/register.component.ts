import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userregister = new FormGroup({
    userid:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    // roles:new FormControl('',[Validators.required]),
  });
  constructor(private snackBar: MatSnackBar,private router:Router,private Apiservice:UserService) { }

  ngOnInit(): void {
  }
  register(){
    // alert(this.userregister.value);
    //   alert(JSON.stringify(this.userregister.value));
    if (!this.userregister.valid){
      this.snackBar.open('Please fill up the credentials','', {duration:3000,verticalPosition: 'bottom'});
      this.router.navigate(['/register']);
    }else{
      this.Apiservice.register(this.userregister.value).subscribe((res)=>{
        console.log(res);
        localStorage.setItem('token',res.token);
        this.snackBar.open('Registration Successful','', {duration:3000,verticalPosition: 'bottom'});
        this.router.navigate(['/login']);
      },(err)=>{
        console.log(err);
      });
    }
    /*
    if (!this.userregister.valid) {
      this.snackBar.open('Please fill up the credentials','', {duration:3000,verticalPosition: 'bottom'});
      this.router.navigate(['/register']);
    } else{
      alert(this.userregister.value);
      alert(JSON.stringify(this.userregister.value));
      this.Apiservice.register(this.userregister.value).subscribe((res)=>{
        console.log(res);
        this.snackBar.open('Registration Successful','', {duration:3000,verticalPosition: 'bottom'});
        this.router.navigate(['/login']);
      },(err)=>{
        console.log(err);
      });
    }
    */
  }
}
