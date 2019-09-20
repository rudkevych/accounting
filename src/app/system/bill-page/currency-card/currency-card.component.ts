import {Component, Inject, Input, LOCALE_ID, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'rudkevycho-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currency: any;

  currencies: string[] = ['GBP', 'JPY'];
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  ngOnInit() {
  }

  getDate() {
    const date = new Date(this.currency.date);
    return formatDate(date, 'dd.MM.yyyy', this.locale);
  }
}
