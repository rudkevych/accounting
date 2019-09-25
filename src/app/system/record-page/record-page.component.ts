import {Component, OnInit} from '@angular/core';
import {Category} from '../shared/models/category.model';
import {CategoriesService} from '../shared/services/categories.service';

@Component({
  selector: 'rudkevycho-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.scss']
})
export class RecordPageComponent implements OnInit {
  categories: Category[] = [];
  isLoaded = false;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categoriesService.getCategories()
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



}
