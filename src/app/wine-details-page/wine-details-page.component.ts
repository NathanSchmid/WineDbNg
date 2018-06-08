import { WineStoreService } from './../shared/wine-store.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wine } from '../shared/wine';

@Component({
  selector: 'winedb-wine-details-page',
  templateUrl: './wine-details-page.component.html',
  styles: [ './wine-details-page.component.css']
})
export class WineDetailsPageComponent implements OnInit {
  AVAILABLE_STATES = [2];
  wines: Wine[];
  code = '';

  constructor(private wineStore: WineStoreService,
    private route: ActivatedRoute,
    @Inject('LABELS_ENDPOINT') private labelEndpoint: string
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    if (params['id']) {
      const id = parseInt(params['id'], 10);
      this.wineStore.getSingle(id).subscribe(wine => this.wines = [wine]);
    } else if (params['code']) {
      this.code = params['code'];
      this.wineStore.getByCode(this.code).subscribe(wine => this.wines = [wine]);
    }
  }
}
