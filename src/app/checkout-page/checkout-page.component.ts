import { Bottle } from './../shared/bottle';
import { WineStoreService } from './../shared/wine-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { State } from '../shared/state';
import { StateStoreService } from '../shared/state-store.service';

@Component({
  selector: 'winedb-checkout-page',
  templateUrl: './checkout-page.component.html',
})
export class CheckoutPageComponent implements OnInit {
  CONSUMED_STATE = 'konsumiert';
  ratings: number[] = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0];
  states: State[];
  consumedState: State;
  code: string;
  model = {
    rating: undefined,
    stateId: undefined,
    checkoutDate: new Date()
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private stateStore: StateStoreService,
    private wineStore: WineStoreService,
    private location: Location) { }

  ngOnInit() {
    this.code = this.route.snapshot.params['code'];
    this.stateStore.getAll().subscribe(states => {
      this.states = states;
      this.consumedState = states.find(state => state.name === this.CONSUMED_STATE);
    });
  }

  onSubmit() {
    this.wineStore.checkout(this.code, this.model.rating, this.model.stateId, this.model.checkoutDate)
      .subscribe(_ => this.location.back());
  }

  onRate(rating) {
    // if rated set to consumed too.
    if (rating && this.consumedState) {
      this.model.stateId = this.consumedState.id;
    }
    this.model.rating = rating;
  }

}
