import { Injectable } from '@angular/core';
import { Producer } from './producer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Blend } from './blend';


@Injectable({
  providedIn: 'root'
})
export class BlendStoreService {
  private api = 'http://localhost:51490/api';
  constructor(private http: HttpClient) {
  }

  public searchDropdown(name: string): Observable<Array<Producer>> {
    return this.http.get(`${this.api}/blends?$filter=indexof(toupper(Name),'${name.toUpperCase()}') gt -1&$top=10`)
    .pipe(
      retry(3),
      map(rawBlend => Blend.fromObjects(rawBlend))
    );
  }
}
