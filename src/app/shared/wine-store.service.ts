import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Wine } from './wine';
import { Producer } from './producer';
import { Bottle } from './bottle';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class WineStoreService {
  constructor(private http: HttpClient,
    @Inject('API_ENDPOINT') private api: string) {
  }
  public getSingle(id: number): Observable<Wine> {
    return this.http.get(`${this.api}/wines/${id}`)
    .pipe(
      retry(3),
      map(rawWine => Wine.fromObject(rawWine))
    );
  }

  public searchDropdown(name: string): Observable<Array<Wine>> {
    return this.http.get(`${this.api}/wines?$filter=indexof(toupper(Name),'${name.toUpperCase()}') gt -1&$top=10`)
      .pipe(
        retry(3),
        map(rawWine => Wine.fromObjects(rawWine))
      );
  }

  public search(name: string, producerId: number, blendId: number, categoryIds: number[],
    inStock: boolean, toDrink: boolean): Observable<Array<Wine>> {
    let url = `${this.api}/wines?`;

    let separator = '';
    let filter = '';
    if (name) {
      filter += separator;
      filter += `indexof(toupper(Name),'${name.toUpperCase()}') gt -1`;
      separator = ' and ';
    }
    if (producerId) {
      filter += separator;
      filter += `ProducerId eq ${producerId}`;
      separator = ' and ';
    }
    if (blendId) {
      filter += separator;
      filter += `BlendId eq ${blendId}`;
      separator = ' and ';
    }
    if (categoryIds.length > 0) {
      filter += separator;
      filter += '(';
      let or = '';
      for (const categoryId of categoryIds) {
        filter += or;
        filter += `CategoryId eq ${categoryId}`;
        or = ' or ';
      }
      filter += ')';
      separator = ' and ';
    }
    if (inStock || toDrink) {
      filter += separator;
      filter += `NumberInStock gt 0`;
    }
    if (filter) {
      url += `\$filter=${filter}&`;
    }

    if (!toDrink) {
      url += '&$orderby=Vintage,Name';
    } else {
      url += '&$orderby=GoodTo,Vintage,Name';
    }

    return this.http.get(url)
      .pipe(
        retry(3),
        map(rawWine => Wine.fromObjects(rawWine))
      );
  }
}
