import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {

  temp:any = {};
  loginform = new FormGroup({
    token:new FormControl('',[Validators.required]),
    userid:new FormControl('',[Validators.required])
  });



  constructor( private router: Router,private snackBar: MatSnackBar){

  }

  ngOnInit(): void {

  }


  onSubmit(){
    this.temp =JSON.stringify(this.loginform.value);
    sessionStorage.setItem('access_token',this.temp);
    // console.log(this.temp)
    if (this.loginform.valid) {
        this.router.navigate(['/login']);
      } else{
        this.snackBar.open('Invalid Credentials','', {duration:5000,verticalPosition: 'bottom'});
        this.router.navigate(['/landing']);
      }
    }

}

