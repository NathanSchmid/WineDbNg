import { Category } from './category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryStoreService {

  private api = 'http://localhost:51490/api';
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Array<Category>> {
    return this.http.get(`${this.api}/categories`)
      .pipe(
        retry(3),
        map(rawCategories => Category.fromObjects(rawCategories))
      );
  }
}
