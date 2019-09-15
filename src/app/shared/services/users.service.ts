import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {
  }

  getUserByEmail(email): Observable<User[]> {
    return this.httpClient.get<User[]>(`http://localhost:3000/users?email=${email}`);
  }

  createNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`http://localhost:3000/users`, user);
  }
}
