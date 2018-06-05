import { WineStoreService } from './../shared/wine-store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wine } from '../shared/wine';

@Component({
  selector: 'winedb-wine-details-page',
  templateUrl: './wine-details-page.component.html',
  styles: []
})
export class WineDetailsPageComponent implements OnInit {
  wines: Wine[];
  labelEndpoint = 'https://wl59www255.webland.ch/WineLabelHandler.ashx';

  constructor(private wineStore: WineStoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    const id = parseInt(params['id'], 10);
    this.wineStore.getSingle(id)
      .subscribe(wine => this.wines = [wine]);
  }
}
