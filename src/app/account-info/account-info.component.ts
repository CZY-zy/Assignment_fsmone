import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  accountInfoForm = new FormGroup({
    user_id: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    citizenship: new FormControl('Yes'),
    nric: new FormControl(''),
    nric_type: new FormControl('MyKad'),
    salutation: new FormControl('Salutation'),
    name: new FormControl(''),
    dialing_code: new FormControl('+60(Malaysia)'),
    mobileNo: new FormControl(''),
    email: new FormControl(''),
    referrer_account_no: new FormControl(''),
    referrer_name: new FormControl('')
  });

  constructor(private router: Router) {
    localStorage.setItem('step',"accountInformation");
   }

  ngOnInit(): void {
  }

  user_id!:string;
  password!:string;
  citizenship!:string;
  nric!:string;
  nric_type!:string;
  salutation!:string;
  name!:string;
  dialing_code!:string;
  mobileNo!:string;
  email!:string;
  referrer_account_no!:string;
  referrer_name!:string;

  createAccountInfo(): void{

    this.user_id = this.accountInfoForm.value.user_id;

    if(this.confirmPassword()){
      this.password=this.accountInfoForm.value.password;
    }

    this.citizenship = this.accountInfoForm.value.citizenship;

    this.nric = this.accountInfoForm.value.nric;

    this.nric_type = this.accountInfoForm.value.nric_type;

    this.salutation = this.accountInfoForm.value.salutation;

    this.salutation = this.accountInfoForm.value.salutation;

    this.dialing_code = this.accountInfoForm.value.dialing_code;

    this.mobileNo = this.accountInfoForm.value.mobileNo;

    this.email = this.accountInfoForm.value.email;

    this.referrer_account_no = this.accountInfoForm.value.referrer_account_no;

    this.referrer_name = this.accountInfoForm.value.referrer_name;

    this.router.navigateByUrl('tax-info');
  }

  confirmPassword(): boolean{
    if(this.accountInfoForm.value.password==this.accountInfoForm.value.password2){
      return true;
    }else{
      return false;
    }
  }
}
