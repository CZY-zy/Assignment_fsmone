import { Injectable } from '@angular/core';
import { AccountInformation } from '../model/account-information.model';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

  accountInfoObject: AccountInformation = new AccountInformation();

  setAccountInfoObject(accountInfoObject: AccountInformation){
    this.accountInfoObject = accountInfoObject;
    //console.log(this.accountInfoObject)
  }

  constructor() { }
}
