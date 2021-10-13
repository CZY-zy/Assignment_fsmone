import { Component, OnInit } from '@angular/core';
import { AccountInformation } from '../model/account-information.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  retrievedAccountInformation: AccountInformation = new AccountInformation();

  counter!: number;

  setBasicInformationValue(event: AccountInformation){
    this.retrievedAccountInformation = event;

    console.log(this.retrievedAccountInformation);
  }

  setCounter(event: number){
    this.counter = event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
