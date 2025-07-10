import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GameSliderComponent } from './components/game-slider/game-slider.component';
import { PopularReviewsComponent } from './components/popular-reviews/popular-reviews.component';
import { PopularReviewsListComponent } from './components/popular-reviews-list/popular-reviews-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CarouselComponent,
    GameSliderComponent,
    PopularReviewsComponent,
    PopularReviewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
