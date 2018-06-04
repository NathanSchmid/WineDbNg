import { Injectable } from '@angular/core';
import { Producer } from './producer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable()
export class ProducerStoreService {
  private api = 'http://localhost:51490/api';
  producers: Producer[];

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Array<Producer>> {
    return this.http.get(`${this.api}/producers`)
    .pipe(
      retry(3),
      map(rawProducer => Producer.fromObjects(rawProducer))
    );
  }
}
