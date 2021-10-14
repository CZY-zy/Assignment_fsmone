import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-financial-info',
  templateUrl: './financial-info.component.html',
  styleUrls: ['./financial-info.component.css']
})
export class FinancialInfoComponent implements OnInit {

  @Output() counter = new EventEmitter<number>();

  //checked = true;

  financialInfoForm = new FormGroup({
    occupation: new FormControl('', Validators.compose([
      Validators.required
    ])),
    business_nature: new FormControl('', Validators.compose([
      Validators.required
    ])),
    company_name: new FormControl('',Validators.compose([
      Validators.required
    ])),
    annual_income: new FormControl('', Validators.compose([
      Validators.required
    ])),
    invesment_source_of_fund: new FormControl('', Validators.compose([
      Validators.required
    ])),
    estimated_networth: new FormControl('', Validators.compose([
      Validators.required
    ])),
    pep_status: new FormControl('No', Validators.compose([
      Validators.required
    ])),
    epf_account_no: new FormControl(''),
    //epf_simpanan_shariah: new FormControl('')
  })

  constructor(private location: Location) {
    localStorage.setItem('step',"financialInformation",);
  }

  ngOnInit(): void {
  }

  back(){
    // this.location.back();
    this.counter.emit(3);
  }

  validateOccupation():boolean{
    if(this.financialInfoForm.controls['occupation'].invalid){
      return true;
    }else{
      return false;
    }
  }

  validateBusinessNature():boolean{
    if(this.financialInfoForm.controls['business_nature'].invalid){
      return true;
    }else{
      return false;
    }
  }

  validateCompanyName():boolean{
    if(this.financialInfoForm.controls['company_name'].invalid){
      return true;
    }else{
      return false;
    }
  }

  validateAnnualIncome():boolean{
    if(this.financialInfoForm.controls['annual_income'].invalid){
      return true;
    }else{
      return false;
    }
  }

  validateInvesmenSourceOfFund():boolean{
    if(this.financialInfoForm.controls['invesment_source_of_fund'].invalid){
      return true;
    }else{
      return false;
    }
  }

  validateEstimatedNetworth():boolean{
    if(this.financialInfoForm.controls['estimated_networth'].invalid){
      return true;
    }else{
      return false;
    }
  }

  blankMessage = "Please make sure this field is not blank.";
  occupation_validation!:boolean;
  business_nature_validation!:boolean;
  company_name_validation!:boolean;
  annual_income_validation!:boolean;
  invesment_source_of_fund_validation!:boolean;
  estimated_networth_validation!:boolean;

  submitFinancialInfoForm(): void {
    this.occupation_validation = this.validateOccupation();
    this.business_nature_validation = this.validateBusinessNature();
    this.company_name_validation = this.validateCompanyName();
    this.annual_income_validation = this.validateAnnualIncome();
    this.invesment_source_of_fund_validation = this.validateInvesmenSourceOfFund();
    this.estimated_networth_validation = this.validateEstimatedNetworth();
  }

  saveAndContinue(): void{

    this.submitFinancialInfoForm();
  }

}
