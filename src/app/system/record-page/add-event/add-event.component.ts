import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import * as moment from 'moment';
import {NgForm} from '@angular/forms';
import {RudkevychoEvent} from '../../shared/models/event.model';
import {EventsService} from '../../shared/services/events.service';
import {BillService} from '../../shared/services/bill.service';
import {Bill} from '../../shared/models/bill.model';
import {mergeMap} from 'rxjs/operators';
import {Message} from '../../../shared/models/message.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'rudkevycho-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {
  @Input() categories: Category[] = [];

  types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];

  message: Message;
  sub1: Subscription;
  sub2: Subscription;

  constructor(
    public eventsService: EventsService,
    public billService: BillService
  ) {
  }

  ngOnInit() {
    this.message = new Message('', 'danger');
  }

  private showMessage(text: string) {
    this.message.text = text;
    window.setTimeout(() => this.message.text = '', 5000);
  }

  onSubmit(form: NgForm) {
    const {category, type, amount, description} = form.value;
    const newEvent = new RudkevychoEvent(type, Math.abs(amount), +category, moment()
      .format('DD.MM.YYYY HH:MM:SS'), description);

    this.sub1 = this.billService.getBill().subscribe((bill: Bill) => {
      let value = 0;
      if (type === 'outcome') {
        if (amount > bill.value) {
          this.showMessage(`You do not have enough money in your account. Not enough ${amount - bill.value}`);
        } else {
          value = bill.value - amount;
        }
      } else {
        value = bill.value + amount;
      }

      this.sub2 = this.billService.updateBill({value, currency: bill.currency})
        .pipe(mergeMap(() => this.eventsService.addEvent(newEvent)))
        .subscribe(() => {
          form.setValue({
            amount: 0,
            description: ' ',
            category: 1,
            type: 'income'
          });
        });
    });

  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }

    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

}

