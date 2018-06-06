import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Producer } from '../shared/producer';
import { ProducerStoreService } from '../shared/producer-store.service';
import { debounceTime } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'winedb-producer-list',
  templateUrl: './producer-list.component.html',
  styles: []
})
export class ProducerListComponent implements OnInit {
  searchTerm = '';
  producers: Producer[];
  keyup = new EventEmitter<string>();
  @Output() selectedProducer: EventEmitter<Producer> = new EventEmitter<Producer>();
  private lastSelection: Producer;

  constructor(private producerStore: ProducerStoreService) {}

  ngOnInit() {
    this.keyup.pipe(
      filter(term => term.length >= 1),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => this.producerStore.searchDropdown(term))
    ).subscribe(producers => {
      this.selectedProducer.emit(null);
      this.producers = producers;
    });
  }

  dropDownSelected(id: number) {
    const producer = this.producers.find(f => f.id === id);
    this.searchTerm = producer.name;
    this.selectedProducer.emit(producer);
    this.lastSelection = producer;
  }

  onBlur() {
    if (!this.lastSelection || this.lastSelection.name !== this.searchTerm) {
      this.searchTerm = null;
    }
  }
}
