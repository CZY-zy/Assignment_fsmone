import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-financial-info',
  templateUrl: './financial-info.component.html',
  styleUrls: ['./financial-info.component.css']
})
export class FinancialInfoComponent implements OnInit {

  //checked = true;

  financialInfoForm = new FormGroup({
    occupation: new FormControl(''),
    business_nature: new FormControl(''),
    company_name: new FormControl(''),
    annual_income: new FormControl(''),
    invesment_source_of_fund: new FormControl(''),
    estimated_networth: new FormControl(''),
    pep_status: new FormControl(''),
    epf_account_no: new FormControl(''),
    //epf_simpanan_shariah: new FormControl('')
  })

  submitFinancialInfoForm(): void {
    
  }

  constructor(private location: Location) {
    localStorage.setItem('step',"financialInformation",);
  }

  ngOnInit(): void {
  }

  back(){
    this.location.back();
  }

  saveAndContinue(): void{

  }

}
