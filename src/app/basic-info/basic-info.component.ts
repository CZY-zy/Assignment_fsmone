import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { AccountInfoComponent } from '../account-info/account-info.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  accountInfoObject;
  citizenship!: string;
  nric!:string;

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private http: HttpClient, 
    private msg: NzMessageService
  ) {
    localStorage.setItem('step',"basicInformation",);

    var retrieveObject = (localStorage.getItem('accountInfoObject') || '{}');

    this.accountInfoObject = JSON.parse(retrieveObject);

    console.log(this.accountInfoObject)
  }

  basicInfoForm = new FormGroup({
    citizenship: new FormControl('', Validators.compose([
      Validators.required
    ])),
    nric: new FormControl('', Validators.compose([
      Validators.required
    ])),
    gender: new FormControl('',Validators.compose([
      Validators.required
    ])),
    salutation: new FormControl('', Validators.compose([
      Validators.required
    ])),
    name: new FormControl('', Validators.compose([
      Validators.required
    ])),
    birthday: new FormControl('', Validators.compose([
      Validators.required
    ])),
    race: new FormControl('', Validators.compose([
      Validators.required
    ])),
    countryOfBirth: new FormControl('Malaysia',Validators.compose([
      Validators.required
    ])),
    marital_status: new FormControl('', Validators.compose([
      Validators.required
    ])),
    residential_country: new FormControl('', Validators.compose([
      Validators.required
    ])),
    dialing_code: new FormControl('',Validators.compose([
      Validators.required
    ])),
    mobileNo: new FormControl('', Validators.compose([
      Validators.required
    ])),
    postal_code: new FormControl('',Validators.compose([
      Validators.required
    ])),
    city: new FormControl('', Validators.compose([
      Validators.required
    ])),
    state: new FormControl('',Validators.compose([
      Validators.required
    ])),
    mailing_address: new FormControl('',Validators.compose([
      Validators.required
    ])),
    mailingCountry: new FormControl('',Validators.compose([
      Validators.required
    ])),
    postal_code_mail: new FormControl('',Validators.compose([
      Validators.required
    ])),
    city_mail: new FormControl('', Validators.compose([
      Validators.required
    ])),
    state_mail: new FormControl('',Validators.compose([
      Validators.required
    ])),
    resident_status: new FormControl('',Validators.compose([
      Validators.required
    ])),
  });

  ngOnInit(): void {
    //this.validateForm = this.fb.group({});
    this.addField();
    this.addFieldMail();
  }

  submitBasicInfo():void{

  }

  //code for add field(residential address)
  //validateForm!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  firstLineAddress!:boolean;
  secondLineAddress!:boolean;

  listOfControl_mail: Array<{ id: number; controlInstance: string }> = [];
  firstLineAddress_mail!:boolean;
  secondLineAddress_mail!:boolean;

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }

    this.firstLineAddress = true;
    
    if(this.listOfControl.length<2){
      const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

      const control = {
        id,
        controlInstance: `residential_address${id}`
      };
      const index = this.listOfControl.push(control);
      console.log(this.listOfControl[this.listOfControl.length - 1]);
      this.basicInfoForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
    }else{
      this.secondLineAddress = true;
    }
  }

  addFieldMail(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }

    this.firstLineAddress_mail = true;
    
    if(this.listOfControl_mail.length<2){
      const id = this.listOfControl_mail.length > 0 ? this.listOfControl_mail[this.listOfControl_mail.length - 1].id + 1 : 0;

      const control = {
        id,
        controlInstance: `mailing_address${id}`
      };
      const index = this.listOfControl_mail.push(control);
      console.log(this.listOfControl_mail[this.listOfControl_mail.length - 1]);
      this.basicInfoForm.addControl(
      this.listOfControl_mail[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
    }else{
      this.secondLineAddress_mail = true;
    }
  }

  uploading = false;
  fileList: NzUploadFile[] = [];

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  back(){
    this.location.back();
  }

  saveAndContinue(){
    console.log(this.basicInfoForm.value);
    this.router.navigateByUrl('financial-info');
  }

  radioValue!:string;
  $event: any;

  check_mailing_address($event: any){

    console.log('test')

    console.log(this.basicInfoForm.get('mailing_address'))

  }
}
