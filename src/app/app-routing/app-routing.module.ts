import { SearchPageComponent } from './../search-page/search-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineDetailsPageComponent } from '../wine-details-page/wine-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
  {
    path: 'wines',
    component: WineDetailsPageComponent,
  },
  {
    path: 'wines/:id',
    component: WineDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
