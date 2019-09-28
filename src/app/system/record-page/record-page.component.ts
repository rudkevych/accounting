import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../shared/models/category.model';
import {CategoriesService} from '../shared/services/categories.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'rudkevycho-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.scss']
})
export class RecordPageComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  isLoaded = false;
  sub1: Subscription;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.sub1 = this.categoriesService.getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.isLoaded = true;
      });
  }

  newCategoryAdded(category: Category) {
    this.categories.push(category);
  }

  categoryEdited(category: Category) {
    const idx = this.categories.findIndex(c => c.id === category.id);
    this.categories[idx] = category;
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
