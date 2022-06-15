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
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RandomDrinkComponent } from './random-drink/random-drink.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { SpecialsResultsComponent } from './specials-results/specials-results.component';
import { SpecialsInfoComponent } from './specials-info/specials-info.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { RandomDrinkInfoComponent } from './random-drink-info/random-drink-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkInfoComponent,
    SearchDrinkComponent,
    NavigationComponent,
    SearchResultsComponent,
    LandingPageSearchDrinkComponent,
    HomeComponent,
    SpecialsCocktailsComponent,
    PagenotfoundComponent,
    RandomDrinkComponent,
    WineListComponent,
    SpecialsResultsComponent,
    SpecialsInfoComponent,
    CrudFormComponent,
    BeerListComponent,
    RandomDrinkInfoComponent,
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
