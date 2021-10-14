import { Injectable } from '@angular/core';
import { TaxInfo } from '../model/tax-info.model';

@Injectable({
  providedIn: 'root'
})
export class TaxInfoService {

  taxInfoObject: TaxInfo = new TaxInfo();

  constructor() { }

  setTaxInfoObject(taxInfoObject: TaxInfo){
    this.taxInfoObject = taxInfoObject;
    console.log(this.taxInfoObject)
  }
}
