import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Subscription} from 'rxjs';
import {Bill} from '../shared/models/bill.model';
import {BillService} from '../shared/services/bill.service';

@Component({
  selector: 'rudkevycho-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {
  private sub1: Subscription;
  private sub2: Subscription;

  private bill: Bill;
  private currency: any;
  isLoaded = false;

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    const observerObj = combineLatest([
      this.billService.getBill(),
      this.billService.getCurrency('USD')
    ]);

    this.sub1 = observerObj.subscribe((data: [Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });

  }

  onRefresh() {
    this.isLoaded = false;
    this.sub2 = this.billService.getCurrency('USD')
      .subscribe((currency: any) => {
        this.currency = currency;
        this.isLoaded = true;
      });
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}
