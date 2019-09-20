import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rudkevycho-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currency: any;
  date: any;

  currencies: string[] = ['GBP', 'JPY'];

  ngOnInit() {
    this.date = this.currency.date;
  }
}
