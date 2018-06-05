import { WineStoreService } from './../shared/wine-store.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine';

@Component({
  selector: 'winedb-wine-list',
  templateUrl: './wine-list.component.html'
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];

  constructor(private wineStore: WineStoreService) { }

  ngOnInit() {
    this.wineStore.search(null, null, null, [], true, false).subscribe(wines => this.wines = wines);
  }

  public search(name: string, producerId: number, blendId: number, categoryIds: number[], inStock: boolean, toDrink: boolean): void {
    console.log(`Searching for name=${name}, prodcuerId=${producerId}, blendId=${blendId},` +
        `categoryIds=${categoryIds}, inStock=${inStock}, toDrink=${toDrink}`);
    this.wineStore.search(name, producerId, blendId, categoryIds, inStock, toDrink).subscribe(wines => this.wines = wines);
  }
}
