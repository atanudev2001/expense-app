import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  selectedFile: any = null;
  constructor(private jwtHelper: JwtHelperService,
    private router: Router){}

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null; //using nullish coalescing operator
  }




  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if(token){
      if (this.jwtHelper.isTokenExpired(token)) {
        this.router.navigate(['/landing']);
      }
    }else{
      this.router.navigate(['/landing']);
    }
  }

}
