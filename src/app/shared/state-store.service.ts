import { Injectable, Inject } from '@angular/core';
import { State } from './state';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateStoreService {
  constructor(private http: HttpClient,
    @Inject('API_ENDPOINT') private api: string) {
  }

  public getAll(): Observable<Array<State>> {
    return this.http.get(`${this.api}/states`)
    .pipe(
      retry(3),
      map(rawState => State.fromObjects(rawState))
    );
  }
}
