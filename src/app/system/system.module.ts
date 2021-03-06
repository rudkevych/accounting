import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {BillPageComponent} from './bill-page/bill-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {RecordPageComponent} from './record-page/record-page.component';
import {SystemComponent} from './system.component';
import {SystemRoutingModule} from './system-routing.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {DropdownDirective} from './shared/directives/dropdown.directive';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';
import { AddEventComponent } from './record-page/add-event/add-event.component';
import { AddCategoryComponent } from './record-page/add-category/add-category.component';
import { EditCategoryComponent } from './record-page/edit-category/edit-category.component';
import {CategoriesService} from './shared/services/categories.service';
import {BillService} from './shared/services/bill.service';
import {EventsService} from './shared/services/events.service';
import { HistoryChartComponent } from './history-page/history-chart/history-chart.component';
import { HistoryDetailComponent } from './history-page/history-detail/history-detail.component';
import { HistoryEventsComponent } from './history-page/history-events/history-events.component';
import { HistoryFilterComponent } from './history-page/history-filter/history-filter.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordPageComponent,
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective,
    BillCardComponent,
    CurrencyCardComponent,
    AddEventComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    HistoryChartComponent,
    HistoryDetailComponent,
    HistoryEventsComponent,
    HistoryFilterComponent
  ],
  providers: [
    BillService,
    CategoriesService,
    EventsService
  ]
})
export class SystemModule {

}
