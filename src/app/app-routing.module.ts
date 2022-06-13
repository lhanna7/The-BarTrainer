import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageSearchDrinkComponent } from './landing-page-search-drink/landing-page-search-drink.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SpecialsCocktailsComponent } from './specials-cocktails/specials-cocktails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RandomDrinkComponent } from './random-drink/random-drink.component';

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
  path: "generate-random",
  component: RandomDrinkComponent
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
