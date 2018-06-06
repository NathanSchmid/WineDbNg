import { BlendStoreService } from './../shared/blend-store.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { Blend } from '../shared/blend';

@Component({
  selector: 'winedb-blend-search-list',
  templateUrl: './blend-search-list.component.html',
  styles: []
})
export class BlendSearchListComponent implements OnInit {
  searchTerm = '';
  blends: Blend[];
  keyup = new EventEmitter<string>();
  @Output() selectedBlend: EventEmitter<Blend> = new EventEmitter<Blend>();
  private lastSelection: Blend;

  constructor(private blendStore: BlendStoreService) {}

  ngOnInit() {
    this.keyup.pipe(
      filter(term => term.length >= 1),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => this.blendStore.searchDropdown(term))
    ).subscribe(blends => {
      this.selectedBlend.emit(null);
      this.blends = blends;
    });
  }

  dropDownSelected(blend: Blend) {
    this.searchTerm = blend.name;
    this.selectedBlend.emit(blend);
    this.lastSelection = blend;
  }

  onBlur() {
    if (!this.lastSelection || this.lastSelection.name !== this.searchTerm) {
      this.searchTerm = null;
    }
  }
}
