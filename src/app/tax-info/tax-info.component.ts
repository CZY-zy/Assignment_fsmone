import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TaxInfo } from '../model/tax-info.model';
import { TaxInfoService } from '../service/tax-info.service';

@Component({
  selector: 'app-tax-info',
  templateUrl: './tax-info.component.html',
  styleUrls: ['./tax-info.component.css']
})
export class TaxInfoComponent implements OnInit {

  @Output() counter = new EventEmitter<number>();
  step = 1;

  taxInfoObject: TaxInfo = new TaxInfo();

  taxInfoForm = new FormGroup({
    us_citizenship_greencard_passport: new FormControl('No'),
    my_tax_resident: new FormControl('No')
  })

  constructor(private taxInfoService: TaxInfoService) {}

  ngOnInit(): void {
  }

  createTaxInfo(): void{
    this.taxInfoObject.us_citizenship_greencard_passport = this.taxInfoForm.value.us_citizenship_greencard_passport;
    this.taxInfoObject.my_tax_resident = this.taxInfoForm.value.my_tax_resident;

    this.taxInfoService.setTaxInfoObject(this.taxInfoObject)
    
    this.counter.emit(2);
  }

}
