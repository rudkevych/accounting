import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../shared/services/categories.service';
import {Category} from '../../shared/models/category.model';

@Component({
  selector: 'rudkevycho-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})

export class AddCategoryComponent {

  @Output() categoryAdd = new EventEmitter<Category>();

  constructor(private categoriesService: CategoriesService) {
  }

  onSubmit(form: NgForm) {
    const {name, capacity} = form.value;

    const newCategory = new Category(name, Math.abs(capacity));

    this.categoriesService.addCategory(newCategory)
      .subscribe((category: Category) => {
        console.log(category);
        form.reset();
        form.form.patchValue({category: 1});
        this.categoryAdd.emit(category);
      });
  }

}
