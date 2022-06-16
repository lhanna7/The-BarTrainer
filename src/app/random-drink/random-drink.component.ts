import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../models/Drink';

@Component({
  selector: 'app-random-drink',
  templateUrl: './random-drink.component.html',
  styleUrls: ['./random-drink.component.css']
})
export class RandomDrinkComponent implements OnInit{
  results: Drink[] = []

  constructor(private drinkService: DrinkService) {}

  ngOnInit() {
      this.drinkService.fetchRandom().subscribe(response =>
      this.results = response.drinks)
  }
}
