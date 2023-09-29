import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  selectedFile: any = null;
  constructor(private router: Router){}

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null; //using nullish coalescing operator
  }





  ngOnInit(): void {
    localStorage.removeItem('token');
  }

}
