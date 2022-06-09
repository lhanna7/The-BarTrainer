import { Component,  } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../models/Drink';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  searchTerm = ""
  results: Drink[] = []

  constructor(private route: ActivatedRoute, private drinkService: DrinkService) {}

  ngOnInit() {
      return this.route.queryParams.subscribe(params => {
        this.searchTerm = params["search"]
        this.drinkService.search(this.searchTerm).subscribe(response => {
          this.results = response.drinks
        })
      })
  }

}
