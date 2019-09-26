import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import * as moment from 'moment';
import {NgForm} from '@angular/forms';
import {RudkevychoEvent} from '../../shared/models/event.model';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {category, type, amount, description} = form.value;
    const newEvent = new RudkevychoEvent(type, Math.abs(amount), +category, moment()
      .format('DD.MM.YYYY HH:MM:SS'), description);
    console.log(newEvent);
  }

}
