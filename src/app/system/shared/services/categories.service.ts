import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category.model';


@Injectable()
export class CategoriesService {
  constructor(public http: HttpClient) {}

  addCategory(category: Category) {
    this.http.post('categories', category);
  }
}
