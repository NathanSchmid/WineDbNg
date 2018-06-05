import { Injectable, Inject } from '@angular/core';
import { Producer } from './producer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable()
export class ProducerStoreService {
  constructor(private http: HttpClient,
    @Inject('API_ENDPOINT') private api: string) {
  }

  public searchDropdown(name: string): Observable<Array<Producer>> {
    return this.http.get(`${this.api}/producers?$filter=indexof(toupper(Name),'${name.toUpperCase()}') gt -1&$top=10`)
    .pipe(
      retry(3),
      map(rawProducer => Producer.fromObjects(rawProducer))
    );
  }
}
