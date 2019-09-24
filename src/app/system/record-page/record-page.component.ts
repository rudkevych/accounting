import {Component, OnInit} from '@angular/core';
import {Category} from '../shared/models/category.model';

@Component({
  selector: 'rudkevycho-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.scss']
})
export class RecordPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newCategoryAdded(category: Category) {
    // add to array
  }

}
