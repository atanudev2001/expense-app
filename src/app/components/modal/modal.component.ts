import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  getfile:any;
  imageurl: any;
  // constructor() { }

  ngOnInit(): void {
     this.getfile = localStorage.getItem('file');
     this.imageurl = `data:image/png;base64,${this.getfile}`;
  }
}
