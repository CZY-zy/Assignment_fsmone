import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-financial-info',
  templateUrl: './financial-info.component.html',
  styleUrls: ['./financial-info.component.css']
})
export class FinancialInfoComponent implements OnInit {

  @Output() counter = new EventEmitter<number>();
  step = 4;

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

  constructor() {}

  ngOnInit(): void {
  }

  back(){
    this.counter.emit(3);
  }

  blankMessage = "Please make sure this field is not blank.";
  formValidator = 0;

  submitFinancialInfoForm(): void {

  }

  saveAndContinue(): void{

    if(this.financialInfoForm.valid){
      this.formValidator = 0;
      this.counter.emit(5);
    }else{
      this.formValidator = 1;
    }
  }

}
