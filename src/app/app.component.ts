import { Component, OnInit } from '@angular/core';
import { DrinkService } from './drink.service';
import { Drink } from './models/Drink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  drinks: Drink[] = []

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
      this.drinkService.fetchDrinks().subscribe(response => {
        this.drinks = response.drinks
      });
  }

}
