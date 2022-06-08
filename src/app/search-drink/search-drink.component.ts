import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-drink',
  templateUrl: './search-drink.component.html',
  styleUrls: ['./search-drink.component.css']
})
export class SearchDrinkComponent {

  searchDrinks({searchTerm}: { searchTerm: string; }){
    console.log(searchTerm)
  }

}
