import { WineStoreService } from './../shared/wine-store.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine';

@Component({
  selector: 'winedb-wine-list',
  templateUrl: './wine-list.component.html'
})
export class WineListComponent implements OnInit {
  wines: Wine[];

  constructor(private wineStore: WineStoreService) { }

  ngOnInit() {
    this.wineStore.getAll().subscribe(wines => this.wines = wines);
  }
}
