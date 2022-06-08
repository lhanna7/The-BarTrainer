import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageSearchDrinkComponent } from './landing-page-search-drink/landing-page-search-drink.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SpecialsCocktailsComponent } from './specials-cocktails/specials-cocktails.component';

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
