import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validator, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tax-info',
  templateUrl: './tax-info.component.html',
  styleUrls: ['./tax-info.component.css']
})
export class TaxInfoComponent implements OnInit {

  @Output() counter = new EventEmitter<number>();
  step = 1;

  taxInfoForm = new FormGroup({
    us_citizenship_greencard_passport: new FormControl('No'),
    my_tax_resident: new FormControl('No')
  })

  constructor() {}

  ngOnInit(): void {
  }

  us_citizenship_greencard_passport!:string;
  my_tax_resident!:string;

  createTaxInfo(): void{
    this.us_citizenship_greencard_passport = this.taxInfoForm.value.us_citizenship_greencard_passport;
    this.my_tax_resident = this.taxInfoForm.value.my_tax_resident;
    
    this.counter.emit(2);
  }

}
