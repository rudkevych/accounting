import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import * as moment from 'moment';
import {NgForm} from '@angular/forms';
import {RudkevychoEvent} from '../../shared/models/event.model';
import {EventsService} from '../../shared/services/events.service';
import {BillService} from '../../shared/services/bill.service';
import {Bill} from '../../shared/models/bill.model';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'rudkevycho-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @Input() categories: Category[] = [];

  types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];

  constructor(
    public eventsService: EventsService,
    public billService: BillService
  ) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {category, type, amount, description} = form.value;
    const newEvent = new RudkevychoEvent(type, Math.abs(amount), +category, moment()
      .format('DD.MM.YYYY HH:MM:SS'), description);

    this.billService.getBill().subscribe((bill: Bill) => {
      let value = 0;
      if (type === 'outcome') {
        if (amount > bill.value) {
          // error
        } else {
          value = bill.value - amount;
        }
      } else {
        value = bill.value + amount;
      }

      this.billService.updateBill({value, currency: bill.currency})
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

}

