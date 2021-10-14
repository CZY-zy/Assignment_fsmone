import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountInformation } from '../model/account-information.model';
import { AccountInfoService } from '../service/account-info.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<AccountInformation>();
  @Output() counter = new EventEmitter<number>();
  step = 0;

  accountInfoObject: AccountInformation = new AccountInformation();

  accountInfoForm = new FormGroup({
    user_id: new FormControl('', Validators.compose([
      Validators.required, 
      Validators.minLength(8),
      Validators.pattern("^[A-Z]+[A-Z0-9]$")
    ])
    ),
    password: new FormControl('', Validators.compose([
      Validators.required
    ])),
    password2: new FormControl('', Validators.compose([
      Validators.required
    ])),
    citizenship: new FormControl('Yes'),
    nric: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(12)
    ])),
    nric_type: new FormControl('MyKad'),
    salutation: new FormControl('', Validators.compose([
      Validators.required
    ])),
    name: new FormControl('', Validators.compose([
      Validators.required
    ])),
    dialing_code: new FormControl('+60(Malaysia)'),
    mobileNo: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(9)
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ])),
    referrer_account_no: new FormControl(''),
    referrer_name: new FormControl('')
  });

  constructor(
    private accountInfoService: AccountInfoService
  ) {}

  ngOnInit(): void {
  }

  formValidator = 0;

  blankMessage = "Please make sure this field is not blank.";

  submitAccountInfo(): void{

    if(this.accountInfoForm.valid){
      this.createAccountInfo();
    }else{
      this.formValidator = 1;
    }
  }

  createAccountInfo(): void{

    this.accountInfoObject.user_id = this.accountInfoForm.value.user_id,

    this.accountInfoObject.password = this.accountInfoForm.value.password,

    this.accountInfoObject.citizenship = this.accountInfoForm.value.citizenship,

    this.accountInfoObject.nric = this.accountInfoForm.value.nric,

    this.accountInfoObject.nric_type = this.accountInfoForm.value.nric_type,

    this.accountInfoObject.salutation = this.accountInfoForm.value.salutation,

    this.accountInfoObject.name = this.accountInfoForm.value.name,

    this.accountInfoObject.dialing_code = this.accountInfoForm.value.dialing_code,

    this.accountInfoObject.mobile_no = this.accountInfoForm.value.mobileNo,

    this.accountInfoObject.email = this.accountInfoForm.value.email,

    this.accountInfoObject.referrer_account_no = this.accountInfoForm.value.referrer_account_no,

    this.accountInfoObject.referrer_name = this.accountInfoForm.value.referrer_name,

    this.newItemEvent.emit(this.accountInfoObject);
    this.accountInfoService.setAccountInfoObject(this.accountInfoObject);
    this.counter.emit(1);
  }
}
