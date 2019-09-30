import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../shared/models/category.model';
import {RudkevychoEvent} from '../shared/models/event.model';
import {EventsService} from '../shared/services/events.service';
import {CategoriesService} from '../shared/services/categories.service';
import {combineLatest, Subscription} from 'rxjs';

@Component({
  selector: 'rudkevycho-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {

  categories: Category[] = [];
  events: RudkevychoEvent[] = [];
  isLoaded = false;
  chartData = [];
  sub1: Subscription;

  constructor(
    private eventsService: EventsService,
    private categoryService: CategoriesService,
  ) {
  }

  ngOnInit() {
    const observerObj = combineLatest([
      this.categoryService.getCategories(),
      this.eventsService.getEvents()
    ]);

    this.sub1 = observerObj.subscribe((data: [Category[], RudkevychoEvent[]]) => {
      console.log(data);
      this.categories = data[0];
      this.events = data[1];

      this.calculateCharData();
      this.isLoaded = true;
    });
  }

  calculateCharData() {
    this.chartData = [];
    // console.log(this.categories);
    // console.log(this.events);

    this.categories.forEach((cat) => {
      const catEvents = this.events.filter((e) => e.category === cat.id && e.type === 'outcome');
      this.chartData.push({
        name: cat.name,
        value: catEvents.reduce((total, event) => {
          total += event.amount;
          return total;
        }, 0)
      });
    });
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }


}
