import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bill} from '../models/bill.model';

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {
  }

  getBill(): Observable<Bill> {
    return this.http.get<Bill>(`http://localhost:3000/bill`);
  }

  getCurrency(base: string): Observable<any> {
    return this.http
      .get('http://data.fixer.io/api/latest?access_key=c5877f78324225e2c5cb9785ff03a645&symbols=USD,GBP,JPY');
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.http.put<Bill>(`http://localhost:3000/bill`, bill);
  }
}
