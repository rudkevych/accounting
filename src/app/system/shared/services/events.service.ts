import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RudkevychoEvent} from '../models/event.model';

@Injectable()
export class EventsService {
  constructor(public http: HttpClient) {
  }

  addEvent(event: RudkevychoEvent): Observable<RudkevychoEvent> {
    return this.http.post<RudkevychoEvent>(`http://localhost:3000/events`, event);
  }

  getEvents(): Observable<RudkevychoEvent[]> {
    return this.http.get<RudkevychoEvent[]>(`http://localhost:3000/events`);
  }
}
