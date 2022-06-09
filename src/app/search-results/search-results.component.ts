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

  drinks: Drink[] = []

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
      this.drinkService.fetchDrinks().subscribe(response => {
        this.drinks = response.drinks
      });
  }

}
