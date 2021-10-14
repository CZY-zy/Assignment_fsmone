import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-opt-in-for-stock',
  templateUrl: './opt-in-for-stock.component.html',
  styleUrls: ['./opt-in-for-stock.component.css']
})
export class OptInForStockComponent implements OnInit {

  @Output() counter = new EventEmitter<number>();
  step = 5;

  constructor() { }

  ngOnInit(): void {
  }

  back(){
    this.counter.emit(4);
  }

  saveAndContinue(){}

}
