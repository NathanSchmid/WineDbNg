import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wine } from './wine';
import { Producer } from './producer';
import { Bottle } from './bottle';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class WineStoreService {
  private api = 'http://localhost:51490/api';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Array<Wine>> {
    return this.http.get(`${this.api}/wines`)
      .pipe(
        retry(3),
        map(rawWine => Wine.fromObjects(rawWine))
      );
  }

  public getSingle(id: number): Observable<Wine> {
    return this.http.get(`${this.api}/wines/${id}`)
    .pipe(
      retry(3),
      map(rawWine => Wine.fromObject(rawWine))
    );
  }
}
