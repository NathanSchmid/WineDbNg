import { Category } from './category';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryStoreService {
  constructor(private http: HttpClient,
    @Inject('API_ENDPOINT') private api: string) {
  }

  public getAll(): Observable<Array<Category>> {
    return this.http.get(`${this.api}/categories`)
      .pipe(
        retry(3),
        map(rawCategories => Category.fromObjects(rawCategories))
      );
  }
}
