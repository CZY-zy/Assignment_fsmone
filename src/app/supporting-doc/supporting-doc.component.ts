import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-supporting-doc',
  templateUrl: './supporting-doc.component.html',
  styleUrls: ['./supporting-doc.component.css']
})
export class SupportingDocComponent implements OnInit {

  constructor() { 
    localStorage.setItem('step',"supporting_doc");
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  ngOnInit(): void {
  }
}
