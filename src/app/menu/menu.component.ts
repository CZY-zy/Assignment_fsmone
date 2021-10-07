import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkStep(): void{
  }

  isAccountInfo(): boolean{
    if(localStorage.getItem('step')=="accountInformation"){
      return true;
    }else{
      return false;
    }
  }

  isTaxInfo(): boolean{
    if(localStorage.getItem('step')=="taxInformation"){
      return true;
    }else{
      return false;
    }
  }

  isSupportDoc(): boolean{
    if(localStorage.getItem('step')=="supporting_doc"){
      return true;
    }else{
      return false;
    }
  }
}
