import { Category } from './../shared/category';
import { WineListComponent } from './../wine-list/wine-list.component';
import { Component, OnInit } from '@angular/core';
import { Producer } from '../shared/producer';
import { Blend } from '../shared/blend';

@Component({
  selector: 'winedb-search-page',
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent {
  searchName?: string;
  searchProducerId?: number;
  searchBlendId?: number;
  searchCategoryIds: number[] = [];
  searchInStock = true;
  searchToDrink = false;

  constructor() {
    this.searchName = '';
  }

  wineNameChanged(wineName: string) {
    this.searchName = wineName;
  }

  selectedProducerChanged(producer: Producer) {
    if (producer) {
      this.searchProducerId = producer.id;
    } else {
      this.searchProducerId = null;
    }
  }

  selectedBlendChanged(blend: Blend) {
    if (blend) {
      this.searchBlendId = blend.id;
    } else {
      this.searchBlendId = null;
    }
  }

  selectedCategoriesChanged(categories: Category[]) {
    this.searchCategoryIds = categories.map(c => c.id);
  }

  inStockChanged(checked: boolean) {
    this.searchInStock = checked;
  }

  toDrinkChanged(checked: boolean) {
    this.searchToDrink = checked;
  }

  startSearch(wineList: WineListComponent) {
    wineList.search(this.searchName, this.searchProducerId, this.searchBlendId, this.searchCategoryIds, this.searchInStock, this.searchToDrink);
  }
}
