import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validator, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tax-info',
  templateUrl: './tax-info.component.html',
  styleUrls: ['./tax-info.component.css']
})
export class TaxInfoComponent implements OnInit {

  @Output() counter = new EventEmitter<number>();

  taxInfoForm = new FormGroup({
    us_citizenship_greencard_passport: new FormControl('No'),
    my_tax_resident: new FormControl('No')
  })

  constructor(private router: Router) {
    localStorage.setItem('step',"taxInformation");
   }

  ngOnInit(): void {
  }

  us_citizenship_greencard_passport!:string;
  my_tax_resident!:string;

  createTaxInfo(): void{
    this.us_citizenship_greencard_passport = this.taxInfoForm.value.us_citizenship_greencard_passport;
    this.my_tax_resident = this.taxInfoForm.value.my_tax_resident;
    
    //console.log(this.us_citizenship_greencard_passport);
    //console.log(this.my_tax_resident);
    this.counter.emit(2);
    //this.router.navigateByUrl('support-doc');
  }

}
