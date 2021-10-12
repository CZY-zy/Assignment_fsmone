import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

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
      Validators.minLength(12),
      Validators.pattern("^[0-9]$")
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

  constructor(private router: Router) {
    localStorage.setItem('step',"accountInformation");
   }

  ngOnInit(): void {
    /*this.accountInfoForm = new FormGroup({
      user_id: new FormControl(
        this.accountInfoForm.value.user_id,[
          Validators.required, 
          Validators.minLength(8)
        ]
      )
    });*/
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

  user_validation!: boolean;
  password_validation!: boolean;
  password2_validation!: boolean;
  nric_validation!:boolean;
  salutation_validation!:boolean;
  name_validation!:boolean;
  mobile_no_validation!:boolean;
  email_validation!:boolean;

  blankMessage = "Please make sure this field is not blank.";

  submitAccountInfo(): void{

    this.user_validation = this.validateUserID();

    this.password_validation = this.validatePassword();

    this.password2_validation = this.validateConfirmPassword();

    this.nric_validation = this.validateNric();

    this.salutation_validation = this.validateSalutation();

    this.name_validation = this.validateName();

    this.mobile_no_validation = this.validateMobileNo();

    this.email_validation = this.validateEmail();

    if(!(this.user_validation&&this.password2_validation&&this.nric_validation&&this.salutation_validation&&this.name_validation&&this.mobile_no_validation&&this.email_validation)){
      this.createAccountInfo();
    }
  }

  createAccountInfo(): void{

    var accountInfoObject ={

    user_id: this.accountInfoForm.value.user_id,

    password: this.accountInfoForm.value.password,

    citizenship: this.accountInfoForm.value.citizenship,

    nric: this.accountInfoForm.value.nric,

    nric_type: this.accountInfoForm.value.nric_type,

    salutation: this.accountInfoForm.value.salutation,

    name: this.accountInfoForm.value.name,

    dialing_code: this.accountInfoForm.value.dialing_code,

    mobileNo: this.accountInfoForm.value.mobileNo,

    email: this.accountInfoForm.value.email,

    referrer_account_no: this.accountInfoForm.value.referrer_account_no,

    referrer_name: this.accountInfoForm.value.referrer_name,
    };

    localStorage.setItem('accountInfoObject', JSON.stringify(accountInfoObject));

    this.router.navigateByUrl('tax-info');
  }

  validateUserID():boolean{

    if(this.accountInfoForm.controls['user_id'].invalid){

      if(this.accountInfoForm.controls['user_id'].hasError('pattern')){
        return true;
      }
      return true;
    }else{
      return false;
    }
  }

  validatePassword():boolean{
    if(this.accountInfoForm.controls['password'].invalid){
      return true;
    }else{
      return false;
    }
  }

  validateConfirmPassword():boolean{
    if(this.accountInfoForm.controls['password2'].invalid){
      console.log("invalidpassworkd")
      return true;
    }else{

      if(this.accountInfoForm.value.password!=this.accountInfoForm.value.password2){
        console.log("different")
        return true;
      }

      return false;
    }
  }

  validateNric():boolean{
    if(this.accountInfoForm.controls['nric'].invalid){
      return true;
    }else{
      return false;
    }
  }

  validateSalutation(): boolean{
    if(this.accountInfoForm.controls['salutation'].invalid){
      return true;
    }else{
      return false;
    }
  }

  validateName(): boolean{
    if(this.accountInfoForm.controls['name'].invalid){
      return true;
    }else{
      return false;
    }
  }

  validateMobileNo(): boolean{
    if(this.accountInfoForm.controls['mobileNo'].invalid){
      return true;
    }else{
      return false;
    }
  }

  validateEmail(): boolean{
    if(this.accountInfoForm.controls['email'].invalid){
      return true;
    }else{
      return false;
    }
  }
}
