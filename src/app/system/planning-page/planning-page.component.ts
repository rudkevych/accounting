import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../shared/services/bill.service';
import {CategoriesService} from '../shared/services/categories.service';
import {EventsService} from '../shared/services/events.service';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {Bill} from '../shared/models/bill.model';
import {Category} from '../shared/models/category.model';
import {RudkevychoEvent} from '../shared/models/event.model';
import {log} from 'util';

@Component({
  selector: 'rudkevycho-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit, OnDestroy {

  isLoaded = false;
  bill: Bill;
  categories: Category[] = [];
  events: RudkevychoEvent[] = [];

  sub1: Subscription;

  constructor(private billService: BillService,
              private categoryService: CategoriesService,
              private eventsService: EventsService) {
  }

  ngOnInit() {
    const observerObj = combineLatest([
      this.billService.getBill(),
      this.categoryService.getCategories(),
      this.eventsService.getEvents()
    ]);

    this.sub1 = observerObj.subscribe((data: [Bill, Category[], RudkevychoEvent[]]) => {
      this.bill = data[0];
      this.categories = data[1];
      this.events = data[2];

      this.isLoaded = true;
    });

  }

  getCategoryCost(category: Category): number {
    const categoryEvents = this.events.filter(e => e.category === category.id && e.type === 'outcome');

    return categoryEvents.reduce((total, e) => {
      total += e.amount;
      return total;
    }, 0);
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
