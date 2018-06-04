import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Producer } from '../shared/producer';
import { ProducerStoreService } from '../shared/producer-store.service';

@Component({
  selector: 'winedb-producer-list',
  templateUrl: './producer-list.component.html',
  styles: []
})
export class ProducerListComponent implements OnInit {
  producers: Producer[];
  @Output() selectedProducer: EventEmitter<Producer> = new EventEmitter<Producer>();

  constructor(private producerStore: ProducerStoreService) {}

  ngOnInit() {
    this.producerStore.getAll().subscribe(producers => this.producers = producers);
  }

  onChange(id: string) {
    const numericId = parseInt(id, 10);
    const producer = this.producers.find(f => f.id === numericId);
    this.selectedProducer.emit(producer);
  }
}
