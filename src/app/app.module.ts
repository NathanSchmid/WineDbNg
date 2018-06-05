import { CategoryStoreService } from './shared/category-store.service';
import { BlendStoreService } from './shared/blend-store.service';
import { EmojiRatingPipe } from './pipes/emoji-rating-pipe';
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
import { WineSearchListComponent } from './wine-search-list/wine-search-list.component';
import { WineColorBackgroundDirective } from './directives/wine-color-background.directive';
import { BlendSearchListComponent } from './blend-search-list/blend-search-list.component';
import { WineColorSearchComponent } from './wine-color-search/wine-color-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducerListComponent,
    WineListComponent,
    SearchPageComponent,
    WineDetailsPageComponent,
    WineSearchListComponent,
    EmojiRatingPipe,
    WineColorBackgroundDirective,
    BlendSearchListComponent,
    WineColorSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProducerStoreService, WineStoreService, BlendStoreService, CategoryStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
