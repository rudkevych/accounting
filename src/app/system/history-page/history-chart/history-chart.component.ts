import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from '../../shared/services/categories.service';
import {combineLatest} from 'rxjs';
import {Category} from '../../shared/models/category.model';
import {RudkevychoEvent} from '../../shared/models/event.model';
import {EventsService} from '../../shared/services/events.service';

@Component({
  selector: 'rudkevycho-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent {

  @Input() data;

}
