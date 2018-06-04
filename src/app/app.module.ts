import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProducerStoreService } from './shared/producer-store.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProducerListComponent } from './producer-list/producer-list.component';
import { WineStoreService } from './shared/wine-store.service';
import { WineListComponent } from './wine-list/wine-list.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { WineDetailsPageComponent } from './wine-details-page/wine-details-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProducerListComponent,
    WineListComponent,
    SearchPageComponent,
    WineDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProducerStoreService, WineStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
