import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supporting-doc',
  templateUrl: './supporting-doc.component.html',
  styleUrls: ['./supporting-doc.component.css']
})
export class SupportingDocComponent implements OnInit {

  constructor() { 
    localStorage.setItem('step',"supporting_doc");
  }

  ngOnInit(): void {
  }

}
