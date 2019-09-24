import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category.model';
import {User} from '../../../shared/models/user.model';
import {Observable} from 'rxjs';


@Injectable()
export class CategoriesService {
  constructor(public http: HttpClient) {}

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`http://localhost:3000/categories`, category);
  }
}
