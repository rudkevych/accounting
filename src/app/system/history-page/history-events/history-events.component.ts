import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import {RudkevychoEvent} from '../../shared/models/event.model';

@Component({
  selector: 'rudkevycho-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Input() events: RudkevychoEvent[] = [];

  constructor() {
  }

  ngOnInit() {
    console.log('events', this.events);
    console.log('categories', this.categories);
    this.events.forEach((e) => {
      e.categoryName = this.categories.find(c => c.id === e.category).name;
    });
  }

  getEventClass(event: RudkevychoEvent) {
    if (event.type === 'outcome') {
      return 'label label-danger';
    }
    return 'label label-success';
  }

}
