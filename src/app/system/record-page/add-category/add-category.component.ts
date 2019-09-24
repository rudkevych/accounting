import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../shared/services/categories.service';

@Component({
  selector: 'rudkevycho-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(categoriesService: CategoriesService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let {name, capacity} = form.value;
    if (capacity < 0) {
      capacity *= -1;
    }
  }
}
