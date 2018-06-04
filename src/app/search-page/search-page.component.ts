import { Component, OnInit } from '@angular/core';
import { Producer } from '../shared/producer';

@Component({
  selector: 'winedb-search-page',
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent {
  searchName?: string;
  searchProducerId?: number;

  constructor() {
    this.searchName = '';
  }

  selectedProducerChanged(producer: Producer) {
    if (producer) {
      this.searchProducerId = producer.id;
      alert(producer.name);
    } else {
      this.searchProducerId = null;
    }
  }
}
