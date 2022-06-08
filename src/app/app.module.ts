import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkInfoComponent } from './drink-info/drink-info.component';
import { SearchDrinkComponent } from './search-drink/search-drink.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LandingPageSearchDrinkComponent } from './landing-page-search-drink/landing-page-search-drink.component';
import { HomeComponent } from './home/home.component';
import { SpecialsCocktailsComponent } from './specials-cocktails/specials-cocktails.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkInfoComponent,
    SearchDrinkComponent,
    NavigationComponent,
    SearchResultsComponent,
    LandingPageSearchDrinkComponent,
    HomeComponent,
    SpecialsCocktailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
