import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../shared/models/bill.model';

@Component({
  selector: 'rudkevycho-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  pound: number;
  yen: number;

  constructor() {
  }

  ngOnInit(): void {
    const {rates} = this.currency;
    this.pound = this.bill.value * rates.GBP;
    this.yen = this.bill.value * rates.JPY;
  }



}
