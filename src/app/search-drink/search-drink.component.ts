import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-drink',
  templateUrl: './search-drink.component.html',
  styleUrls: ['./search-drink.component.css']
})
export class SearchDrinkComponent {

  constructor(private router: Router) {}

  searchDrinks({searchTerm}: { searchTerm: string; }){
    console.log(searchTerm)
    this.router.navigate([`/search-drink-results`], { queryParams: { search: searchTerm } })
  }

}
