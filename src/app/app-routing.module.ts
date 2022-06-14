import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageSearchDrinkComponent } from './landing-page-search-drink/landing-page-search-drink.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SpecialsCocktailsComponent } from './specials-cocktails/specials-cocktails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RandomDrinkComponent } from './random-drink/random-drink.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { SpecialsResultsComponent } from './specials-results/specials-results.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "search-drink",
  component: LandingPageSearchDrinkComponent
},{
  path: "search-drink-results",
  component: SearchResultsComponent
},{
  path: "view-specials",
  component: SpecialsCocktailsComponent
},{
  path: "view-specials/:name",
  component: SpecialsResultsComponent
},{
  path: "generate-random",
  component: RandomDrinkComponent
},{
  path: "wine-list",
  component: WineListComponent
},{
  path: "404",
  component: PagenotfoundComponent
},{
  path: "**",
  redirectTo: "/404", pathMatch: "full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
