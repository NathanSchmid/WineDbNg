import { WineStoreService } from './../shared/wine-store.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wine } from '../shared/wine';

@Component({
  selector: 'winedb-wine-details-page',
  templateUrl: './wine-details-page.component.html',
  styles: []
})
export class WineDetailsPageComponent implements OnInit {
  wines: Wine[];

  constructor(private wineStore: WineStoreService,
    private route: ActivatedRoute,
    @Inject('LABELS_ENDPOINT') private labelEndpoint: string
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    const id = parseInt(params['id'], 10);
    this.wineStore.getSingle(id)
      .subscribe(wine => this.wines = [wine]);
  }
}
