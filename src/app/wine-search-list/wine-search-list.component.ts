import { Wine } from './../shared/wine';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { WineStoreService } from '../shared/wine-store.service';

@Component({
  selector: 'winedb-wine-search-list',
  templateUrl: './wine-search-list.component.html',
})
export class WineSearchListComponent implements OnInit {
  searchTerm = '';
  wineNames: string[];
  keyup = new EventEmitter<string>();
  @Output() wineName: EventEmitter<String> = new EventEmitter<String>();

  constructor(private wineStore: WineStoreService) {}

  ngOnInit() {
    this.keyup.pipe(
      filter(term => term.length >= 1),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => this.wineStore.searchDropdown(term)),
    ).subscribe(wines => this.wineNames = Array.from(new Set(wines.map(wine => wine.name))));
  }

  dropDownSelected(name: string) {
    this.searchTerm = name;
    this.wineName.emit(name);
  }
}
