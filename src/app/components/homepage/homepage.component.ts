import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { FakeUserService } from 'src/app/services/user-service/fake-user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  selectedFile: any = null;
  constructor(private router: Router,public dialog: MatDialog,private fileupload:FakeUserService){}

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null; //using nullish coalescing operator
      const fileInput = event.target as HTMLInputElement;
      const file = fileInput.files?.[0];

      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          if (reader.result && typeof reader.result === 'string') {
            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
            localStorage.setItem('file', base64String);
           alert( `url(data:image/png;base64,${base64String})`);
          }
        };

        reader.readAsDataURL(file);
      }
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }


  ngOnInit(): void {
    localStorage.removeItem('token');
  }

  Fileupload(){

    // if (this.selectedFile) {
      this.fileupload.fileupload(this.selectedFile).subscribe(
        (response) => {
          console.log('File uploaded successfully', response);
        },
        (error) => {
          console.error('Error uploading file', error);
        }
      );
    // }
  }

}
